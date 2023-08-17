require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.NAME}:${process.env.PASS}@cluster0.ccg1noj.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    const db = client.db('video-site');
    const videoCollection = db.collection('videos');
    const tagCollection = db.collection('tags');

    app.get('/videos', async (req, res) => {
      try {
        const query = req.query;
        const filter = {};

        // Handle specific query parameters
        if (query.tags_like) {
          const tags = Array.isArray(query.tags_like) ? query.tags_like : [query.tags_like];
          filter.tags = { $in: tags };
        }

        if (query.isSaved_like) {
          filter.isSaved = Boolean(query.isSaved_like);
        }

        // Handle search query parameter
        if (query.q) {
            const searchRegex = new RegExp(query.q, 'i');
            filter.$or = [
            { title: searchRegex },
            { author: searchRegex },
            { tags: searchRegex }
            ];
        }


        if (query.id_ne) {
          filter._id = { $ne: new ObjectId(query.id_ne) };
        }

        // sort
        let sortCriteria = {};
        if (query._sort === 'newest') {
          sortCriteria = { createdAt: -1 }
        } else if (query._sort === 'most_liked') {
          sortCriteria = { likes: -1 }
        }

        // Fetch data based on filter
        const result = await videoCollection.find(filter).sort(sortCriteria).limit(parseInt(query._limit) || 10).toArray();

        res.json(result);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching blogs');
      }
    });

    app.post('/videos', async (req, res) => {
      const product = req.body;

      const result = await videoCollection.insertOne(product);

      res.send(result);
    });

    app.get('/video/:id', async (req, res) => {
      const id = req.params.id;

      const result = await videoCollection.findOne({ _id: new ObjectId(id) });

      res.send(result);
    });

    app.patch('/video/:id', async (req, res) => {
      const id = req.params.id;
      const data = req.body;

      try {
        const result = await videoCollection.findOneAndUpdate(
          { _id: new ObjectId(id) },
          { $set: data },
          {
            returnDocument: 'after',
          }
        );

        res.json(result.value);
      } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal server error' });
      }
    });

    app.post('/video/:id', async (req, res) => {
      const productId = req.params.id;
      const comment = req.body.comment;

      const result = await videoCollection.updateOne(
        { _id: ObjectId(productId) },
        { $push: { comments: comment } }
      );

      if (result.modifiedCount !== 1) {
        console.error('Product not found or comment not added');
        res.json({ error: 'Product not found or comment not added' });
        return;
      }

      res.json({ message: 'Comment added successfully' });
    });

    app.get('/tags', async (req, res) => {


      const result = await tagCollection.find({}).toArray();

      if (result) {
        res.json(result);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    });

  } finally {
  }
};

run().catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
require('dotenv').config();
const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://blog-site:giJp10ph4iwct0aw@cluster0.ccg1noj.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const run = async () => {
  try {
    // const check =  await client.connect();
    const db = client.db('blog-site');
    //   console.log(check,"check");
    const blogsCollection = db.collection('blogs');

    app.get('/blogs', async (req, res) => {
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
        console.log(filter, 'filter');
        // Fetch data based on filter
        const result = await blogsCollection.find(filter).sort(sortCriteria).limit(parseInt(query._limit) || 5).toArray();

        res.json(result);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching blogs');
      }
    });


    app.post('/product', async (req, res) => {
      const product = req.body;

      const result = await blogsCollection.insertOne(product);

      res.send(result);
    });

    app.get('/blog/:id', async (req, res) => {
      const id = req.params.id;
      console.log(id, 'id');
      console.log((id), 'ObjectId(id)');
      const result = await blogsCollection.findOne({ _id: new ObjectId(id) });
      console.log(result);
      res.send(result);
    });

    app.patch('/blog/:id', async (req, res) => {
      const id = req.params.id;
      const data = req.body;
      console.log(data, 'data');
      try {
        const result = await blogsCollection.findOneAndUpdate(
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

    app.post('/comment/:id', async (req, res) => {
      const productId = req.params.id;
      const comment = req.body.comment;

      console.log(productId);
      console.log(comment);

      const result = await blogsCollection.updateOne(
        { _id: ObjectId(productId) },
        { $push: { comments: comment } }
      );

      console.log(result);

      if (result.modifiedCount !== 1) {
        console.error('Product not found or comment not added');
        res.json({ error: 'Product not found or comment not added' });
        return;
      }

      console.log('Comment added successfully');
      res.json({ message: 'Comment added successfully' });
    });

    
    app.get('/comment/:id', async (req, res) => {
      const productId = req.params.id;

      const result = await blogsCollection.findOne(
        { _id: ObjectId(productId) },
        { projection: { _id: 0, comments: 1 } }
      );

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
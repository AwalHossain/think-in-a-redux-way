
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { BlogProps } from '../../features/blogs/blogsSlice';

interface PostGridItemProps {
  blogs: BlogProps
}

export default function PostGridItem({ blogs }: PostGridItemProps) {
  const { _id, title, image, likes, tags, isSaved } = blogs
  console.log(blogs._id, '_id');

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "400px",
      height: "auto",
      backgroundColor: "#fff",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden"
    }}>
      <Link to={`blog/${_id}`} >
        <img
          src={image}
          className="lws-card-image"
          alt=""
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover"
          }}
        />
      </Link>
      <div style={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      }}>
        <div>
          <div className="lws-card-header">
            <p className="lws-publishedDate">2023-05-01</p>
            {/* <div className="flex gap-2 mt-4"> */}

            {/* </div> */}
            <p className="lws-likeCount" style={{ marginRight: "0.5rem" }}>
              <i className="fa-regular fa-thumbs-up" data-tooltip-id="my-tooltip" data-tooltip-content="Like Post"></i>{likes}

              {
                isSaved ? (

                  <span className="lws-badge" data-tooltip-id="my-tooltip" style={{ marginLeft: "0.5rem" }} data-tooltip-content="Save Post"> Saved </span>

                ) : (

                  <i className="fa-regular fa-bookmark" data-tooltip-id="my-tooltip" style={{ marginLeft: "0.5rem" }} data-tooltip-content="Save Post"></i>


                )
              }


            </p>
          </div>
          <Link to={`blog/${_id}`} className="lws-postTitle">
            {title}
          </Link>
          <div className="lws-tags">
            {tags.map((tag, index) => <span key={index}>#{tag},</span>)}
          </div>
        </div>
      </div>
      <Tooltip id='my-tooltip' />
    </div>
  )
}

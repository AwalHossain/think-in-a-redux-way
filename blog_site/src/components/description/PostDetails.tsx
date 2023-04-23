
import { BlogProps } from "../../features/blog/blogSlice";

export default function PostDetails({ blog }: { blog: BlogProps }) {
    const { title, tags, image, createdAt, description, isSaved } = blog;
    return (
        <main className="post">
            <img src={image}
                alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {title}
                </h1>
                <div className="tags" id="lws-singleTags">
                    {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
                    {tags?.map((tag, index) => (
                        <span key={index}>#{tag},</span>
                    ))}
                </div>
                <div className="btn-group">
                    {/* <!-- handle like on button click --> */}
                    <button className="like-btn" id="lws-singleLinks">
                        <i className="fa-regular fa-thumbs-up"></i> 100
                    </button>
                    {/* <!-- handle save on button click --> */}
                    {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
                    <button className="active save-btn" id="lws-singleSavedBtn">
                        {
                            isSaved ? (
                                <span className="lws-badge"> Saved </span>
                            ) : (

                                <i className="fa-regular fa-bookmark"></i>
                            )
                        }
                    </button>
                </div>
                <div className="mt-6">
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </main>
    )
}

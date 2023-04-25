
import { useAppDispatch } from "../../app/hooks";
import { BlogProps } from "../../features/blog/blogSlice";
import { fetchLikes } from "../../features/filter/filterSlice";

export default function PostDetails({ blog }: { blog: BlogProps }) {
    const { title, tags, image, createdAt, description, isSaved, likes, id } = blog;
    // console.log(blog, "blog");

    const dispatch = useAppDispatch();

    const handleSave = () => {
        // dispatch()
    }

    const handleLike = (likes: number) => {
        console.log("clicked", likes);
        dispatch(fetchLikes({ id, likes }))
    }

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
                        <i onClick={() => handleLike(likes)} className="fa-regular fa-thumbs-up">{likes}</i>
                    </button>
                    <button className="active save-btn" id="lws-singleSavedBtn">
                        {
                            isSaved ? (
                                <span onClick={handleSave} className="lws-badge"> Saved </span>
                            ) : (

                                <i onClick={handleSave} className="fa-regular fa-bookmark"></i>
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

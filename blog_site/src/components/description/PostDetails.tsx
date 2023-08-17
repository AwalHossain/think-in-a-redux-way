
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { BlogProps } from "../../features/blog/blogSlice";
import axios from "../../features/utils/axios";

export default function PostDetails({ blog }: { blog: BlogProps }) {
    let { title, tags, image, createdAt, description, isSaved, _id, likes } = blog;
    const [like, setLike] = useState(0);
    const [saved, setSaved] = useState(false)
    const audio = new Audio('/notification.mp3')
    useEffect(() => {
        setSaved(isSaved)
    }, [isSaved])

    useEffect(() => {
        setLike(likes)
    }, [likes])


    const handleLike = async (likes: number) => {
        setLike(pre => pre + 1)
        await axios.patch(`/blog/${_id}`, {
            likes: like + 1
        })
        toast.success('Post liked!');
        audio.play()
    }

    const handleSave = async () => {
        setSaved(pre => !pre)
        await axios.patch(`/blog/${_id}`, {
            isSaved: !saved
        })
        if (saved) {
            toast.success('Post unsaved!');
            audio.play()
          } else {
            toast.success('Post saved!');
            audio.play()
          }
    }

    return (
        <main className="post">
            <img src={image}
                alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {title}
                </h1>
                <div className="tags" id="lws-singleTags" style={{marginBottom:"5px"}}>
                    {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
                    <p >{createdAt   }</p>
                    {tags?.map((tag, index) => (
                        <span key={index}>#{tag},</span>
                    ))}

                </div>
                <div className="btn-group">
                    {/* <!-- handle like on button click --> */}
                    <button className="like-btn" id="lws-singleLinks">
                        <i onClick={() => handleLike(likes)} className="fa-regular fa-thumbs-up">{like}</i>
                    </button>
                    <button className="active save-btn" id="lws-singleSavedBtn">
                        {
                            saved ? (
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

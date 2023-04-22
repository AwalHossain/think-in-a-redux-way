
import { Link } from 'react-router-dom'
import { BlogProps } from '../../features/blogs/blogsSlice'

interface PostGridItemProps {
    blogs: BlogProps
}

export default function PostGridItem({ blogs }: PostGridItemProps) {
    const { id, title, description, image, likes, tags, isSaved, createdAt } = blogs
    return (
        <div className="lws-card">
            <Link to={`blog/${id}`} >
                <img src={image} className="lws-card-image" alt="" />
            </Link>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">2023-05-01</p>
                    <p className="lws-likeCount">
                        <i className="fa-regular fa-thumbs-up"></i>{likes}
                    </p>
                </div>
                <Link to={`blog/${1}`} className="lws-postTitle">
                    {title}
                </Link>
                <div className="lws-tags">
                    {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
                    {tags.map((tag, index) => <span key={index}>#{tag},</span>)}
                </div>

                <div className="flex gap-2 mt-4">
                    {/* create a condition if isSave is true then show the saved button else show the save button */}

                    {/* <span className="lws-badge"> Saved </span> */}
                    {
                        isSaved ? (

                            <span className="lws-badge"> Saved </span>

                        ) : (

                            <i className="fa-regular fa-bookmark"></i>


                        )
                    }
                </div>

            </div>
        </div>
    )
}

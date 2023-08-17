import { Link } from "react-router-dom";

export interface Related {
    _id: string,
    title: string,
    description: string,
    image: string,
    tags: string[],
    likes: number,
    isSaved: boolean,
    createdAt: string,
};

type RelatedPostItemProps = {
    tag: Related
}


export default function RelatedPostItem({ tag }: RelatedPostItemProps) {
    const { tags, image, title, createdAt, _id } = tag

    return (
        <div key={_id} className="card">
            <Link to={`/blog/${_id}`}>
                <img src={image}
                    className="card-image" alt="" />
            </Link>
            <div className="p-4">
                <Link to={`/blog/${_id}`} className="text-lg post-title lws-RelatedPostTitle">
                    {title}
                </Link>
                <div className="mb-0 tags">
                    {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
                    {tags.map((tag: string) => <span>#{tag},</span>)}
                </div>
                <p>{createdAt}</p>
            </div>
        </div>
    )
}

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import PostDetails from "../components/description/PostDetails";
import RelatedPosts from "../components/relatedPosts/RelatedPosts";
import { fetchBlog } from "../features/blog/blogSlice";

export default function Blog() {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const { blog, error, status } = useAppSelector(state => state.blog);

    useEffect(() => {
        dispatch(fetchBlog(id))
    }, [dispatch, id])
    let content = null;
    if (status === "loading") {
        content = <div className="col-span-12">Loading...</div>
    }
    if (status === "idle" && blog === null) {
        content = <div className="col-span-12">No blog found</div>
    }
    if (status === "idle" && blog !== null) {
        content = <PostDetails blog={blog} />
    }


    return (
        <div>
            <div className="container mt-8">
                <a href="index.html" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    className="mr-2 fa-solid fa-house"></i>Go Home</a>
            </div>
            <section className="post-page-container">
                {/* <!-- detailed post  --> */}
                {/* <PostDetails /> */}

                {/* <!-- related posts --> */}
                <RelatedPosts />

            </section>

        </div>
    )
}

import PostDetails from "../components/description/PostDetails";
import RelatedPosts from "../components/relatedPosts/RelatedPosts";

export default function Blog() {
    return (
        <div>
            <div className="container mt-8">
                <a href="index.html" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
                    className="mr-2 fa-solid fa-house"></i>Go Home</a>
            </div>
            <section className="post-page-container">
                {/* <!-- detailed post  --> */}
                <PostDetails />

                {/* <!-- related posts --> */}
                <RelatedPosts />

            </section>

        </div>
    )
}

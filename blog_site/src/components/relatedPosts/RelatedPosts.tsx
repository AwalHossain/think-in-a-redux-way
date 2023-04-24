import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTags } from "../../features/tags/tagsSlice";
import RelatedPostItem from "./RelatedPostItem";

export interface TagsProps {
    relatedPosts: string[],
    currentId: string | undefined
}

export default function RelatedPosts({ currentId, relatedPosts }: TagsProps) {

    const dispatch = useAppDispatch();
    const { tags } = useAppSelector((state) => state.tags)

    useEffect(() => {
        dispatch(fetchTags({ relatedPosts, currentId }))

    }, [dispatch, relatedPosts, currentId]
    )


    let content = null;

    if (relatedPosts) {
        content = tags.map((tag, index) =>
            <RelatedPostItem tag={tag} />
        )
    } else {
        content = <p className="text-center">No related posts found</p>
    }



    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div className="space-y-4 related-post-container">
                {/* <!-- related post  --> */}
                {/* <!-- related post ends --> */}
                {content}
            </div>
        </aside>
    )
}

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTags } from "../../features/tags/tagsSlice";
import Loading from "../ui/Loading";
import Tag from "./Tag";

export interface TagProps {
    id: string,
    title: string,
}


export default function Tags() {
    const dispatch = useAppDispatch();
    const { error, isError, status, tags } = useAppSelector((state) => state.tags);

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    let content;

    if (status === "loading") {
        content = <Loading />
    }
    if (status === "idle" && tags.length === 0) {
        content = <div className="col-span-12">No tags found</div>
    }

    if (!isError && status === "idle" && tags.length > 0) {
        content = tags.map((tag: TagProps) => <Tag key={tag?.id} tag={tag} />)
    }

    if (isError && status === "idle") {
        content = <div className="col-span-12">{error}</div>
    }

    return (
        <section>
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
            >
                {content}
            </div>
        </section>
    )
}

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Description from "../components/description/Description";
import Player from "../components/description/Player";
import RelatedVideo from "../components/list/RelatedVideo";
import Loading from "../components/ui/Loading";
import { fetchVideo } from "../features/video/videoSlice";

const Video = () => {
    const { isError, error, status, video } = useAppSelector(state => state.video);

    const { videoId } = useParams<{ videoId: string | undefined }>();
    const dispatch = useAppDispatch();
    useEffect(() => {

        dispatch(fetchVideo(videoId));
    }, [dispatch, videoId]);

    console.log(video, "video");


    const { id, link, title, tags } = video || {};

    let content;

    if (status === "loading") {
        content = <Loading />
    }

    if (!isError && status === "idle" && !video?.id) {
        content = <div className="col-span-12">No video found</div>
    }

    if (isError && status === "idle") {
        content = <div className="col-span-12">{error}</div>
    }

    if (!isError && status === "idle" && video?.id) {
        content = (
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
                <div className="col-span-full w-full space-y-8 lg:col-span-2">
                    <Player link={link} title={title} />
                    <Description video={video} />
                </div>
                <RelatedVideo currentVideoId={video?.id} tags={tags} />
            </div>
        )
    }

    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>
    )
}

export default Video;
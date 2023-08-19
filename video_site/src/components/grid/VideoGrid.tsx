import { useAppSelector } from "../../app/hooks";
import Loading from "../ui/Loading";
import VideoGridItem from "./VideoGridItem";


interface Video {

    _id: string,
    title: string,
    description: string,
    thumbnail: string,
    author: string,
    avatar: string,
    views: number,
    link: string,
    likes: number,
    unlikes: number,
    tags: string[],
    duration: string,
    date: string
}

export default function VideoGrid() {
    const { isError, error, status, videos:list } = useAppSelector(state => state.videos);
  
    const videos = list?.videos;

    let content;

    if (status === "loading") {
        content = <Loading />
    }
    if (status === "idle" && videos.length === 0) {
        content = <div className="col-span-12">No videos found</div>
    }

    if (!isError && status === "idle" && videos.length > 0) {
        content = videos.map((video: Video) => <VideoGridItem key={video?._id} video={video} />)
    }

    if (isError && status === "failed") {
        content = <div className="col-span-12">{error}</div>
    }

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >
                    {content}
                </div>
            </section>
        </section>

    )
}

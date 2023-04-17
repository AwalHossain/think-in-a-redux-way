
import { Link } from 'react-router-dom';

export interface VideoProps {
    video: {
        id: string,
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
    },
    key: string

}

export default function VideoGridItem({ video }: VideoProps) {
    const { id, title, description, date, thumbnail, author, avatar, views, link, likes, unlikes, tags, duration } = video;
    console.log(video, "video");

    return (
        <div
            key={video?.id}
            className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]"
        >
            <div className="w-full flex flex-col">
                <div className="relative">
                    <Link to={`videos/${id}`}>
                        <img
                            src={thumbnail}
                            className="w-full h-auto"
                            alt="Some video title"
                        />
                    </Link>

                    <p
                        className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                    >
                        {duration}
                    </p>
                </div>

                <div className="flex flex-row mt-2 gap-2">
                    <Link to={`videos/${id}`} className="shrink-0">
                        <img
                            src={avatar}
                            className="rounded-full h-6 w-6"
                            alt="Learn with Sumit"
                        />
                    </Link>

                    <div className="flex flex-col">
                        <Link to={`videos/${id}`}>
                            <p
                                className="text-slate-900 text-sm font-semibold"
                            >
                                {title}
                            </p>
                        </Link>
                        <Link
                            className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                            to={`videos/${id}`}
                        >
                            {author}
                        </Link>
                        <p className="text-gray-400 text-xs mt-1">
                            {views} views • {date}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

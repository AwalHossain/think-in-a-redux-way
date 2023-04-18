
import LikeUnlike from './LikeUnlike';

interface DescriptionProps {
    video: {
        id: string;
        title: string;
        description: string;
        thumbnail: string;
        author: string;
        avatar: string;
        views: number;
        link: string;
        likes: number;
        unlikes: number;
        tags: string[];
        duration: string;
        date: string;
    }
}

export default function Description({ video }: DescriptionProps) {
    const { title, description, date } = video;
    return (
        <div>
            <h1
                className="text-lg font-semibold tracking-tight text-slate-800"
            >
                {title}
            </h1>
            <div
                className="pb-4 flex items-center space-between border-b"
            >
                <h2
                    className="text-sm leading-[1.7142857] text-slate-600 w-full"
                >
                    Date: {date}
                </h2>

                <LikeUnlike />
            </div>

            <div
                className="mt-4 text-sm text-[#334155] dark:text-slate-400"
            >
                {description}
            </div>
        </div>
    )
}

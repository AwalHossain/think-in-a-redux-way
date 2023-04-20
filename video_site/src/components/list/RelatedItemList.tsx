interface Video {
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
    }
}

export default function RelatedItemList({ video }: Video) {
    const { thumbnail, author, duration, title, views, date } = video
    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div
                className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]"
            >
                <a href="video.html">
                    <img
                        src={thumbnail}
                        className="object-cover"
                        alt="Some video title"
                    />
                </a>
                <p
                    className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
                >
                    {duration}
                </p>
            </div>

            <div className="flex flex-col w-full">
                <a href="#/">
                    <p
                        className="text-slate-900 text-sm font-semibold"
                    >
                        {title}
                    </p>
                </a>
                <a
                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    href="#/"
                >
                    {author}
                </a>
                <p className="text-gray-400 text-xs mt-1">
                    {views}. {date}
                </p>
            </div>
        </div>
    )
}

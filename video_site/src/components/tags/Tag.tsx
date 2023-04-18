import { TagProps } from "./Tags";

interface Tage {
    tag: TagProps
}

export default function Tag({ tag }: Tage) {
    return (
        <div
            className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
        >
            {tag?.title}
        </div>
    )
}


// eslint-disable-next-line no-lone-blocks
{/* <div
    className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
>
    redux
</div> */}
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { tagRemoved, tagsSelected } from "../../features/filter/filterSlice";
import { TagProps } from "./Tags";

interface Tage {
    tag: TagProps
}

export default function Tag({ tag }: Tage) {
    const dispatch = useAppDispatch();

    const { tags: selectedTags } = useAppSelector(state => state.filter)

    const isSelected = selectedTags.includes(tag?.title) ? true : false;

    const style = isSelected ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
        : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";


    const handleSelectTag = () => {
        console.log(tag?.title);
        if (isSelected) {
            dispatch(tagRemoved(tag?.title))
        } else {
            dispatch(tagsSelected(tag?.title))
        }
    }

    return (
        <div
            onClick={handleSelectTag}
            className={style}
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
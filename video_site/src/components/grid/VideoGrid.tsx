import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchVideos } from "../../features/videos/videosSlice";
import VideoGridItem from "./VideoGridItem";

export default function VideoGrid() {
    const state = useAppSelector(state => state.videos);
    console.log(state, "state");

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchVideos());
    }, [dispatch]);

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div
                    className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]"
                >

                    <VideoGridItem />


                    {/* <div className="col-span-12">some error happened</div> */}
                </div>
            </section>
        </section>

    )
}

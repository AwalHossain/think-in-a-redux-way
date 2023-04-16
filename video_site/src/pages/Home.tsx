import VideoGrid from "../components/grid/VideoGrid";
import Pagination from "../components/paginate/Pagination";
import Tags from "../components/tags/Tags";

export default function Home() {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  )
}

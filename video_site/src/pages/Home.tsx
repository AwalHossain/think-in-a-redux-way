import Footer from "../components/footer/Footer";
import VideoGrid from "../components/grid/VideoGrid";
import Navbar from "../components/navbar/Navbar";
import Pagination from "../components/paginate/Pagination";
import Tags from "../components/tags/Tags";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Tags />
      <VideoGrid />
      <Pagination />
      <Footer />
    </div>
  )
}

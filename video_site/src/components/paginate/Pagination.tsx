import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchVideos } from "../../features/videos/videosSlice";
import PaginationControls from "./PaginationControls";

export default function Pagination() {
  const { tags, search } = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState( 5);
    console.log(page, pageSize, "page, pageSize");
    
  useEffect(() => {
    dispatch(fetchVideos({ tags, search, page, pageSize }));
  }, [dispatch, tags, search, page, pageSize]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
  };

  return (
    <section className="pt-10">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        <PaginationControls
          page={page}
          pageSize={pageSize}
          totalItems={7}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      </div>
    </section>
  );
}
type PaginationControlsProps = {
  page: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (newPage: number) => void;
  onPageSizeChange: (newPageSize: number) => void;
};

export default function PaginationControls({
  page,
  pageSize,
  totalItems,
  onPageChange,
  onPageSizeChange,
}: PaginationControlsProps) {


  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPageSize = parseInt(event.target.value);
    onPageSizeChange(newPageSize);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalItems; i++) {
    pageNumbers.push(i);
  }

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {pageNumbers.map((pageNumber) => (
          <div
          onClick={() => handlePageChange(pageNumber)}
            key={pageNumber}
            className={`${
              pageNumber === page
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-600"
            } px-4 py-1 rounded-full`}
          >
            <button>{pageNumber}</button>
          </div>
        ))}
        <div>
          <select
            className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full"
            value={pageSize}
            onChange={handlePageSizeChange}
          >
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="15">15 per page</option>
          </select>
        </div>
      </div>
    </section>
  );
}
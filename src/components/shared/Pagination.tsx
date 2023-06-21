import ReactPaginate from "react-paginate";

export const Pagination = () => {
  return (
    <>
      <ReactPaginate previousLabel={"previous"} pageCount={10} />
    </>
  );
};

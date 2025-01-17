import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import ProductData from "../../ProductData"; // Import the fixed ProductData
import { Link } from "react-router-dom";


function Items({ currentItems }) {
  return (
    <div className="flex flex-wrap">
      {currentItems &&
        currentItems.map((item) => (

<Product
            key={item.id}
            imgSrc={item.imgSrc}
            name={item.name}
            price={item.price}
            color={item.color}
            
          />
        ))}
    </div>
  );
}

function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = ProductData.slice(itemOffset, endOffset); // Use ProductData
  const pageCount = Math.ceil(ProductData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % ProductData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex flex-wrap">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="flex mt-14 gap-x-4"
          pageLinkClassName="bg-black text-white p-4"
        />
        <h3>
          {`Products from ${itemOffset + 1} to ${
            endOffset > ProductData.length ? ProductData.length : endOffset
          } of ${ProductData.length}`}
        </h3>
      </div>
    </>
  );
}

export default Pagination;

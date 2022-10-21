/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Pagination({totalRowCount, currentPage, limitRows}) {
  
  const totalPageCount = Math.ceil(totalRowCount/limitRows)
  const pages = [];
  
  for (let i=1; i<=totalPageCount; i++) {
    pages.push(i);
  }

  return (
  <nav aria-label="...">
    <ul className="pagination">
        <li className="page-item">
            <a className="page-link">Previous</a>
        </li>
        {pages.map((p) => 
            <li className="page-item" key={p}>
                <a className="page-link" onClick={() => {currentPage(p)}}>{p}</a>
            </li>
        )}        
        <li className="page-item">
            <a className="page-link">Next</a>
        </li>
    </ul>
  </nav>
  );
}

export default Pagination;
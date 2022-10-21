/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Pagination({totalPageCount, currentPage, prevPage, nextPage, currentPageNumber}) {
  
  const pages = [];
  
  for (let i=1; i<=totalPageCount; i++) {
    pages.push(i);
  }

  return (
  <nav aria-label="...">
    <ul className="pagination">
        <li className={`page-item ${currentPageNumber === 1 ? 'disabled' : ''}`}>
            <a className="page-link" onClick={prevPage}>Назад</a>
        </li>
        {pages.map((p) => 
            <li className={`page-item ${currentPageNumber === p ? 'active' : ''}`} key={p}>
                <a className="page-link" onClick={() => {currentPage(p)}}>{p}</a>
            </li>
        )}        
        <li className={`page-item ${currentPageNumber === totalPageCount ? 'disabled' : ''}`}>
            <a className="page-link" onClick={nextPage}>Вперёд</a>
        </li>
    </ul>
  </nav>
  );
}

export default Pagination;
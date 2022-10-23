/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PaginationElement from "../PaginationElement/PaginationElement";

function Pagination({ totalPageCount, currentPageNumber, setCurrentPageNumber }) {

  const pages = [];

  for (let i = 1; i <= totalPageCount; i++) {
    pages.push(i);
  } // создаем пустой массив и кладем в него количество элементов равное количеству страниц

  const nextPage = () => {
    if (currentPageNumber !== totalPageCount) {
      setCurrentPageNumber(page => page + 1);
    }
  } // функция для onClick кнопки "Вперед"
  
  const prevPage = () => {
    if (currentPageNumber !== 1) {
      setCurrentPageNumber(page => page - 1);
    }
  } // функция для onClick кнопки "Назад"

  const currentPage = (page) => {
    setCurrentPageNumber(page);
  } 

  return (
    <nav aria-label="paginaton">
      <ul className="pagination">
        <PaginationElement className={`page-item ${currentPageNumber === 1 ? 'disabled' : ''}`} handleClick={prevPage} text={'Назад'}/>
        {pages.map((p) =>
          <PaginationElement className={`page-item ${currentPageNumber === p ? 'active' : ''}`} handleClick={() => currentPage(p)} text={p} key={p}/>
        )}
        <PaginationElement className={`page-item ${currentPageNumber === totalPageCount ? 'disabled' : ''}`} handleClick={nextPage} text={'Вперед'}/>
      </ul>
    </nav>
  );
}

export default Pagination;
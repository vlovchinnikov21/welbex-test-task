import { api } from './utils/api';
import React, { useEffect, useState } from "react";
import FilterForm from "./components/FilterForm";
import Pagination from "./components/Pagination";
import Table from "./components/Table";

function App() {

  const limitRows = 10;

  const [dataBase, setDataBase] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [selectValue, setSelectValue] = useState('');
  const [selectRequireValue, setSelectRequireValue] = useState('');
  const [searchValue, setSearchValue] = useState('');  

  useEffect(() => {
    api
    .getContent()
    .then((res) => {
      setDataBase(res.data);
      setIsLoading(false);
    })
    .catch((err) => console.log(err))
  },[])

  const nextPage = () => {
    if (currentPageNumber !== totalPageCount) {
      setCurrentPageNumber(page => page + 1);
    }
  }
  const prevPage = () => {
    if (currentPageNumber !== 1) {
      setCurrentPageNumber(page => page - 1);
    }
  }
 
  const currentPage = (page) => {
    setCurrentPageNumber(page);
  }

  const handleTextSearch = () => {
    if (!searchValue || !selectValue || !selectRequireValue) {
      return dataBase
    }

    if (selectValue === 'name') {
       if(selectRequireValue === 'equal' && searchValue) {
         return dataBase.filter((el) => el['name'].toLowerCase() === searchValue)
       } 

       if(selectRequireValue === 'contain' && searchValue) {
         return dataBase.filter((el) => el['name'].toLowerCase().includes(searchValue))
       }

       if(selectRequireValue === 'more' && searchValue) {
         return dataBase.filter((el) => el['name'].toLowerCase().length > searchValue.length)
       }

       if(selectRequireValue === 'less' && searchValue) {
         return dataBase.filter((el) => el['name'].toLowerCase().length < searchValue.length)
       }
    }

    if(selectRequireValue === 'equal' && searchValue) {
      return dataBase.filter((el) => el[`${selectValue}`] === Number(searchValue))
    }
    if(selectRequireValue === 'contain' && searchValue) {
      return dataBase.filter((el) => el[`${selectValue}`].toString().includes(searchValue))
    } 
    if(selectRequireValue === 'more' && searchValue) {
      return dataBase.filter((el) => el[`${selectValue}`] > Number(searchValue))
    } 
    if(selectRequireValue === 'less' && searchValue) {
      return dataBase.filter((el) => el[`${selectValue}`] < Number(searchValue))
    }  
  }
  
  const filterData = handleTextSearch();
  
  const totalPageCount = Math.ceil(filterData.length/limitRows)
  const lastBlockRow = currentPageNumber * limitRows;
  const firstBlockRow = lastBlockRow - limitRows;
  const currentData = filterData.slice(firstBlockRow, lastBlockRow)
  


  return (
    <div className="container">
      <FilterForm selectValue={selectValue} setSelectValue={setSelectValue} searchValue={searchValue} setSearchValue={setSearchValue} selectRequireValue={selectRequireValue} setSelectRequireValue={setSelectRequireValue} />
      <Table dataBase={currentData} isLoading={isLoading}/>
      <Pagination currentPage={currentPage} currentPageNumber={currentPageNumber} totalPageCount={totalPageCount} nextPage={nextPage} prevPage={prevPage}/>
    </div>
  );
}

export default App;

import axios from "axios";
import React, {useEffect, useState} from "react";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";
import Table from "./components/Table";

function App() {

  const baseUrl = 'https://filltext.com/?rows=100&date={date|10-10-2020,%2010-10-2022}&name={firstName}&count={number|100}&distance={number|500}';
  const limitRows = 10;

  const [dataBase, setDataBase] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalRowCount, setTotalRowCount] = useState(null);
  const [totalPageCount, setTotalPageCount] = useState(null);
  const [currentPageNumber, setCurrentPageNumber] = useState(null);
  const [currentBlockData, setCurrentBlockData] = useState([]);

 
  const currentPage = (page) => {
    setCurrentPageNumber(page);
  }

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setDataBase(res.data);
      setIsLoading(false);
    })
    .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
      setTotalRowCount(dataBase.length);
      const pagesCount = Math.ceil(totalRowCount/limitRows);
      setTotalPageCount(pagesCount);
      
      currentPage();

  },[setTotalRowCount, dataBase.length, totalRowCount])

  useEffect(() => {
      const lastBlockRow = currentPageNumber * limitRows;
      const firstBlockRow = lastBlockRow - limitRows + 1;
      setCurrentBlockData(dataBase.slice(firstBlockRow, lastBlockRow))
  },[dataBase, currentPageNumber])

  return (
    <div className="container">
      {isLoading 
      ? <Loader /> 
      : <>
          <Table dataBase={currentBlockData} />
          <Pagination totalPageCount={totalPageCount} currentPage={currentPage} />
        </>
      }
    </div>
  );
}

export default App;

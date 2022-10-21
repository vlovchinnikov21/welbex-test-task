import axios from "axios";
import React, {useEffect, useState} from "react";
import Pagination from "./components/Pagination";
import Table from "./components/Table";

function App() {

  const baseUrl = 'https://filltext.com/?rows=100&date={date|10-10-2020,%2010-10-2022}&name={firstName}&count={number|100}&distance={number|500}';
  const limitRows = 10;

  const [dataBase, setDataBase] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [currentBlockData, setCurrentBlockData] = useState([]);
  const totalPageCount = Math.ceil(dataBase.length/limitRows)

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

  useEffect(() => {
    axios
    .get(baseUrl)
    .then((res) => {
      setDataBase(res.data);
      setIsLoading(false);
    })
    .catch((err) => console.log(err))
  },[])

  useEffect(() => {
      const lastBlockRow = currentPageNumber * limitRows;
      const firstBlockRow = lastBlockRow - limitRows + 1;
      setCurrentBlockData(dataBase.slice(firstBlockRow, lastBlockRow))
  },[dataBase, currentPageNumber])

  return (
    <div className="container">
      <Table dataBase={currentBlockData} isLoading={isLoading}/>
      <Pagination currentPage={currentPage} currentPageNumber={currentPageNumber} totalPageCount={totalPageCount} nextPage={nextPage} prevPage={prevPage}/>
    </div>
  );
}

export default App;

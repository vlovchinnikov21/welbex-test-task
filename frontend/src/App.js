import { api } from './utils/api';
import React, { useEffect, useState } from "react";
import FilterFormGroup from "./components/FilterFormGroup/FilterFormGroup";
import Pagination from "./components/Pagination/Pagination";
import Table from "./components/Table/Table";

function App() {

  const limitRows = 10; // Количество строк на одной странице

  const [dataBase, setDataBase] = useState([]); // Стейт данных с сервера
  const [isLoading, setIsLoading] = useState(true); // Стейт спиннера загрузки
  const [currentPageNumber, setCurrentPageNumber] = useState(1); // Стейт выбранной страницы на пагинации
  const [selectValue, setSelectValue] = useState(''); // Стейт значения option у селекта выбора колонки
  const [selectRequireValue, setSelectRequireValue] = useState(''); // Стейт значения option у селекта выбора условия
  const [searchValue, setSearchValue] = useState(''); // Стейт значения инпута для ввода данных

  useEffect(() => {
    api
      .getContent()
      .then((res) => {
        setDataBase(res);
        setIsLoading(false);
      })
      .catch((err) => console.log(err))
  }, []) // получаем данные с сервера

  const handleTextSearch = () => {
    if (!searchValue || !selectValue || !selectRequireValue) {
      return dataBase
    } // если в селектах ничего не выбрано, то отрисовываем все данные

    if (selectValue === 'name') {
      if (selectRequireValue === 'equal' && searchValue) {
        return dataBase.filter((el) => el['name'].toLowerCase() === searchValue)
      }

      if (selectRequireValue === 'contain' && searchValue) {
        return dataBase.filter((el) => el['name'].toLowerCase().includes(searchValue))
      }

      if (selectRequireValue === 'more' && searchValue) {
        return dataBase.filter((el) => el['name'].toLowerCase().length > searchValue.length)
      }

      if (selectRequireValue === 'less' && searchValue) {
        return dataBase.filter((el) => el['name'].toLowerCase().length < searchValue.length)
      }
    } // проверяем данные из инпута если выбрана колонка Название

    if (selectRequireValue === 'equal' && searchValue) {
      return dataBase.filter((el) => el[`${selectValue}`] === Number(searchValue))
    }
    if (selectRequireValue === 'contain' && searchValue) {
      return dataBase.filter((el) => el[`${selectValue}`].toString().includes(searchValue))
    }
    if (selectRequireValue === 'more' && searchValue) {
      return dataBase.filter((el) => el[`${selectValue}`] > Number(searchValue))
    }
    if (selectRequireValue === 'less' && searchValue) {
      return dataBase.filter((el) => el[`${selectValue}`] < Number(searchValue))
    } // проверяем данные из инпута если выбрана колонка Количество или Расстояние
  } // Рендер таблицы и проверка условий при фильтрации

  const filterData = handleTextSearch(); // отрисовываем данные
  // console.log(Math.ceil(filterData.length / limitRows))

  const totalPageCount = Math.ceil(filterData.length / limitRows) // количество страниц в зависимости от количества данных
  const lastBlockRow = currentPageNumber * limitRows; // находим последнюю строку страницы
  const firstBlockRow = lastBlockRow - limitRows; // находим первую строку страницы
  const currentData = filterData.slice(firstBlockRow, lastBlockRow) // находим данные на определенной странице



  return (
    <div className="container">
      <FilterFormGroup 
        selectValue={selectValue} 
        setSelectValue={setSelectValue} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        selectRequireValue={selectRequireValue} 
        setSelectRequireValue={setSelectRequireValue} />
      <Table 
        dataBase={currentData} 
        isLoading={isLoading} />
      <Pagination 
        setCurrentPageNumber={setCurrentPageNumber}
        currentPageNumber={currentPageNumber} 
        totalPageCount={totalPageCount} 
      />
    </div>
  );
}

export default App;

import React from "react";
import SelectForm from "../SelectForm/SelectForm";
import InputForm from "../InputForm/InputForm";

function FilterFormGroup({ selectValue, setSelectValue, searchValue, setSearchValue, selectRequireValue, setSelectRequireValue }) {

  const onChangeInput = (evt) => setSearchValue(evt.target.value); // сетаем значение инпута в стейт

  const onChangeSelectColumns = (evt) => setSelectValue(evt.target.value); // сетаем значение option колонки в стейт для проверки условия при фильтрации

  const onChangeSelectRequire = (evt) => setSelectRequireValue(evt.target.value); // сетаем значение option условия в стейт для проверки условия при фильтрации

  return (
    <form className="row row-cols-lg-auto g-3 align-items-center">
      <SelectForm 
        value={selectValue} 
        onChangeSelect={onChangeSelectColumns} 
        text='Выберите колонку...' 
        label="Колонки"
      >
        <option value="name">Название</option>
        <option value="count">Количество</option>
        <option value="distance">Расстояние</option>
      </SelectForm>

      <SelectForm 
        value={selectRequireValue} 
        onChangeSelect={onChangeSelectRequire} 
        text='Выберите условие...' 
        label="Условия"
      >
        <option value="equal">Равно</option>
        <option value="contain">Содержит</option>
        <option value="more">Больше</option>
        <option value="less">Меньше</option>
      </SelectForm>

      <InputForm
        searchValue={searchValue}
        onChangeInput={onChangeInput}
        label="Поиск"
      />
    </form>
  );
}

export default FilterFormGroup
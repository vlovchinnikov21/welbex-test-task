import React from "react";

function FilterForm( {selectValue, setSelectValue, searchValue, setSearchValue, selectRequireValue, setSelectRequireValue} ) {

  const onChangeInput = (evt) => setSearchValue(evt.target.value);

  
  const onChangeSelectColumns = (evt) => {
    setSelectValue(evt.target.value)
  };

  const onChangeSelectRequire = (evt) => {
    setSelectRequireValue(evt.target.value)
  };
  
//   const handleText = (evt) => {
//     evt.preventDefault();
//     handleTextSearch();
//   };

  return (
    <form className="row row-cols-lg-auto g-3 align-items-center">
        <div className="col-12">
            <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
            <select className="form-select" id="inlineFormSelectPref" value={selectValue} onChange={onChangeSelectColumns}>
                <option value ="" selected>Выберите колонку...</option>
                <option value="name">Название</option>
                <option value="count">Количество</option>
                <option value="distance">Расстояние</option>
            </select>
        </div>

        <div className="col-12">
            <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
            <select className="form-select" id="inlineFormSelectPref" value={selectRequireValue} onChange={onChangeSelectRequire}>
            <option selected>Выберите условие...</option>
            <option value="equal">Равно</option>
            <option value="contain">Содержит</option>
            <option value="more">Больше</option>
            <option value="less">Меньше</option>
            </select>
        </div>

        <div className="col-12">
            <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Search</label>
            <div className="input-group">
                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Введите значение" value={searchValue} onChange={onChangeInput} />
            </div>
        </div>

        {/* <div className="col-12">
            <button type="submit" className="btn btn-primary" onClick={handleText} >Найти</button>
        </div> */}
    </form>
  );
}

export default FilterForm
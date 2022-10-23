import React from "react";

function InputForm({ searchValue, onChangeInput, label }) {

  return (
    <div className="col-12">
      <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">{label}</label>
      <div className="input-group">
        <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Введите значение" value={searchValue} onChange={onChangeInput} />
      </div>
    </div>
  );
}

export default InputForm
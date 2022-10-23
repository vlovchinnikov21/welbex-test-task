import React from "react";

function SelectForm({value, onChangeSelect, text, children, label}) {

  return (
    <div className="col-12">
            <label className="visually-hidden" htmlFor="inlineFormSelectPref">{label}</label>
            <select className="form-select" id="inlineFormSelectPref" value={value} onChange={onChangeSelect}>
                <option value =''>{text}</option>
                {children}
            </select>
        </div>
  );
}

export default SelectForm
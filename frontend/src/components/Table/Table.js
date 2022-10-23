import React from "react";
import Loader from '../Loader/Loader';

function Table({ dataBase, isLoading }) {
  if (isLoading) {
    return <Loader />
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Дата</th>
          <th scope="col">Название</th>
          <th scope="col">Количество</th>
          <th scope="col">Расстояние</th>
        </tr>
      </thead>
      <tbody>
        {dataBase.map((row, i) =>
          <tr key={i}>
            <td>{(row.date).slice(0, 10)}</td>
            <td>{row.name}</td>
            <td>{row.count}</td>
            <td>{row.distance}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table
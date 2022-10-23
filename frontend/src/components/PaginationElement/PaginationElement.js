/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function PaginationElement({handleClick, className, text}) {
  return (
    <li className={className}>
          <a className="page-link pointer" onClick={handleClick}>{text}</a>
    </li>
  );
}

export default PaginationElement;
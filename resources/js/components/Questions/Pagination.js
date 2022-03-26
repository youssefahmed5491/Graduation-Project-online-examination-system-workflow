import React, { useState } from "react";

const Pagination = ({ rowsPerPage, totalRows, paginate }) => {
    const pageNumbers = [];
    // for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
    //     pageNumbers.push(i);
    // }
    const [pageLol, setPageLol] = useState(1);
    if (Math.ceil(totalRows / rowsPerPage) > 4) {
        //if the page number i was on was samller than 5 then ... will be added after the fifth page and only the last page will be visible
        if (pageLol < 5) {
            for (let i = 1; i <= 5; i++) {
                pageNumbers.push(i);
            }
            pageNumbers.push("...");
            pageNumbers.push(Math.ceil(totalRows / rowsPerPage));
        } else {
            //else if the current page number was bigger than the numbers of remaining pages then ... will be added after the first page and only the last 5 pages will be visible
            let limit = Math.ceil(totalRows / rowsPerPage) - 5;
            if (pageLol > limit) {
                pageNumbers.push("1");
                pageNumbers.push("...");
                for (
                    let i = limit + 1;
                    i <= Math.ceil(totalRows / rowsPerPage);
                    i++
                ) {
                    pageNumbers.push(i);
                }
            }
            //...will be added left after the first page and right befor the last page
            else {
                pageNumbers.push("1");
                pageNumbers.push("...");
                for (let i = pageLol - 1; i <= pageLol + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push("...");
                pageNumbers.push(Math.ceil(totalRows / rowsPerPage));
            }
        }
    }
    //else if the total number of pages was less than 4 then all of the pages will be visible (no ...)
    //the code inside this else was sufficient but if large data was added the links lenght would be to long so i decided to add ... to decrease it's length
    else {
        for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
            pageNumbers.push(i);
        }
    }
    return (
        <nav className="float">
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a
                            onClick={(e) => {
                                paginate(number);
                                setPageLol(number);
                                e.preventDefault();
                            }}
                            href=""
                            className="page-link"
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;

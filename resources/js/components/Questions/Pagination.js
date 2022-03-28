import React, { useState } from "react";

const Pagination = ({ rowsPerPage, totalRows, paginate }) => {
    const pageNumbers = [];

    const [pageLol, setPageLol] = useState(1);

    if (Math.ceil(totalRows / rowsPerPage) > 4) {
        if (pageLol < 5) {
            for (let i = 1; i <= 5; i++) {
                pageNumbers.push(i);
            }
            pageNumbers.push("...");
            pageNumbers.push(Math.ceil(totalRows / rowsPerPage));
        } else {
            let limit = Math.ceil(totalRows / rowsPerPage) - 5;
            if (pageLol > limit) {
                if (pageLol != Math.ceil(totalRows / rowsPerPage) - 4) {
                    pageNumbers.push("1");
                    pageNumbers.push("...");
                    for (
                        let i = limit + 1;
                        i <= Math.ceil(totalRows / rowsPerPage);
                        i++
                    ) {
                        pageNumbers.push(i);
                    }
                } else {
                    pageNumbers.push("1");
                    pageNumbers.push("...");
                    for (let i = pageLol - 1; i <= pageLol + 1; i++) {
                        pageNumbers.push(i);
                    }
                    pageNumbers.push("...");
                    pageNumbers.push(Math.ceil(totalRows / rowsPerPage));
                }
            } else {
                pageNumbers.push("1");
                pageNumbers.push("...");
                for (let i = pageLol - 1; i <= pageLol + 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push("...");
                pageNumbers.push(Math.ceil(totalRows / rowsPerPage));
            }
        }
    } else {
        for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
            pageNumbers.push(i);
        }
    }
    return (
        <nav className="float">
            <ul className="pagination">
                {pageNumbers.map((number, index) => (
                    <li key={index} className="page-item">
                        {number != "..." && (
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
                        )}
                        {number === "..." && (
                            <div className="page-link">...</div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;

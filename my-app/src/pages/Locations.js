import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Locations.css";

function PaginatedList() {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        // Fetch the data from the API
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setItems(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // Calculate the index of the last item on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    // Calculate the index of the first item on the current page
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    // Get the items for the current page
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate the total number of pages
    const totalPages = Math.ceil(items.length / itemsPerPage);

    // Change the current page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Filter the items based on the search term
    const filteredItems = currentItems.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h2 className="title">My Paginated List</h2>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
            <ul className="list">
                {filteredItems.map((item) => (
                    <li key={item.id} className="item">
                        <h3 className="item-title">{item.title}</h3>
                        <p className="item-body">{item.body}</p>
                    </li>
                ))}
            </ul>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={items.length}
                paginate={paginate}
                className="pagination"
            />
        </div>
    );
}

function Pagination({ itemsPerPage, totalItems, paginate, className }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={className}>
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a
                            onClick={() => paginate(number)}
                            href="#"
                            className="page-link"
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default PaginatedList;

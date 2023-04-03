import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Locations.css";
//import Navbar from "../components/navbar";
//import Table from "../components/locationTable";

function PaginatedList() {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");

    const options = {
        method: "GET",
        url: "http://localhost:3000/locations",
        params: { offset: "0", limit: "200" },
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDJhZTVmMWYyMGQwOTNkMWM2ZGIxZTUiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODA1MzQwNjR9.lyzVQApXko4OSohyZj6_3PRq_pef_kukcV_9kBKLe1Y",
        },
    };

    useEffect(() => {
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setItems(response.data);
            })
            .catch(function (error) {
                console.error(error);
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
        item.nom_tournage.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container">
            <h2 className="title">LieuxDeTournage.com</h2>
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
                    <li key={item._id} className="location">
                        <h3 className="item-title">{item.annee_tournage} | {item.adresse_lieu}</h3>
                        <div>
                            <table className="details-table">
                                <tbody>
                                <tr>
                                    <td>ID Lieu:</td>
                                    <td>{item.id_lieu}</td>
                                </tr>
                                <tr>
                                    <td>Adresse:</td>
                                    <td>{item.adresse_lieu}</td>
                                </tr>
                                <tr>
                                    <td>Année de tournage:</td>
                                    <td>{item.annee_tournage}</td>
                                </tr>
                                <tr>
                                    <td>Arrondissement:</td>
                                    <td>{item.ardt_lieu}</td>
                                </tr>
                                <tr>
                                    <td>Coordonnées:</td>
                                    <td>({item.coord_x}, {item.coord_y})</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
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

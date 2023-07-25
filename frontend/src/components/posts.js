import React, { useState, useEffect } from "react";
import axios from "axios";
import "./posts.css"
const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [data, setDatas] = useState([]);

  const fetchProducts = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/check?size=10&page=${page}`
      );
      const { data, totalPages } = response.data;
      setDatas(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>City</th>
            <th>URL</th>
          </tr>
        </thead>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.team_name}</td>
            <td>{item.full_name}</td>
            <td>{item.email}</td>
            <td>{item.number}</td>
            <td>{item.city}</td>
            <td>{item.url}</td>
          </tr>
        ))}
      </table>
      {/* Pagination controls */}
      <button className="button_black" onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      
      <button className="button_black" onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next Page
      </button>
    </div>
  );
};

export default PaginationComponent;

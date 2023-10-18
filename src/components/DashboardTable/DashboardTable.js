import React from "react";
import { Table, Pagination } from "react-bootstrap";
import dummyData from "./userData.json";
import './DashboardTable.css';

const sampleData = dummyData;

const DashboardTable = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const recordsPerPage = 10;
  const totalPages = Math.ceil(sampleData.length / recordsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const currentData = sampleData.slice(startIndex, endIndex);

  return (
    <div className="d-flex flex-column mt-4 cardCus">
      <h3>Customer Data Overview</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination className="justify-content-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default DashboardTable;

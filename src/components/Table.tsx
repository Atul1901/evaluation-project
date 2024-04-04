import React, { useState } from "react";
import { Pagination } from "@mui/material";
import EditRoleModal from "./EditRoleModal";
import DeleteModal from "./DeleteModal";
import { useSelector } from "react-redux";

function Table() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const data = useSelector((state: any) => {
    return state.roles;
  });
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <table className="table">
        <thead className="table-heading-row">
          <tr>
            <th className="table-heading-row">Role Name</th>
            <th className="table-heading-row">Organization Name</th>
            <th className="table-heading-row">Created Date</th>
            <th className="table-heading-row">Role State</th>
            <th className="table-heading-row">Role ID</th>
            <th className="table-heading-row">Actions</th>
          </tr>
        </thead>
        <tbody className="table-data">
          {currentItems &&
            currentItems.map((item: any, key: any) => {
              return (
                <tr key={key}>
                  <td>{item?.user_name}</td>
                  <td>{item?.organization_name}</td>
                  <td>{item?.created_date}</td>
                  <td>{item?.role_state}</td>
                  <td>{item?.role_id} </td>
                  <td className="edit-del-logo">
                    <EditRoleModal item={item} />
                    <DeleteModal uniqID={item.uniq_id} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Pagination
        count={Math.ceil(data.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        color="primary"
        className="pagination"
      />
    </div>
  );
}

export default Table;

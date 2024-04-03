import React from "react";
import AddRoleModal from "./AddRoleModal";
import FilterRoleModal from "./FilterRoleModal";

function TableHeading() {
  return (
    <div>
      <div className="table-heading-data">
        <div className="heading-section">
          <div className="page-heading">
            <p>Roles</p>
          </div>
          <div className="heading-buttons">
            <AddRoleModal />
            <FilterRoleModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableHeading;

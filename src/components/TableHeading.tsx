import React from "react";
import filterLogo from "../utils/assets/logos/Vector (1).png";
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
            {/* <button className="add-button">add</button> */}
            {/* <button className="filter-button">
              <img
                src={filterLogo}
                alt="logo for the filter button"
                className="filter-logo"
              
              filter
            </button> */}
            <FilterRoleModal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableHeading;

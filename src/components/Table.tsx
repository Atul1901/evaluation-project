import React from "react";
import edit from "../utils/assets/logos/Edit.png";
import deleteLogo from "../utils/assets/logos/Vector.png";
import filterLogo from "../utils/assets/logos/Vector (1).png";
import EditRoleModal from "./EditRoleModal";
import DeleteModal from "./DeleteModal";

import { getUsersData } from "../utils/DummyData";

function Table() {
  return (
    <div>
      <table className="table">
        <thead className="table-heading-row">
          <tr>
            <th>Role Name</th>
            <th>Organization Name</th>
            <th>Created Date</th>
            <th>Role State</th>
            <th>Role ID</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody className="table-data">
          {getUsersData &&
            getUsersData?.data?.map((item, key) => {
              return (
                <>
                  <tr key={key}>
                    <td>{item?.user_name}</td>
                    <td>{item?.organization_name}</td>
                    <td>{item?.created_date}</td>
                    <td>{item?.role_state}</td>
                    <td>{item?.role_id} </td>
                    <td className="edit-del-logo">
                      <EditRoleModal />
                      <DeleteModal />
                    </td>
                  </tr>
                </>
              );
            })}

          {/* <tr>
            <td>SUPER_ADMIN</td>
            <td>NBM TECH</td>
            <td>28/02/2022</td>
            <td>Active</td>
            <td>FTS676 </td>
            <td className="edit-del-logo">
              <EditRoleModal />
              <DeleteModal />
            </td>
          </tr>
          <tr>
            <td>SUPER_ADMIN</td>
            <td>NBM TECH</td>
            <td>28/02/2022</td>
            <td>Active</td>
            <td>FTS676 </td>
            <td className="edit-del-logo">
              <EditRoleModal />
              <DeleteModal />
            </td>
          </tr>
          <tr>
            <td>SUPER_ADMIN</td>
            <td>NBM TECH</td>
            <td>28/02/2022</td>
            <td>Active</td>
            <td>FTS676 </td>
            <td className="edit-del-logo">
              <EditRoleModal />
              <DeleteModal />
            </td>
          </tr>
          <tr>
            <td>SUPER_ADMIN</td>
            <td>NBM TECH</td>
            <td>28/02/2022</td>
            <td>Active</td>
            <td>FTS676 </td>
            <td className="edit-del-logo">
              <EditRoleModal />
              {/* <img src={deleteLogo} alt="delete logo" /> */}
          {/* <DeleteModal /> */}
          {/* </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

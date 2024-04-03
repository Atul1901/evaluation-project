import React from "react";
import { useEffect } from "react";
import EditRoleModal from "./EditRoleModal";
import DeleteModal from "./DeleteModal";
import { useSelector } from "react-redux";

function Table() {
  const data = useSelector((state: any) => {
    return state.roles;
  });

  useEffect(() => {
    console.log("redux-data:", data);
  }, [data]);
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
          {data &&
            data?.map((item: any, key: any) => {
              return (
                <>
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
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

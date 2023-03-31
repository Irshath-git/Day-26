import React from "react";
import { Link } from "react-router-dom";
import UserAction from "./UserAction";

function Userlist({ data, setData }) {
  const DeleteUser = (id) => {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      setData(data.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
          <h6 className="m-0 font-weight-bold text-primary">Users Data</h6>
          <Link
            to="/portal/usercreate"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            Create User
          </Link>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>I'm</th>
                  <th>position</th>
                  <th>country</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((dt, index) => (
                  <UserAction keys={index} data={dt} DeleteUser={DeleteUser} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userlist;

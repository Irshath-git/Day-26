import React from "react";
import { Link } from "react-router-dom";

function UserAction({ data, DeleteUser }) {
  return (
    <>
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.im}</td>
        <td>{data.position}</td>
        <td>{data.country}</td>
        <td>
          <Link
            className="btn btn-info btn-sm mx-1"
            to={`/portal/userview/${data.id}`}
          >
            view
          </Link>
          <Link
            className="btn btn-primary btn-sm mx-1"
            to={`/portal/useredit/${data.id}`}
          >
            Edit
          </Link>
          <button
            className="btn btn-danger btn-sm mx-1"
            onClick={() => DeleteUser(data.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default UserAction;

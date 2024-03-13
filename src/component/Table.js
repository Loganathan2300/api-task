import React from "react";
import Swal from 'sweetalert2';
import { Icon } from "@iconify/react";
import { CONSTANT } from "../constant";
import '../utils/Table.css'
const Table = ({ user, onclickEdit, onClickDelete, spinner,putValue,show,onclick}) => {
  const showDeleteConfirmation = (itemId) => {
    Swal.fire({
      title: 'Are you sure you want to delete this ID?',
      text: `${itemId}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        onClickDelete(itemId);
      }
    });
  };
  return (
    <div className="col-lg-12 col-sm-12 col-md-12 ">
      <div className="table-responsive m-2 mb-0">
        {spinner ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <table
              className="table table-bordered table-hover text-center table-responsive drapdown"
            >
              <thead className="table-light sticky-top ">
                <tr>
                  {show?CONSTANT.DASHBOARD_HEADER_COLUMN.map((item,i) => (
                    <th key={i}>
                    {item}
                    </th>
                  )):CONSTANT.USER_DETAILS_HEADER_COLUMN.map((item,i)=>(
                    <th key={i}>
                    {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
              {/* {user.length&&user.map((item,i) => ( */}
                {user.map((item,i) => (
                  <tr key={i}  >
                  {show&&<td>
                      <button
                        className="border-0 bg-transparent fs-6 text-success"
                        onClick={() => onclickEdit(item)}
                      >
                        <Icon icon="clarity:edit-line" />
                      </button>
                    </td>}
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td onClick={() => onclick(item)}>
                      {show?<select class="form-select drapdown" value={item.status} onChange={(e)=>putValue(e.target.value)}>
                        <option value="active">Active</option>
                        <option value="inactive">InActive</option>
                      </select>:item.status}
                    </td>
                    {show&&<td>
                      <button
                        className="border-0 bg-transparent fs-6 text-danger"
                        onClick={() => showDeleteConfirmation(item.id)}
                      >
                        <Icon icon="mdi-light:delete" />
                      </button>
                    </td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;

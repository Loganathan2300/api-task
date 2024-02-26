import React from "react";
import { Icon } from "@iconify/react";
import { CONSTANT } from "../constant";
const Table = ({ user, onclickEdit, onClickDelete, spinner }) => {
  return (
    <div className="col-lg-12 col-sm-12 col-md-12 ">
      <div className="table-responsive m-2 mb-0">
        {spinner ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div
            style={{
              maxHeight: "300px",
              overflowY: "auto",
              fontSize: "13px",
            }}
          >
            <table
              className="table table-bordered table-hover text-center table-responsive "
              style={{ fontSize: "12px" }}
            >
              <thead className="table-primary sticky-top ">
                <tr>
                  {CONSTANT.headerColum.map((item, i) => (
                    <th key={i}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {user.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <button
                        className="border-0 bg-transparent fs-6 text-success"
                        onClick={() => onclickEdit(item)}
                      >
                        <Icon icon="clarity:edit-line" />
                      </button>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.gender}</td>
                    <td>
                      <select class="form-select"  style={{ fontSize: "12px" }}>
                        <option value="1">Active</option>
                        <option value="2">InActive</option>
                      </select>
                    </td>
                    <td>
                      <button
                        className="border-0 bg-transparent fs-6 text-danger"
                        onClick={() => onClickDelete(item.id)}
                      >
                        <Icon icon="mdi-light:delete" />
                      </button>
                    </td>
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

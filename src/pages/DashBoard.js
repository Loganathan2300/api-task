import React, { useEffect, useState } from "react";
import Table from "../component/Table";
import axios from "axios";
// import InputField from "../component/InputField";
import Model from "../component/Modal";
import Forms from "../component/Forms";
import { CONSTANT } from "../constant";
import InputField from "../component/InputField";
import Button from "../component/Button";

const DashBoard = () => {
  const [user, setUser] = useState([]);
  const [inputValues, setInputValue] = useState(CONSTANT.INIT_INPUT_VALUE);
  const [show, setShow] = useState({add:false,edit:false});
  const [searchTeams,setSearchTeams]=useState()
 
  const handelClose = () => setShow(false);
  const handelshow = () => setShow(true);

  const addUserDetails = (e) => {
    setInputValue({ ...inputValues, [e.target.name]: e.target.value });
  };

  const editUserDetails = () => {};

  const getValue = () => {
    axios
      .get("https://gorest.co.in/public/v2/users", {
        headers: {
          Authorization:
            "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c",
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    getValue();
  }, []);

  const postValue = () => {
    axios
      .post("https://gorest.co.in/public/v2/users", inputValues, {
        headers: {
          Authorization:
            "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c",
        },
      })
      .then((response) => {
        handelClose();
        setInputValue(CONSTANT.INIT_INPUT_VALUE);
        getValue();
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  return (
    <div>
        <div className="row">
            <div className="col-6 ">
                <InputField type={CONSTANT.INIT_INPUT_VALUE.type} onChange={searchTeams} value={(e)=>setSearchTeams(e.target.value)} />
                </div>
                <div className="col-6 text-end">
                <Button addUserName='Add User' OnclickAddUser={addUserDetails} className='px-4 py-2 my-4 text-end rounded-2 border-0 text-bg-primary'/>
            </div>
      </div>
      <Table
        user={user}
        setShow={setShow}
        show={show}
        onclickEdit={editUserDetails}
      />
      <Model
        show={show}
        onClick={handelClose}
        onHide={handelClose}
        onclick1={postValue}
        title="Add user"
        button1="Clear"
        button2="Submit"
        body={
          <>
            <Forms
              type="text"
              onChange={addUserDetails}
              value={inputValues}
              name="name"
            />
          </>
        }
      />
      {/* <Model
        show={show}
        onClick={handelClose}
        onHide={handelClose}
        onclick1={postValue}
        title="Add user"
        button1="Clear"
        button2="Submit"
        body={<>
        <Forms type='text' onChange={addUserDetails} value={inputValues} name="name"/>
        </>}
      /> */}
    </div>
  );
};
export default DashBoard;

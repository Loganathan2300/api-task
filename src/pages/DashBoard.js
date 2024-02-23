import React, { useEffect, useState } from "react";
import Table from "../component/Table";
import axios from "axios";
// import InputField from "../component/InputField";
import Model from "../component/Modal";
import Forms from "../component/Forms";
import { CONSTANT } from "../constant";
import InputField from "../component/InputField";
import Button from "../component/Button";

const DashBoard = ({spinner,setSpinner}) => {
  const [user, setUser] = useState([]);
  const [inputValues, setInputValue] = useState(CONSTANT.INIT_INPUT_VALUE);
  const [editValue,setEditValue]=useState("")
  const [show, setShow] = useState(false);
  const[editShow,setEditShow]=useState(false)
  const [id,setId]=useState()

  const handelClose = () =>{ setShow(false); setInputValue(CONSTANT.INIT_INPUT_VALUE);};
  const handelshow = () => setShow(true);

  const edithandelClose =()=> setEditShow(false)
  const editHandleShow = (val) => {
    setEditShow(true);
    setEditValue({
      name: val.name,
      email: val.email,
      gender: val.gender,
      status: val.status,
    });
    setId(val.id);
  };

  const addUserDetails = (e) => {
    console.log(e,"dsdfgfdg");
    setInputValue({ ...inputValues, [e.target.name]: e.target.value }); 
  };

  const editUserDetails = (e) => {
    setEditValue({...editValue,[e.target.name]:e.target.value})
  };

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
        setSpinner(false);
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
  const putValue=()=>{
    axios.put(`https://gorest.co.in/public/v2/users/${id}`, editValue, {
        headers: {
          Authorization:
            "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c",
        },
      })
      .then((res)=>{
        setEditShow(false);
        getValue();
      })
  }
  const deleteValue = (id) => {
    axios
      .delete(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
          Authorization:
            "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c",
        },
      })
      .then(() => {
        getValue();
        alert("successful deleted ....");
      });
  };
  return (
    <div>
        <div className="row">
            <div className="col-6 ">
                {/* <InputField type={CONSTANT.INIT_INPUT_VALUE.type} onChange={searchTeams} value={} /> */}
                </div>
                <div className="col-6 text-end">
                <Button addUserName='Add User' onClick={handelshow} className='px-4 py-2 my-4 rounded-2 border-0 text-bg-primary'/>
            </div>
      </div>
      <Table
        user={user}
        onclickEdit={editHandleShow}
        onClickDelete={deleteValue}
        spinner={spinner}
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
      <Model
        show={editShow}
        onClick={edithandelClose}
        onHide={edithandelClose}
        onclick1={putValue}
        title="Edit user"
        button1="Clear"
        button2="Submit"
        body={<>
        <Forms type='text' onChange={editUserDetails} value={editValue} name="name"/>
        </>}
      />
    </div>
  );
};
export default DashBoard;
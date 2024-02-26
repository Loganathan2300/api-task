import React, { useEffect, useState } from "react";
import Table from "../component/Table";
import axios from "axios";
// import InputField from "../component/InputField";
import Model from "../component/Modal";
import Forms from "../component/Forms";
import { CONSTANT } from "../constant";
import InputField from "../component/InputField";
import Button from "../component/Button";
import Pagenation from "../component/Pagenation";

const itemPage =5
const DashBoard = ({spinner,setSpinner}) => {
  const [user, setUser] = useState([]);
  const [inputValues, setInputValue] = useState(CONSTANT.INIT_INPUT_VALUE);
  const [editValue,setEditValue]=useState("")
  const [show, setShow] = useState(false);
  const[editShow,setEditShow]=useState(false)
  const [id,setId]=useState()
  const [search,setSearch]=useState("")
  const [pageChange,setPageChange]=useState(1)

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
  //  Filter data based on search...
  const filterData = user.filter((item) =>
  Object.values(item).some((value) =>
    String(value).toLowerCase().includes(search.toLowerCase())
  )
);
 //for pagechange code start
 const pageLength = filterData.length;
 const totalPages = Math.ceil(pageLength / itemPage);
 const dataShowDetail = filterData.slice((pageChange - 1) * itemPage, pageChange * itemPage);
//  const startingNumnber = (pageChange - 1) * itemPage + 1;

 let pages = [];
 for (let i = 1; i <= totalPages; i++) {
   pages.push(i);
 }

  const addUserDetails = (e) => {
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
  });
  
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
    <div className="container-fulid card my-5 ">
        <div className=" row">
            <div className="col-6 ">
                <InputField type={CONSTANT.INIT_INPUT_VALUE.type} placeholder="Search..." onChange={(e)=>setSearch(e.target.value)} value={search} className='px-2 py-1 mx-2 p-0 w-50'/>
                </div>
                <div className="col-6">
                <Button addUserName='Add User' onClick={handelshow} />
            </div>
      </div>
      <Table
        user={dataShowDetail}
        onclickEdit={editHandleShow}
        onClickDelete={deleteValue}
        spinner={spinner}
      />
      <Pagenation pages={pages} setPageChange={setPageChange} />
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
import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../component/Table";
import Model from "../component/Modal";
import Forms from "../component/Forms";
import { CONSTANT } from "../constant";
import InputField from "../component/InputField";
import Button from "../component/Button";
import Pagenation from "../component/Pagenation";
import instance from "../global/Interceptor";

// require('dotenv').config()
const itemPage =5
const DashBoard = ({spinner,setSpinner}) => {

  // console.log(process.env.BASE_URL ,"text bbnnnj")
  const [user, setUser] = useState([]);
  const [editValue,setEditValue]=useState("")
  const [show, setShow] = useState(false);
  const[editShow,setEditShow]=useState(false)
  const [id,setId]=useState()
  const [search,setSearch]=useState("")
  const [pageChange,setPageChange]=useState(1)
  const handelClose = () =>{ setShow(false)};
  const handelshow = () => setShow(true);
  const edithandelClose =()=> setEditShow(false);
  const editHandleShow = (val) => {
    setEditShow(true);
    setEditValue(val); 
    setId(val.id);
  };
  const dropDown =(val)=>{
    setId(val.id);
  }
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
  const editUserDetails = (e) => {
    setEditValue({...editValue,[e.target.name]:e.target.value})
  };
  const getValue = () => {
    instance.get("/v2/users")
      .then((res) => {
        console.log(res,"res")
        setUser(res.data);
        setSpinner(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };
  useEffect(() => {
    getValue();
  },[]);
  const postValue = (values) => {
    instance.post("/v2/users",values)
      .then((response) => {
          handelClose();
          getValue();
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };
  const putValue=(val)=>{
    instance.put(`/v2/users/${id}`,val) 
      .then((res)=>{
        setEditShow(false);
        getValue();
      }).catch((err)=>console.log(err))
  }
  const deleteValue = (id) => {
    instance
      .delete(`/v2/users/${id}`)
      .then(() => {
        getValue();
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
        putValue={putValue}
        show={true}
        id={id}
        onclick={dropDown}
        onclickEdit={editHandleShow}
        onClickDelete={deleteValue}
        spinner={spinner}
      />
      <Pagenation pages={pages} setPageChange={setPageChange} />
      <Model
        show={show}
        onHide={handelClose}
        title="Add user"
        body={<>
        <Forms type="text" name="name" onclick={handelClose} onclick1={postValue}/>
        </>
        }
      />
      <Model
        show={editShow}
        id={id}
        onHide={edithandelClose}
        title="Edit user"
        button1="Cancel"
        button2="Submit"
        body={<>
        <Forms type='text' value={editValue} name="name" onclick={edithandelClose} onclick1={putValue} />
        </>}
      />
    </div>
  );
};
export default DashBoard;
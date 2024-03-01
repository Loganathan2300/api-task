import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "../component/Table";

const Name = () => {
  const params = useParams();
  const [userDetails, setUserDetails] = useState([]);
  const getValue = () => {
    axios
      .get(`https://gorest.co.in/public/v2/users/${params.id}`, {
        headers: {
          Authorization:
            "Bearer 8b0977e6f9372784a4e885e802cd121e86ad7db2a37f2c4d6831dd5dd5e2d36c",
        },
      })
      .then((res) => {
        setUserDetails(res.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };
  useEffect(() => {
    getValue();
  }, [params]);
  return (
    <div className="py-5 my-5">
      <div className="mx-2 fs-2">User Name</div>
      <Table user={[userDetails]} show={false} />
    </div>
  );
};

export default Name;




import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getalldata } from "./api";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { add1 } from "./store/property1Slice";

function MyVerticallyCenteredModal() {
  const [show, setShow] = useState(false);

  const [data, setdata] = useState([]);

  const [users, setUsers] = useState([]);

  const [filteredList, setFilteredList] = useState(data);
 
  const [type,settype]=useState('');

  const [type2,settype2]=useState('');

  
 
  

  useEffect(() => {
    getdata();
  }, []);
  

const filterd_users = filteredList.filter( user => user.label === data.label);
  
const var1=filterd_users.filter(user => user.Type===type);
    


console.log(filterd_users,filteredList)

console.log(type)
console.log(type2)

const handleClickOpen = (value) => {
 settype(value);
};
const handleClickOpen2 = (value) => {
 settype2(value);
};
  const dispatch = useDispatch();

  const filterCategory = (categoryItem) => {
    const result = data.filter((data) => {
      return data.Location === categoryItem;
    });
    setFilteredList(result);
  };
  
  const filterCategory2 = (categoryItem) => {
    const result2 = data.filter((data) => {
      return data. === categoryItem;
    });
    console.log(result2)
  };
  const getdata = async () => {
    let response = await getalldata();
    setdata(response.data);
  };

  const getAllUsers = (selectedOptions) => {
    let response = selectedOptions;
    setUsers(response);

  };

  useEffect(() => {
    getdata();
  }, []);

  
  useEffect(() => {
    dispatch(add1(users));
  }, [users]);
  return (
    <>
      
      <button
         onClick={() => setShow(true)}
        style={{ border: "none", background: "none" }}
      >
        <div style={{ display: "block", border: "none" }}>
          <img
            src="https://i.imgur.com/lRwI4Pz.png"
            style={{ width: "30px" }}
          />
          <div>Add Property</div>
        </div>
      </button>


      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Select Filters
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginTop: "2vh",display:"flex" }}>
          <div style={{ margin: "2%",width:"50%",borderRight:"1px solid black",padding:"20px"}}>
      
          <div style={{ boxShadow: "0 1px 6px 1px #ccc", marginTop: "2vh" }}>
          <h6 style={{textAlign:"center"}}>Choose Location</h6>
          <button
            class="button-8"
            role="button"
            onClick={() => filterCategory("Central Noida")}
          >
            Central Noida
          </button>
          <button
            class="button-8"
            role="button"
            onClick={() => filterCategory("Noida Extension")}
          >
            Noida Extension
          </button>
          <button
            class="button-8"
            role="button"
            onClick={() => filterCategory("Noida Expressway")}
          >
            Noida Expressway
          </button>
        </div>
       
        <div style={{margin:"5px",boxShadow: "0 1px 6px 1px #ccc",marginTop: "10%",padding:"5px"}}>
        <h6 style={{textAlign:"center"}}>Choose Property Status</h6>
        <p style={{alignItems:"center",textAlign:"center"}}>
        <button className="button-8" onClick={()=>{handleClickOpen2('Ready To Move'); }}>Ready To Move</button>
        <button className="button-8" onClick={()=>{handleClickOpen2('Under Construction');}}>Under Construction</button>
        </p>
        </div>
       
        <div style={{textAlign:"center",boxShadow: "0 1px 6px 1px #ccc",marginTop: "10%",padding:"5px"}}>
        <h6 style={{textAlign:"center"}}>Choose Property Type</h6>
        <p>
        <button class="button-8" onClick={()=>{handleClickOpen('2BHK')}}> 2 BHK</button>
        <button class="button-8" onClick={()=>handleClickOpen('3BHK')} >3 BHK</button>
        <button class="button-8" onClick={()=>handleClickOpen('4BHK')} >4 BHK</button>
        </p>
        </div>
        </div>
        <div style={{ marginTop: "2vh",width:"40%",marginLeft:"5%" }}>
          <Select
            onChange={getAllUsers}
            options={filteredList}
            labelledBy="Select Property"
            placeholder="Select Property"
          />
        </div>
          </div>
       
        </Modal.Body>
      </Modal>
    </>
  );
}

export default function Dialog() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

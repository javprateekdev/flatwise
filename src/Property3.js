import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getalldata, getalldata2 } from "./api";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { add3 } from "./store/property3Slice";


function MyVerticallyCenteredModal() {

  const [show, setShow] = useState(false);

  const [data, setdata] = useState([]);

  const [data2, setdata2] = useState([]);


  const [filteredList2, setFilteredList2] = useState(data);

  const [filteredList3, setFilteredList3] = useState(data);

  //console.log(data2);

  const [users, setUsers] = useState([]);

  const handleclear = () => {
    settype("");
    settype2("");
    setSelectedButton(null);
    setSelectedButton2(null);
     setSelectedButton3(null);
     setFilteredList3([])

    };

  console.log(users);

  const [filteredList, setFilteredList] = useState(data);

  const [type, settype] = useState("");

  const [type2, settype2] = useState("");

  const [selectedButton, setSelectedButton] = useState(null);

  const [selectedButton2, setSelectedButton2] = useState(null);

  const [selectedButton3, setSelectedButton3] = useState(null);



  const handleClick = (buttonId) => {
    setSelectedButton(buttonId);
  };
  const handleClick2 = (buttonId) => {
    setSelectedButton2(buttonId);
  };
  const handleClick3 = (buttonId) => {
    setSelectedButton3(buttonId);
  };
  const getButtonStyle = (buttonId) => {
    if (buttonId === selectedButton) {
      return { backgroundColor: "#4deeea" };
    }
    return {};
  };

  const getButtonStyle2 = (buttonId) => {
    if (buttonId === selectedButton2) {
      return { backgroundColor: "#4deeea" };
    }
    return {};
  };
  const getButtonStyle3 = (buttonId) => {
    if (buttonId === selectedButton3) {
      return { backgroundColor: "#4deeea" };
    }
    return {};
  };
  useEffect(() => {
    getdata();
  }, []);
  
  const ClickOpen = () => {
    setUsers([]);
    };
   


  const filterd_users = data2.filter((user) => user.title === users.label);

  const filterd_users2 = filterd_users.filter((user) => user.Type === type);

  const filterd_users3 = filterd_users2.filter((user) => user.status === type2);

//console.log(filterd_users2,filterd_users,filterd_users3);

 // console.log(type);
  //console.log(type2);

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
    const result = filteredList.filter((data) => {
      return data.Status === categoryItem;
    });
    setFilteredList2(result);
  };
  const filterCategory3 = (categoryItem) => {
    const result = filteredList2.filter((data) => {
      return data.Type === categoryItem;
    });
    setFilteredList3(result);
  };
  const getdata = async () => {
    let response = await getalldata();
    setdata(response.data);
  };

  const getdata2 = async () => {
    let response = await getalldata2();
    setdata2(response.data);
  };

  const getAllUsers = (selectedOptions) => {
    let response = selectedOptions;
    setUsers(response);
  };

  useEffect(() => {
    getdata();
    getdata2();
  }, []);

  
  const singleObject = { ...filterd_users3[0] };

console.log(singleObject);

useEffect(() => {

  dispatch(add3(singleObject));

}, [singleObject]);
  

  return (
    <>
      {users.label ?
    <>
    <div style={{display:"flex"}}>
    <div style={{width:"90%"}}><img src={users.Logo} style={{width:"15%",zIndex:"0",position:"relative"}}/></div>
    <div style={{width:"10%"}}><img src="https://i.imgur.com/EOKKOUr.png" style={{width:"40%",position:"relative",bottom:"20px"}}  onClick={() => ClickOpen()}/></div>
    </div>
    </> 
   
      
    
    :<> <button  onClick={() => setShow(true)}
    style={{ border: "none", background: "none" }}>
      
      <div>
    <img src="https://i.imgur.com/lRwI4Pz.png" style={{width:"30px"}}/>
    <p>Add Property</p>
    </div>
     </button></>}
    

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
          <div style={{ marginTop: "2vh", display: "flex" }}>
            <div
              style={{
                margin: "2%",
                width: "50%",
                borderRight: "1px solid #dee2e6",
                padding: "20px",
              }}
            >
              <div
                style={{ boxShadow: "0 1px 6px 1px #ccc", marginTop: "2vh" }}
              >
                <h6 style={{ textAlign: "center" }}>Choose Location</h6>
                <button
                  class="button-8"
                  role="button"
                  onClick={() => {
                    filterCategory("Central Noida");
                    handleClick(1);
                    
                  }}
                  style={getButtonStyle(1)}
                >
                  Central Noida
                </button>
                <button
                  class="button-8"
                  role="button"
                  onClick={() => {
                    filterCategory("Noida Extension");
                    handleClick(2);
                  }}
                  style={getButtonStyle(2)}
                >
                  Noida Extension
                </button>
                <button
                  class="button-8"
                  role="button"
                  onClick={() => {
                    filterCategory("Noida Expressway");
                    handleClick(3);
                  }}
                  style={getButtonStyle(3)}
                >
                  Noida Expressway
                </button>
              </div>

              <div
                style={{
                  margin: "5px",
                  boxShadow: "0 1px 6px 1px #ccc",
                  marginTop: "10%",
                  padding: "5px",
                }}
              >
                <h6 style={{ textAlign: "center" }}>Choose Property Status</h6>
                <p style={{ alignItems: "center", textAlign: "center" }}>
                  <button
                    className="button-8"
                    style={getButtonStyle2(1)}
                    onClick={() => {
                      handleClickOpen2("Ready To Move");
                      handleClick2(1);
                      filterCategory2("Ready To Move")
                    }}
                  >
                    Ready To Move
                  </button>
                  <button
                    className="button-8"
                    style={getButtonStyle2(2)}
                    onClick={() => {
                      handleClickOpen2("Under Construction");
                      handleClick2(2);
                      filterCategory2("Under Construction")
                    }}
                  >
                    Under Construction
                  </button>
                </p>
              </div>

              <div
                style={{
                  textAlign: "center",
                  boxShadow: "0 1px 6px 1px #ccc",
                  marginTop: "10%",
                  padding: "5px",
                }}
              >
                <h6 style={{ textAlign: "center" }}>Choose Property Type</h6>
                <p>
                  <button
                    class="button-8"
                    style={getButtonStyle3(1)}
                    onClick={() => {
                      handleClickOpen("2BHK");
                      handleClick3(1);
                      filterCategory3("2BHK");
                    }}
                  >
                    {" "}
                    2 BHK
                  </button>
                  <button
                    class="button-8"
                    style={getButtonStyle3(2)}
                    onClick={() => {
                      handleClickOpen("3BHK");
                      handleClick3(2);
                      filterCategory3("3BHK");
                    }}
                  >
                    3 BHK
                  </button>
                  <button
                    class="button-8"
                    style={getButtonStyle3(3)}
                    onClick={() => {
                      handleClickOpen("4BHK");
                      handleClick3(3);
                      filterCategory3("4BHK");
                    }}
                  >
                    4 BHK
                  </button>
                </p>
              </div>
            </div>
            <div style={{ marginTop: "2vh", width: "40%", marginLeft: "5%" }}>
             {filteredList3.length>0?
                <Select
                onChange={getAllUsers}
                options={filteredList3}
                labelledBy="Select Property"
                placeholder="Select Property"
                menuIsOpen={true}
                
              />
              :<></>
              }
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <button onClick={() =>handleclear()} style={{marginRight:"80%"}}>Clear Filter</button>
        <Button onClick={() => setShow(false)}>Save</Button>
      </Modal.Footer>
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

import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getalldata } from "./api";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { add2 } from "./store/property2Slice";

function MyVerticallyCenteredModal(props) {
  const [data, setdata] = useState([]);

  const [users, setUsers] = useState([]);
  const [filteredList, setFilteredList] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(add2(users));
  }, [users]);

  const getAllUsers = (selectedOptions) => {
    let response = selectedOptions;
    setUsers(response);
    //console.log(response)
  };

  useEffect(() => {
    getdata();
  }, []);
  const filterCategory = (categoryItem) => {
    const result = data.filter((data) => {
      return data.Location === categoryItem;
    });
    setFilteredList(result);
  };

  const getdata = async () => {
    let response = await getalldata();
    setdata(response.data);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Filters
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Select The Location
        <div style={{ boxShadow: "0 1px 6px 1px #ccc", marginTop: "2vh" }}>
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
        <div style={{ marginTop: "10%" }}>
          <Select
            onChange={getAllUsers}
            options={filteredList}
            labelledBy="Select Property"
            placeholder="Select Property"
          />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Dialog() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setModalShow(true)}
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

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

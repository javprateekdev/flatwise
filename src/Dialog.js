import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {add} from './store/cartSlice'
import {add4} from './store/cart2Slice'
import { useDispatch } from "react-redux";

function MyVerticallyCenteredModal(props) {

 const [type,settype]=useState('');
 const [type2,settype2]=useState('');
 const[button,setbutton]=useState(true);
 const[button2,setbutton2]=useState(false);

  const dispatch=useDispatch()

 console.log(type)
 console.log(type2)

 const handleClickOpen = (value) => {
  settype(value);
};
const handleClickOpen2 = (value) => {
  settype2(value);
};
const handlebutton=(value)=>{
  setbutton(value);
}
const handlebutton2=(value)=>{
  setbutton2(value);
}
useEffect(() => {
  dispatch(add(type));
  dispatch(add4(type2));
}, [type,type2]);


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
        <div>
        <h6>Choose Property Status</h6>
        <p>
        <button className={button?null:"button-8"} onClick={()=>{handleClickOpen2('Ready To Move'); handlebutton(false)}}>Ready To Move</button>
        <button className={button2?"button-8":null} onClick={()=>{handleClickOpen2('Under Construction'); handlebutton2(true)}}>Under Construction</button>
        </p>

      <h6>Choose Property Type</h6>
        <p>
        <button class="button-8" onClick={()=>{handleClickOpen('2BHK')}}> 2 BHK</button>
        <button class="button-8" onClick={()=>handleClickOpen('3BHK')} >3 BHK</button>
        <button class="button-8" onClick={()=>handleClickOpen('4BHK')} >4 BHK</button>
        </p>
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
      <button  onClick={() => setModalShow(true)} style={{border:"none",background:"none"}}>
      <div className='parameters'>
     <img src="https://i.imgur.com/aMohEci.png" className='parameterspic' />
    <div  className='filtertext' >
      Select The Parameters To Compare
      </div>
    
     </div>
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}


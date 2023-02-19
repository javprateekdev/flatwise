import React,{useState,useEffect} from 'react'
import { useSelector } from "react-redux";
import { getalldata2 } from "./api";

const View = () => {

  const [data, setdata] = useState([]);

  const select = useSelector((state) => state.property1);
  const select2= useSelector((state) => state.property2);
  const select3= useSelector((state) => state.property3);
  const select4 = useSelector((state) => state.cart);
  const select5 = useSelector((state) => state.cart2);
  const [type,settype]=useState('');
  const [type2,settype2]=useState('');

  
 
  

  useEffect(() => {
    getdata();
  }, []);
  

const filterd_users = data.filter( user => user.title === select.label );
  
const var1=filterd_users.filter(user => user.Type===type);
    


console.log(var1)

console.log(type)
console.log(type2)

const handleClickOpen = (value) => {
 settype(value);
};
const handleClickOpen2 = (value) => {
 settype2(value);
};


  const getdata = async () => {
    let response = await getalldata2();
    setdata(response.data);
  };

  console.log(select5);
  const filterCategory = (categoryItem) => {
    const result = data.filter((data) => {
      return data.Location === categoryItem;
    });
    
  };
  return (

    <div>
      <div style={{width:"20%",zIndex:"1000",top:"0"}}>
        <div style={{margin:"5px",boxShadow: "0 1px 6px 1px #ccc"}}>
        <h6 style={{textAlign:"center"}}>Choose Property Status</h6>
        <p style={{alignItems:"center",textAlign:"center"}}>
        <button className="button-8" onClick={()=>{handleClickOpen2('Ready To Move'); }}>Ready To Move</button>
        <button className="button-8" onClick={()=>{handleClickOpen2('Under Construction');}}>Under Construction</button>
        </p>
        </div>
       
        <div style={{margin:"5px",textAlign:"center",boxShadow: "0 1px 6px 1px #ccc"}}>
        <h6 style={{textAlign:"center"}}>Choose Property Type</h6>
        <p>
        <button class="button-8" onClick={()=>{handleClickOpen('2BHK')}}> 2 BHK</button>
        <button class="button-8" onClick={()=>handleClickOpen('3BHK')} >3 BHK</button>
        <button class="button-8" onClick={()=>handleClickOpen('4BHK')} >4 BHK</button>
        </p>
        </div>
        <div style={{ boxShadow: "0 1px 6px 1px #ccc", marginTop: "2vh" }}>
          <h6 style={{textAlign:"center"}}>Select Location</h6>
          <p style={{textAlign:"center"}}>
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
          </p>
          
        </div>
      
        </div>
      </div>
    
  )
}

export default View
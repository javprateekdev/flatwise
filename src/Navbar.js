import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='nav'>
          <div><img src="https://i.imgur.com/5hkxqkK.png" style={{width:"200px",float:"left",height:""}}/></div>
           <div style={{width:"10%",height:"65%",background:"red",padding:"2px",float:"right",marginRight:"2%",color:"white",textAlign:"center",borderRadius:"3px",marginLeft:"65%"}}>Compare By Properties</div>
            <div style={{width:"8%",height:"65%",background:"red",padding:"2px",float:"right",marginRight:"2%",color:"white",textAlign:"center",borderRadius:"3px"}}>Compare By Flats</div>
        
           
        </div>
    </div>
  )
}

export default Navbar;
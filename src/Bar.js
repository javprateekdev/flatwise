import React from 'react';
import Dialog from './Dialog';
import Property1 from './Property1';
import Property2 from './Property2';
import Property3 from './Property3';

const Bar = () => {
  return (
    <div className="Header" >
        
    
    <div style={{width:"33%",display:"block",borderRight:"4px solid #eee",alignContents:"center",alignitems:"center"}}>
        <div style={{textAlign:"center",padding:"15px"}}><Property1/></div>
       </div>
       <div style={{width:"33%",display:"block",borderRight:"4px solid #eee"}}>
        <div style={{textAlign:"center",padding:"15px"}}><Property2/></div>
       </div>
      
       <div style={{width:"33%",display:"block"}}>
       
        <div style={{textAlign:"center",padding:"15px"}}><Property3/></div>
       </div>
</div>
  )
}

export default Bar
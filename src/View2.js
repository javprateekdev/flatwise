import React from 'react';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'

const View2 = () => {

    const options = {
        arrowPrev: false,
        arrowNext: false,
        zoom: false,
        close: false,
        counter: false,
        bgOpacity: 0,
        padding: { top: 20, bottom: 40, left: 100, right: 100 },
      }


const select = useSelector((state) => state.property1);

const select2 = useSelector((state) => state.property2);

const select3 = useSelector((state) => state.property3);

console.log(select)

  return (
    <div style={{width:"95%",margin:"1%",display:"flex"}}>

      <div style={{width:"33%",margin:"1%"}}>
      
      {select.title? <div >
            <div style={{border:"5px solid #eee"}}>
        <Gallery options={options} >
    <Item
      original="https://i.imgur.com/K0mkuVa.jpg"
      thumbnail="https://i.imgur.com/K0mkuVa.jpg"
      width="1024"
      height="768"
      style={{width:"100%"}}
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.imgur.com/K0mkuVa.jpg" style={{width:"100%",padding:"5px"}} />
      )}
    </Item>
    
  </Gallery>
  </div>
        <div style={{display:"flex"}}> <div className="filterrow">Title </div><div className='valuerow'>{select.title}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Type </div><div className='valuerow'>{select.Type}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Price </div><div className='valuerow'>{select.price}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Super Area</div><div className='valuerow'>{select.SuperArea}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Power Backup </div><div className='valuerow'>{select.Powerbackup}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">No. of Balconies </div><div className='valuerow'>{select.NoofBalconies}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Main Door Height </div><div className='valuerow'>{select.MainDoorHeight}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow2"><p style={{verticalAlign:"middle",lineHeight:"50px"}}>Floor Plan<p style={{fontSize:"10px",color:"red"}}>***(Click on picture to enlarge)</p></p> </div><div className='valuerow2'>
         
         <div style={{display:"block"}}>
          {select.floorplan1?
          <div style={{borderBottom:"1px solid white",height:"6vh"}}>
          <div style={{display:"flex"}}>
          <div style={{width:"50%",borderRight:"1px solid white",height:"5vh",padding:"1px",textAlign:"center",lineHeight:"32px"}}>Floor Plan 1</div>
          <div style={{width:"50%",height:"5vh"}}><Gallery options={options} >
  <Item
    original={select.floorplan1}
    thumbnail={select.floorplan1}
    width="1024"
    height="768"
    style={{width:"100%"}}
  >
    {({ ref, open }) => (
      <img ref={ref} onClick={open} src={select.floorplan1} style={{width:"60%",padding:"1px"}} />
    )}
  </Item>
  
</Gallery></div>
          </div>
          </div>:<></>
          }
          {select.floorplan2?
          <div style={{borderBottom:"1px solid white",height:"6vh"}}>
             <div style={{display:"flex"}}>
          <div style={{width:"50%",borderRight:"1px solid white",height:"5vh",padding:"1px",textAlign:"center",lineHeight:"32px"}}>Floor Plan 2</div>
            <div style={{width:"50%",height:"5vh"}}><Gallery options={options} >
    <Item
      original={select.floorplan2}
      thumbnail={select.floorplan2}
      width="1024"
      height="768"
      style={{width:"10%"}}
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={select.floorplan2} style={{width:"60%",padding:"1px"}} />
      )}
    </Item>
    
  </Gallery></div>
            </div></div>:<></>
            }
            {select.floorplan3?
          <div style={{height:"6vh"}}>
             <div style={{display:"flex"}}>
          <div style={{width:"50%",borderRight:"1px solid white",height:"5vh",padding:"1px",textAlign:"center",lineHeight:"32px"}}>Floor Plan 3</div>
            <div style={{width:"50%",height:"5vh"}}><Gallery options={options} >
    <Item
      original={select.floorplan3}
      thumbnail={select.floorplan3}
      width="1024"
      height="768"
      style={{width:"100%"}}
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={select.floorplan3} style={{width:"60%",padding:"1px"}} />
      )}
    </Item>
    
  </Gallery></div>
            </div></div>
            :<></>
          }
         </div>

         </div>
         </div>
        
        <div style={{display:"flex"}}> <div className="filterrow">Loading </div><div className='valuerow'>{select.Loading}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">CarpetArea </div><div className='valuerow'>{select.CarpetArea}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Ceiling Height </div><div className='valuerow'>{select.CeilingHeight}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Electric load </div><div className='valuerow'>{select.Electricload}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Furnished or Semifernished</div><div className='valuerow'>{select.FurnishedorSemifernished}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Internal Door Heights</div><div className='valuerow'>{select.InternalDoorHeights}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Location</div><div className='valuerow'> {select.location}</div></div>
        </div>:<>
     
        </>}
        </div>

  {/*  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/} 
    <div style={{width:"33%",margin:"1%"}}>
      
      {select2.title? <div >
            <div style={{border:"5px solid #eee"}}>
        <Gallery options={options} >
    <Item
      original="https://i.imgur.com/K0mkuVa.jpg"
      thumbnail="https://i.imgur.com/K0mkuVa.jpg"
      width="1024"
      height="768"
      style={{width:"100%"}}
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.imgur.com/K0mkuVa.jpg" style={{width:"100%",padding:"5px"}} />
      )}
    </Item>
    
  </Gallery>
  </div>
        <div style={{display:"flex"}}> <div className="filterrow">Title </div><div className='valuerow'>{select2.title}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Type </div><div className='valuerow'>{select2.Type}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Price </div><div className='valuerow'>{select2.price}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Super Area</div><div className='valuerow'>{select2.SuperArea}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Power Backup </div><div className='valuerow'>{select2.Powerbackup}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">No. of Balconies </div><div className='valuerow'>{select2.NoofBalconies}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Main Door Height </div><div className='valuerow'>{select2.MainDoorHeight}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow2"><p style={{verticalAlign:"middle",lineHeight:"50px"}}>Floor Plan <p style={{fontSize:"10px",color:"red"}}>***(Click on picture to enlarge)</p></p> </div><div className='valuerow2'>
         
         <div style={{display:"block"}}>
         {select2.floorplan1?
          <div style={{borderBottom:"1px solid white",height:"6vh"}}>
          <div style={{display:"flex"}}>
          <div style={{width:"50%",borderRight:"1px solid white",height:"5vh",padding:"1px",textAlign:"center",lineHeight:"32px"}}>Floor Plan 1</div>
          <div style={{width:"50%",height:"5vh"}}><Gallery options={options} >
  <Item
    original={select2.floorplan1}
    thumbnail={select2.floorplan1}
    width="1024"
    height="768"
    style={{width:"100%"}}
  >
    {({ ref, open }) => (
      <img ref={ref} onClick={open} src={select2.floorplan1} style={{width:"60%",padding:"1px"}} />
    )}
  </Item>
  
</Gallery></div>
          </div>
          </div>:<></>
          }
          {select2.floorplan2?
          <div style={{borderBottom:"1px solid white",height:"6vh"}}>
             <div style={{display:"flex"}}>
          <div style={{width:"50%",borderRight:"1px solid white",height:"5vh",padding:"1px",textAlign:"center",lineHeight:"32px"}}>Floor Plan 2</div>
            <div style={{width:"50%",height:"5vh"}}><Gallery options={options} >
    <Item
      original={select2.floorplan2}
      thumbnail={select2.floorplan2}
      width="1024"
      height="768"
      style={{width:"10%"}}
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={select2.floorplan2} style={{width:"60%",padding:"1px"}} />
      )}
    </Item>
    
  </Gallery></div>
            </div></div>:<></>
            }
            {select2.floorplan3?
          <div style={{height:"6vh"}}>
             <div style={{display:"flex"}}>
          <div style={{width:"50%",borderRight:"1px solid white",height:"5vh",padding:"1px",textAlign:"center",lineHeight:"32px"}}>Floor Plan 3</div>
            <div style={{width:"50%",height:"5vh"}}><Gallery options={options} >
    <Item
      original={select2.floorplan3}
      thumbnail={select2.floorplan3}
      width="1024"
      height="768"
      style={{width:"100%"}}
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={select2.floorplan3} style={{width:"60%",padding:"1px"}} />
      )}
    </Item>
    
  </Gallery></div>
            </div></div>
            :<></>
          }
          </div>
          </div>
         </div>
        
        <div style={{display:"flex"}}> <div className="filterrow">Loading </div><div className='valuerow'>{select3.Loading}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">CarpetArea </div><div className='valuerow'>{select3.CarpetArea}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Ceiling Height </div><div className='valuerow'>{select3.CeilingHeight}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Electric load </div><div className='valuerow'>{select3.Electricload}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Furnished or Semifernished</div><div className='valuerow'>{select3.FurnishedorSemifernished}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Internal Door Heights</div><div className='valuerow'>{select3.InternalDoorHeights}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Location</div><div className='valuerow'> {select3.location}</div></div>
        </div>:<>
     
        </>}
        </div> 

  {/*  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/} 
        <div style={{width:"33%",margin:"1%"}}>
      
      {select3.title? <div >
            <div style={{border:"5px solid #eee"}}>
        <Gallery options={options} >
    <Item
      original="https://i.imgur.com/K0mkuVa.jpg"
      thumbnail="https://i.imgur.com/K0mkuVa.jpg"
      width="1024"
      height="768"
      style={{width:"100%"}}
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://i.imgur.com/K0mkuVa.jpg" style={{width:"100%",padding:"5px"}} />
      )}
    </Item>
    
  </Gallery>
  </div>
        <div style={{display:"flex"}}> <div className="filterrow">Title </div><div className='valuerow'>{select2.title}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Type </div><div className='valuerow'>{select2.Type}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Price </div><div className='valuerow'>{select2.price}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Super Area</div><div className='valuerow'>{select2.SuperArea}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Power Backup </div><div className='valuerow'>{select2.Powerbackup}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">No. of Balconies </div><div className='valuerow'>{select2.NoofBalconies}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Main Door Height </div><div className='valuerow'>{select2.MainDoorHeight}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow2"><p style={{verticalAlign:"middle",lineHeight:"50px"}}>Floor Plan <p style={{fontSize:"10px",color:"red"}}>***(Click on picture to enlarge)</p></p> </div><div className='valuerow2'>
         
         <div style={{display:"block"}}>
         {select3.floorplan1?
          <div style={{borderBottom:"1px solid white",height:"6vh"}}>
          <div style={{display:"flex"}}>
          <div style={{width:"50%",borderRight:"1px solid white",height:"5vh",padding:"1px",textAlign:"center",lineHeight:"32px"}}>Floor Plan 1</div>
          <div style={{width:"50%",height:"5vh"}}><Gallery options={options} >
  <Item
    original={select3.floorplan1}
    thumbnail={select3.floorplan1}
    width="1024"
    height="768"
    style={{width:"100%"}}
  >
    {({ ref, open }) => (
      <img ref={ref} onClick={open} src={select3.floorplan1} style={{width:"60%",padding:"1px"}} />
    )}
  </Item>
  
</Gallery></div>
          </div>
          </div>:<></>
          }
          {select3.floorplan2?
          <div style={{borderBottom:"1px solid white",height:"6vh"}}>
             <div style={{display:"flex"}}>
          <div style={{width:"50%",borderRight:"1px solid white",height:"5vh",padding:"1px",textAlign:"center",lineHeight:"32px"}}>Floor Plan 2</div>
            <div style={{width:"50%",height:"5vh"}}><Gallery options={options} >
    <Item
      original={select3.floorplan2}
      thumbnail={select3.floorplan2}
      width="1024"
      height="768"
      style={{width:"10%"}}
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={select3.floorplan2} style={{width:"60%",padding:"1px"}} />
      )}
    </Item>
    
  </Gallery></div>
            </div></div>:<></>
            }
            {select3.floorplan3?
          <div style={{height:"6vh"}}>
             <div style={{display:"flex"}}>
          <div style={{width:"50%",borderRight:"1px solid white",height:"5vh",padding:"1px",textAlign:"center",lineHeight:"32px"}}>Floor Plan 3</div>
            <div style={{width:"50%",height:"5vh"}}><Gallery options={options} >
    <Item
      original={select3.floorplan3}
      thumbnail={select3.floorplan3}
      width="1024"
      height="768"
      style={{width:"100%"}}
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src={select3.floorplan3} style={{width:"60%",padding:"1px"}} />
      )}
    </Item>
    
  </Gallery></div>
            </div></div>
            :<></>
          }
          </div>
          </div>
         </div>
        
        <div style={{display:"flex"}}> <div className="filterrow">Loading </div><div className='valuerow'>{select3.Loading}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">CarpetArea </div><div className='valuerow'>{select3.CarpetArea}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Ceiling Height </div><div className='valuerow'>{select3.CeilingHeight}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Electric load </div><div className='valuerow'>{select3.Electricload}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Furnished or Semifernished</div><div className='valuerow'>{select3.FurnishedorSemifernished}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Internal Door Heights</div><div className='valuerow'>{select3.InternalDoorHeights}</div></div>
        <div style={{display:"flex"}}> <div className="filterrow">Location</div><div className='valuerow'> {select3.location}</div></div>
        </div>:<>
     
        </>}
        </div>
     
    </div>
  )
}

export default View2;
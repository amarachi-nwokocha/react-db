import { useState} from "react";
 import './App.css'
const Results =({tags,filteredData,removeAllItem,deleteOneItem}) =>{
   
  return(
    <div>
      <section className="input">
       
      {tags.length > 0 &&
          <div className="tags-div">   
          <div className="chips">
          {
          tags.map((tag, index) =>{
            return <div className="small-tag"> 
             <button key={index} >{tag}<span onClick={()=>deleteOneItem(tag)}>X</span></button>
            </div>
          })
        }  
            </div>
            <button className="clear-btn"   onClick={removeAllItem}> Clear</button>
          </div>
          
        }
        
         </section>
      
    </div>
)
}

export default Results;
import React from "react";
import { useState, useEffect } from "react";
import TopImg from './images/bg-header-desktop.svg'
import './App.css'
import Results from "./filter";
import {jobs} from './db'
function FetchData() {
    const [error, setError] = useState(null);
    // const [items, setItems] = useState([])
    const [value, setValue] = useState()
    const [selectedTag, setSelectedTag] = useState([])
    const [filteredData, setFilteredData] = useState(selectedTag)
    
  const addFilter =(value) =>{
    setValue(value)
    
   console.log(value);
    const previousValue = [...selectedTag]
   // console.log(previousValue.includes(value));
    const tags = !previousValue.includes(value) ? [...previousValue,value] : previousValue
    console.log(tags);
    tags.slice(1,3)
    setSelectedTag(tags)
  
  }
  // console.log(selectedTag);
  
//  const filteredArr = items.filter(item=>
//   selectedTag.includes(item.level)
//   ||
//   selectedTag.includes(item.role)
//   ||
//   selectedTag.includes(item.languages)
//   ||
//   selectedTag.includes(item.tools)
//   )         
  // console.log(filteredArr);
   // setItems(filteredArr)
//console.log(items);
//  console.log(selectedTag);
  // clear button
const removeAllItem =() =>{ 
 console.log('Amara is a beauty');
    
    setSelectedTag([])
}
// delete one item
const deleteOneItem = (index) =>{
console.log('amara is  wonderful');
     console.log(index);
   const filt = selectedTag.filter(tag =>{
       console.log(tag);
        return tag !== index
   })
   setSelectedTag(filt)
  }
   
 
    // useEffect(() => {
    //     fetch('http://localhost:3000/jobs')
    //       .then((res) => res.json())
    //       .then(  (result) => {
    //         setItems(result);
    //       //  console.log(items);
    //       },
    //       (error) => {
    //         setError(error);
    //       }
    //     ); }, []);          
           
        const mappedItems = jobs.map((item)=>(
       
          <div className="card"  key ={item.id}>
             <div className="item">
               <div className="logo">
                 <img src={require(`./images/${item.logo}`)} />
               </div>
               <div className="comp-cl">
                 <div className="gtext">
               <p className="comp-col">{item.company}</p> 
              <span className={item.new ? 'new' : '' }
              > {item.new ? 'New'  : null }</span>
              <span className={item.featured ? 'featured' : ''}>{item.featured ? 'Featured' : ''}</span>
              </div>
             <h5 className="position"> {item.position}</h5> 
              <div className="bottom-tags">
              <p>{item.postedAt}</p>
              <ul className="flex">
               <li>{item.contract}</li>
               <li>{item.location}</li>
              </ul>
               </div>
             </div>
             </div>
            <div className="side-tags">
             <div className="tags">
              <button onClick={()=>addFilter(item.level)} value={item.level}>{item.level}</button>
              <button onClick={()=>addFilter(item.role)} value={item.role}>{item.role}</button>
              {
                  item.languages && Array.isArray(item.languages) ? (item.languages.map(lang => 
                    <button key={lang} value={lang} onClick={()=>addFilter(lang)}>{lang}</button>
                  )) :  ''   
              }
              {
                 item.tools && Array.isArray(item.tools) ? (item.tools.map(tool => 
                  <button key={tool} value={tool} onClick={()=>addFilter(tool)}>{tool}</button>
                )) :  ''  
              }
                   </div>
                  {/*  */}
              </div>
             </div>
           ))
    // if (error) {
    //     return (<div>Error: {error.message}</div>)
    //   } else  if (){
        return(
            <div className="general-cont">
              <div className="top">
              <img src={TopImg} />
              </div>
              <div className="cards-sec">
                {selectedTag.length > 0 ? (<Results 
                  filteredData={filteredData}
                deleteOneItem={deleteOneItem}
                removeAllItem={removeAllItem}
                tags={selectedTag} />) : null}
                {            
           mappedItems
            }
            </div>
        </div>
          
        );
      }

        
          

export default FetchData
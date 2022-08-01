


const items =() =>{

    const mappedItems = items && items.map((item)=>(
        <div className="card"  key ={item.id}>
           <div className="item">
             <div className="logo">
               <img src={item.logo} />
             </div>
             <div className="comp-cl">
             <p className="comp-col">{item.company}</p> 
            <span className="new"> {item.new ? 'New'  : null }</span>
            <span className="featured">{item.featured ? 'Featured' : null}</span>
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
          <div className="side-tags">
            <button onClick={addFilter} value={item.role}>{item.role}</button>
            <button onClick={addFilter} value={item.level}>{item.level}</button>
           <div className="tags">
             <p>hello world</p>
                  
                    
                  {
                    realLang.map((i) =>{
                     return <button value={i} onClick={addFilter}>{i}</button>
                    })
                  }
                 </div>
                
            </div>
           </div>
         ))
  if (error) {
      return (<div>Error: {error.message}</div>)
    } else  if (items){
      return(
          <div className="general-cont">
            <div className="top">
              <img src= {TopImg}  className="bck-top" alt="bck-img" />
            </div>
            <div className="cards-sec">
              {selectedTag.length > 0 ? (<Results items ={setItems} tags={selectedTag}/>) : null}
              {            
         mappedItems
          }
          </div>
      </div>
        
      );
    }
}
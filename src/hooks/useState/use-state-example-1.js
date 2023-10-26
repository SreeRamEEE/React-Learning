import React , { useState} from "react";

const UseStateExample=()=>{
   
    const [data,setData]=useState({name:"",id:""});
    const [isEdit,setisEdit]=useState(false);
    const [list,setList]= useState([]);
  

   const deleteRow =(id)=>{
       const filterList= list.filter((item)=>item.id!==id);
       setList(filterList);
   }

   const editRow=(id)=>{
    const ediObj= list.find((item)=>item.id===id);
    setData({...ediObj})
    setisEdit(true)
   }

   const editBtn=()=>{
    let newTodos = list.map((eachItem) => {
        if (eachItem.id === data.id) {
          return {
            name: data.name,
            id: data.id,
          };
        } else {
          return eachItem;
        }
    });

    setList(newTodos)
    setData({name:"",id:""});
    setisEdit(false)
   }

   const inputHanlderChange =(value,key)=>{
      setData({
          ...data,[key]:value
      })
   }

   const addMore=()=>{
      setList([...list,{...data,id:new Date().getTime()}])
      setData({name:"",id:""})
   }
    return(
        <div>
        <br/>
            <center>
            <h2>useState Example</h2>
           <div> 
          <div >
          Name:  <input type="text" name="name" value={data.name}  onChange={(e)=>inputHanlderChange(e.target.value,"name")}/> 
          {isEdit?<button onClick={()=>editBtn()}> Edit</button>: <button onClick={()=>addMore()}> add</button>}
          </div>  
          <br/>
           <div>
           </div>  
           </div>
               
                <br/>
             
            </center>

            <div>
                <ul className="userList">
                {
                    list.map((item,index)=>{
                        return (
                           
                            <li key={item.id}>
                           <div> <h3>{item.name}</h3></div>
                           <button onClick={()=>editRow(item.id)}>Edit </button> &nbsp;
                            <button onClick={()=>deleteRow(item.id)}>Delete </button>
                            </li>
                          
                           
                          
                           
                            )
                            
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default UseStateExample
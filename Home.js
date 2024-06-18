import React from 'react'
import { FaTrash } from "react-icons/fa";

/*
const Home = () => {
    function demo(){
        console.log("Running");
    }
  return (
    <div>
        <button onClick={demo}>Click</button>
    </div>
  )
}
  */


/*
const Home = () => {
    const demo = () => {
        document.getElementById("para").innerHTML="Running"
    }
  return (
    <div>
        <p id='para'></p>
        <button onClick={demo}>Click</button>
    </div>
  )
}
*/

/*
const Home = () => {
    const demo = (name) => {
        document.getElementById("para").innerHTML=`Hi this is ${name}`
    }
  return (
    <div>
        <p id='para'></p>
        <button onClick={() =>demo("Ram")}>Click</button>
        <button onClick={() =>demo("Shiva")}>Click</button>
    </div>
  )
}
*/

/*
const Home = () => {
    const demo = () => {
        const names=["Morning", "Afternoon", "Evening", "Night"];
        const value=Math.floor(Math.random()*4);
        return names[value];
    }
  return (
    <div>
        <p id='para'>Good {demo()}</p>
    </div>
  )
}
*/

/*
const Home = () => {
  const demo = (name) => {
      document.getElementById("para").innerHTML=`Hi this is ${name}`
  }
return (
  <div>
      <p id='para'></p>
      <button onDoubleClick={() =>demo("Ram")}>Click</button>
      <button onDoubleClick={() =>demo("Shiva")}>Click</button>
  </div>
)
}


*/



/*
const Home = () => {
  const [number, Setnumber]=useState(0);
  const add = () => {
    Setnumber(number+1);
  }
  const dec =() => {
    Setnumber(number-1);
  }
  
  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{number}</span>
      <button onClick={add}>+</button>
    </div>
  )
}
*/

/*
const Home = () => {
  const [name, setName]=useState("");
  const demo = () => {
      const names=["Morning","Afternoon","Evening"]
      const value=Math.floor(Math.random()*3);
      setName(names[value]);
  }
return (
  <div>
      <p id='para'>Good {name}</p>
      <button onClick={demo}>click</button>
  </div>
)
}*/ 

/*
const Home = () => {
  const [list, setList]=useState([
    {
      id:1,
      checked:true,
      item:"Html"
    },
    {
      id:2,
      checked:false,
      item:"Css",
    },
    {
      id:3,
      checked:true,
      item:"Java"
    }
  ])


  return (
  <div>
    <ul>
    
    {
      
        list.map((li) => (
        <li>
        <input type='checkbox' checked={li.checked}/>
        <label>{li.item}</label>
        <button>Delete</button>
        </li>
        
      ))
    }
    </ul>

  </div>
)}
*/

const Home = ({list,handleChange,handleDelete}) => {
 

  return(
    <div>
      <ul>
        {
          list.map((li) => (
            <li>
            <input type='checkbox' checked={li.checked} onChange={()=>handleChange(li.id)}/>
            <label>{li.item}</label>
            <FaTrash  role='button' tabIndex='0' onClick={()=> handleDelete(li.id)}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Home
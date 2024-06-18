
import './App.css';
import Home from './Home';
//import { P1 } from './P1';
import Length from './Length';
import { useEffect, useState } from 'react';
import Add from './Add';
import Search from './Search';

function App() {
  const [search,setSearch]=useState("")
  const [addnew,setAddNew]=useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    const id=list.length?list[list.length-1].id+1:1
    const newitem ={id,checked:false,item:addnew}
    const result=[...list,newitem]
    setList(result)
    setAddNew("")
  }
  const [list, setList]=useState([
    {
      id:1,
      checked:false,
      item:"Phonepay"
    },
    {
      id:2,
      checked:false,
      item:"Paytm"
    },
    {
      id:3,
      checked:false,
      item:"Googlepay"
    }
  ])
  const handleChange=(id)=> {
    const result=list.map((li)=> (li.id===id?{...li,checked:!li.checked}:li))
    setList(result)
  }
  const handleDelete=(id)=> {
    const result=list.filter((li)=> (li.id!==id))
    setList(result)
  }
  // useEffect(() => {
  //   console.log("loading")
  // },[])
  return (
    <div className="App">
        <h1>My website</h1>
        <Search search={search} setSearch={setSearch} />
        <Home list={list.filter((li)=>(li.item).toLowerCase().includes(search.toLowerCase()))} handleChange={handleChange} handleDelete={handleDelete}/>
        
        {/* 
        <p>Hello World Hi</p>
        <p><input type='text' placeholder='Type here...' ></input></p>
        <p><input type='submit'></input></p>
        <P1 /> */}
        <Add addnew={addnew} setAddNew={setAddNew} handleSubmit={handleSubmit} />
        <Length list={list} />
        
    </div>
  );
}

export default App;

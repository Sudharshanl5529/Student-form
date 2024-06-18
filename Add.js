import React from 'react'

const Add = ({addnew,setAddNew,handleSubmit}) => {
  return (
    <div>
        <input type='text' value={addnew} onChange={(e)=>setAddNew(e.target.value)}/>
        <button type='submit' onClick={handleSubmit}>+</button>
    </div>
  )
}

export default Add
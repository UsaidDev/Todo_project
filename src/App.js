import React, { useEffect, useState } from 'react'
import Counter from './Counter'
function App() {
  const [show, Setshow] = useState(false);
  const [count,Setcount]=useState(0);
  useEffect(()=>{
    console.log("Use Effect Working");
    
  })
  return (
    <div>
      <button onClick={() => Setshow(!show)}>Click here</button>
      {
        show ? <Counter /> : null
      }
      <button onClick={()=>Setcount(count+1)}>Add</button>
    </div>
  )
}
export default App 
import React, { useState } from 'react'

function Counter() {
  const [count,Setcount]=useState(0);
  return (
    <div>
      <button onClick={(()=>Setcount(count+1))}>Add count</button>
        <p>Count:{count}</p>
    </div>
  )
}
export default Counter
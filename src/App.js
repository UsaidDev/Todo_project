import React, { useEffect, useState } from 'react'
import Counter from './Counter'
function App() {
  const [show, Setshow] = useState(false);
  useEffect(() => {
    console.log("Use Effect Working");
  })
  return (
    <div>
      <button onClick={() => Setshow(!show)}>Click here</button>
      {
        show ? <Counter /> : null
      }
    </div>
  )
}
export default App;
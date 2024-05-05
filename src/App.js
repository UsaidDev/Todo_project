import React from 'react'
import Employee from './Employee'
function App() {
  let Emp = [{ name: "Jhon P", age: 12, place: "Kannur" },
  { name: "Fahad", age: 19, place: "Calicut" },
  { name: "Ubaid ok", age: 13, place: "Malappuram" },
  ]
  return (
    <div>
      {
        Emp.map((obj, index) => {
          return (<Employee key={index} {...obj} />)
        })
      }
    </div>
  )
}
export default App
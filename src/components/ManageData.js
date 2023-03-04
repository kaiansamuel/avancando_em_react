import { useState } from 'react'

const ManageData = () => {
  let [number, setNumber] = useState(15);
  return (
    <div>
      <p>Valor: {number}</p>
      <button onClick={() => setNumber(number++)}>Mudar o state</button>
    </div>  
  )
}

export default ManageData;
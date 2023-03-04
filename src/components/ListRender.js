import { useState } from 'react';

const ListRender = () => {
  const [list] = useState(['Kaian', 'Samuel', 'Mauriceia']);
  return <div>
    <ul>
      {list.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
  
}

export default ListRender;
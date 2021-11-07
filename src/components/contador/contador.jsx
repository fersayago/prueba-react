import React, { useState } from 'react';

function Contador(){
  const [ contador, setContador ] = useState(0)
  return(
    <div className="container">
      <h1>{contador}</h1>
      <button disabled>-</button>
      <button
      >+</button>
    </div>
  )
}

export default Contador;
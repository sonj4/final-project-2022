import Spinner from 'react-bootstrap/Spinner';

import React from 'react'

export default function BootstrapSpinner() {
  return (
    <div style={{display: "flex", justifyContent:"center", alignItems: "center", width:"100vw", height:"100px"}}>
        <Spinner animation="grow" variant="secondary" />
    </div>
   
  )
}

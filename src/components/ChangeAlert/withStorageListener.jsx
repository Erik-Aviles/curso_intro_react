import React from 'react'
import { useState } from 'react'

const withStorageListener = (WrappedComponent) => {
  return function WrappedComponeWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    window.addEventListener('storage', (change) =>{
      if (change.key === 'TODOS_V1') {
        console.log('Hubo cambios en Todos_v1');
        setStorageChange(true);
      }
    });
    const toogleShow = () =>{
      props.sincronize()
      setStorageChange(false)
    }
    return (
      <WrappedComponent 
        show={storageChange}
        toogleShow={toogleShow}
      />
    );
  }
}

export{ withStorageListener } 

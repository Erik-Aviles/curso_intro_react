import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css'

const ChangeAlert = ({show, toogleShow}) => {
  if (show) {
    return (
      <div className='change-bg'>
        <div className='messaje-sincronize-container'>
        <p className='messaje-sincronize'>Hubo cambios en otra ventana</p>
        <p className='messaje-sincronize'>Deseas ver los cambio?</p>
        <button className='messaje-sincronize-button' onClick={() => toogleShow(false )}>
           YES!
        </button>
      </div>
      </div>
    )
  } else {
    return null;
  }
}

const GhangeAlerWithStorageListener = withStorageListener(ChangeAlert);

export {GhangeAlerWithStorageListener};

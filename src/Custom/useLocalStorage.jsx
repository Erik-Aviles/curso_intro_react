import { useState } from "react";

export function useLocalStorage(itemName, inicialValue) {

    // Persistencia de datos en local storage -->
  const localStorageItem = localStorage.getItem(itemName);
  let parsetItem;

  if(!localStorageItem){
    localStorage.setItem('itemName', JSON.stringify(inicialValue));
    parsetItem= inicialValue;
  } else {
    parsetItem= JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = useState(parsetItem);
  // <----

  // Guarda la informacion en el local storage aunque se recargue la pagina
  const saveItem= (newItem) => {
    const strinngifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, strinngifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem,
  ];
// <----
}
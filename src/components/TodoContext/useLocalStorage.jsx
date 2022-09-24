import { useEffect, useState } from "react";

export function useLocalStorage(itemName, inicialValue) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(inicialValue);

  useEffect(() => {
    setTimeout(() => { 
      try {
        // Persistencia de datos en local storage -->
        const localStorageItem = localStorage.getItem(itemName);
        let parsetItem;

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(inicialValue));
          parsetItem= inicialValue;
        } else {
          parsetItem= JSON.parse(localStorageItem);
        }

        setItem(parsetItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000)
  });


  

  // <----

  // Guarda la informacion en el local storage aunque se recargue la pagina
  const saveItem= (newItem) => {
    try {
      const strinngifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, strinngifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
// <----
}
import { useEffect, useState } from "react";

export function useLocalStorage(itemName, inicialValue) {
  const [sincronizeItem, setSincronizeItem] = useState(true);
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
        setSincronizeItem(true);
      } catch (error) {
        setError(error);
      }
    }, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sincronizeItem]);


  

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

  const sincronize = () => {
    setLoading(true);
    setSincronizeItem(false);
  }

  return {
    item,
    saveItem,
    loading,
    error,
    sincronize,
  };
// <----
}
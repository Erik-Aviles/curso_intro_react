import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue} ) {
    
    const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    };
  
    return (
      <input
        className="TodoSearch"
        placeholder="Busqueda"
        value={searchValue}
        onChange={onSearchValueChange}
      />
    );
  }
  
  export { TodoSearch };
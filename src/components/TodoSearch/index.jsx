import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue} ) {
    
    const onSearchValueChange = (event) => {
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
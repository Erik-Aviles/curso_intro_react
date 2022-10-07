
import './TodoList.css';

export function TodoList(props){

  return(
    <section className='TodosList-container'> 
      {props.error && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.searchedTodos?.length) && props.onEmptyTodos()}
      {props.searchedTodos.map(props.render) }
      <ul>
        {props.children}
      </ul>
    </section>
        
  );      
}

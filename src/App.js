import React from "react";
import { TodoCounter } from './todoCounter';
import { TodoSearch } from './todoSearch'
import { TodoButton } from './todoButton'
import { TodoList } from './todoList'
import { TodoItem } from './todoItem'
import { Modal } from './Modal/index'
import { Formtodo  } from './form'
import { LoadingTodo } from './loadind'
//import './App.css';
//export const lista = [
//  {name:'cortar cebolla',progress:false},
//  {name:'curso React',progress:false},
//  {name:'Cursos Platzi',progress:false},
//  {name:'papas Fritas' ,progress:false}
//]
function useLocalStorage(itemName , initialValue){
  const [OpenModal , setOpenModal]= React.useState(false)
  const [error ,  setError] = React.useState(false)
  const [loading ,  setLoading] = React.useState(true)
  const [item , setItem ] = React.useState(initialValue)
  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        
        if(!localStorageItem){
          localStorage.setItem(itemName,JSON.stringify(initialValue));
          parsedItem=initialValue
        }else{
          parsedItem = JSON.parse(localStorageItem)
        }
  
        setItem(parsedItem);
  
        setLoading(false)
      } catch (error) {
        setError(error)
      }
     
    }, 1000)
  })
  
  

  const saveItem = (newItem)=>{
    try {
      const stringifiendItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiendItem);
    setItem(newItem);

    } catch (error) {
      setError(error)      
    }
  }
  return {
    item,
    saveItem,
    loading,
    error,
    OpenModal,
    setOpenModal//a mas de dos se manda un objeto
    
  }
  
 
}
function App() {
  const{
    item:todoList,
    saveItem:saveTodos,
    loading:loading,
    error:error,
    OpenModal:OpenModal,
    setOpenModal:setOpenModal
  }= useLocalStorage('TODOS_V1' , []);
  
  const [estado , setEstado] = React.useState('');
  const TotalComplited = todoList.filter(item => !!item.progress).length;
  const TotalTodos = todoList.length;
  let SearchData=[]
  if(!estado.length >=1){
    SearchData = todoList;
  }else{
    SearchData = todoList.filter(item=>{
      const TxtEstado = estado.toLowerCase();
      const txtItem = item.name.toLowerCase();
      return txtItem.includes(TxtEstado);
    })
  }

  

  const onComplete =(text)=>{
    const todoIndex=todoList.findIndex(item=>item.name===text)
    const newList = [...todoList];
    newList[todoIndex].progress=true
    saveTodos(newList);
  }
  const onDelete =(text)=>{
    const todoIndex=todoList.findIndex(item=>item.name===text)
    const newList = [...todoList];
    newList.splice(todoIndex,1);
    saveTodos(newList);
  }

  const AddTodo = (text) =>{
    const newList = [...todoList];
    newList.push({
      name:text,
      progress:false
    });
    saveTodos(newList);
  }
  
  return (
    <React.Fragment>
      <TodoCounter
        TotalComplited={TotalComplited}
        TotalTodos={TotalTodos}
        />

      <TodoSearch
        estado={estado}
        setEstado={setEstado}
        />
      
      <TodoList>
        {error && <p>Desesperate , hubo un error</p>}
        <LoadingTodo
          loading={loading}
          SearchData={SearchData}
        />
       
        {SearchData.map(todo=>(
        < TodoItem 
          key={todo.name} 
          name={todo.name} 
          progress={todo.progress}
          onComplete={()=>onComplete(todo.name)}
          onDelete={()=>onDelete(todo.name)}
          />))}
      </TodoList>
      {!!OpenModal && (
         <Modal>
           <Formtodo 
            key={AddTodo.length}
            AddTodo={AddTodo}
            OpenModal={OpenModal}
            setOpenModal={setOpenModal}
           />
        </Modal>
      )}
      <TodoButton
        OpenModal={OpenModal}
       setOpenModal={setOpenModal}
      />
    </React.Fragment>
    );
}

export default App;

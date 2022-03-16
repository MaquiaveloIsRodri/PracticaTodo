import React from "react";
import './styles/TodoSearch.css'
function TodoSearch({estado , setEstado}){
const onfilter=(event)=>{
    setEstado(event.target.value)}
    return (
        <div>
              <input className="search" 
              placeholder="Cebolla"
              value={ estado } 
              onChange={onfilter}/>
        </div>
      
    );
}
export { TodoSearch }
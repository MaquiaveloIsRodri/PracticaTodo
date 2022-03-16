import React from "react";
import './styles/Todolist.css'
import imagen from './img/imagen.png'

function TodoList(props){
    return(
        <section className="section">
            <img src={imagen} className='section-imagen' />
            <div className="section-container"> 
                <ul className="ul">
                    {props.children}
                </ul>
            </div>
            
        </section>
       
    )
}
export {TodoList}
import React from "react";
import './styles/TodoButton.css'

function TodoButton (props){
    const PasTrue =()=>{ 
       if(props.OpenModal === false){
           return props.setOpenModal(true)
        
       }else{
        return props.setOpenModal(false)
       }
    }
    return (
        <div className="controlar"><button className="buscar" onClick={PasTrue}></button></div>
        
    )
}
export {TodoButton}
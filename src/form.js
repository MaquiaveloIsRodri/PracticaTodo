import React, { useState } from "react";
import './styles/form.css'
import agenda from './img/agenda.png'
function Formtodo (props){
    const [original ,setOriginal] = useState('')
    const EscucharInput=(event)=>{
        setOriginal(event.target.value)
    }
    let palabras = '';
    const AddSeguro =(event)=>{
        if(original.length <=3){
            alert('Solo mas de 3 palabras')
            event.preventDefault();//detiene la resolucion o recarga
        }else{
            props.AddTodo(original)
        }
    }
    const onCancelar=()=>{
        props.setOpenModal(false)
    } 

    return (
        <form className='modalContainer' onSubmit={AddSeguro}>
            <img src={agenda}/>
            <input placeholder='Agregar Item' className='AgregaItem' onChange={EscucharInput}/>
            <div className='buttons'>
                <button type="button" className='cancelar' onClick={onCancelar}>Cancelar</button>
                <button type="submit" className='aceptar'>Aceptar</button>
            </div>
        </form>
    );
}

export { Formtodo };
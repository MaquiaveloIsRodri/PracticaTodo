import React from "react";
import './styles/loading.css'
import imagen from './img/icons8-flecha-48.png'

function LoadingTodo(props){
    if(props.loading === true){
        return(
            <div className="container">
                <div className="contenedorLoad">
                    <span className="A1"></span>
                    <span className="A2"></span>
                    <span className="A3"></span>
                </div>
            </div>
        )
    }if(props.SearchData.length < 1){
        
        return(
        <div className="contenedorCreate">
            <h2 className="title">Crea un TODO!</h2>
            <p className="subTitle">Por favor haga click en el boton <span className="icono"></span> para poder agregar un Todo</p>
            <img className="imagen" src={imagen}/>
        </div>
        )
    }else{
        return(<p className="opacidad">ex</p>)
    }
}

export { LoadingTodo }
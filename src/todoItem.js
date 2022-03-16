import React from "react";
import checkBlack from './img/checkBlack.png'
import './styles/Todoitem.css'
 function TodoItem(props){
     return(
         <li className="li">
            <span 
            src={checkBlack} 
            className= {`checkBlack ${props.progress && `checkBlack--active`}`}
            onClick={props.onComplete}
            >.</span> 
            
             <p className= {`textValue ${props.progress && `textValue--active`}`}>
                {props.name}
             </p>
             <span 
             className="clouse"
             onClick={props.onDelete}
             >X</span>
             
         </li>
     );
 }
 export {TodoItem};
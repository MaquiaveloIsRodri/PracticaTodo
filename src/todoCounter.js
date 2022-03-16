import React from 'react';
import './styles/TodoCouter.css';

function TodoCounter ({TotalComplited , TotalTodos}) {
    return(
            <nav className='nav'>
                <h1 className='nav-title'>Has completado <b className='destacados'>{TotalComplited}</b> de <b className='destacados'>{TotalTodos}</b> tareas</h1>
                <p className='nav-sutitle'>Seleccione sus tareas completadas</p>
            </nav>
            



);} 
export { TodoCounter };
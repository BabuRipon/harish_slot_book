import React from 'react';
import classes from './modal.module.css';

const modal =(props)=>{

    let newClass=[classes.Modal];

    return(
    
    <div className={newClass.join(' ')} style={props.isDeleted?{transform:'translateY(0px)'}:{transform:'translateY(-300px)'}} >
            <h3>you are deleting  <strong>{props.element}</strong></h3>
            <button style={{padding:'10px 30px'}} onClick={props.clicked}>ok</button>
            <button style={{padding:'10px 20px',margin:'0px 10px'}} onClick={props.clickedCancel}>cancel</button>
        </div>
    )
}

export default modal;
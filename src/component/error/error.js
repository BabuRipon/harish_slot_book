import React from 'react';
import {withRouter}from 'react-router-dom';
import classes from './error.module.css';

const Error=(props)=>{

    const onBackHandler=()=>{
       props.history.push('/slot-book')
    }

    return(
        <div className={classes.Container}>
            <h3>opps ! This slot is booked already . Please select other one.</h3>
            <button className='btn btn-primary' onClick={onBackHandler}>back to slot</button>
        </div>
    )
}

export default withRouter(Error);
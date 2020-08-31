import React,{useEffect,useState} from 'react';
import classes from './header.module.css';
import { Link} from 'react-router-dom';
import Aux from '../../hoc/aux'
import {connect} from 'react-redux'

const Header=(props)=>{

   const onLogoutHandler=()=>{
       console.log(props.token);
       props.onLogout();
   }
   console.log(props.token);

    return (
   <div className={classes.Nav}>
    <ul className="nav justify-content-end">
           {
               props.token?(
                   <Aux>
                       <li className="nav-item">
                        <Link to='/sign-in' className='nav-link' onClick={onLogoutHandler}>logout</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category" className="nav-link">category</Link>
                        </li>
                   </Aux>
               ):(
                   <Aux>
                        <li className="nav-item">
                            <Link to='/sign-in' className="nav-link">sign-in</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up' className="nav-link">sign-up</Link>
                        </li>
                   </Aux>
               )
           }
            
        </ul>
   </div>
)
}


const mapStateToProps=(state)=>{
    return {
        token:state.token
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onLogout:()=>dispatch({type:'REMOVE_TOKEN'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
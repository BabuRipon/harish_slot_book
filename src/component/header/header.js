import React from 'react';
import classes from './header.module.css';
import { Link} from 'react-router-dom'

const Header=(props)=>{
    

    return (
   <div className={classes.Nav}>
    <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link to='/category'>logout</Link>
            </li>
            <li className="nav-item">
                <Link to="/category" className="nav-link">category</Link>
            </li>
            <li className="nav-item">
                <Link to='/sign-in' className="nav-link">sign-in</Link>
            </li>
            <li className="nav-item">
                <Link to='/sign-up' className="nav-link">sign-up</Link>
            </li>
        </ul>
   </div>
)
}

export default Header;
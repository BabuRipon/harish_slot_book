import React ,{useState}from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';


const SignIn=(props)=>{

   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [error,setError]=useState(false);
   const [errorMessage,seterrorMessage]=useState('');

   const onSubmitHandler=(event)=>{
       event.preventDefault();
       
       axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDW21PD3MW3uoNhLUnknEz6g3k9_mTNu9g',{
           email,password,returnSecureToken:true
       })
       .then(res=>{
           let token=res.data.idToken;
        //    localStorage.setItem('token',token);
           props. onTokenAdd(token)
           props.history.push('/category')
       })
       .catch(err=>{
           setError(true);
           seterrorMessage(err.response.data.error.message)
       })

   }

const Error=error?<p style={{color:'red'}}>{errorMessage}</p>:null;

    return(
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-10 offset-sm-2">
                {Error}
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input 
                        type="email" 
                        className="form-control"  
                        value={email}
                        onChange={event=>setEmail(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        value={password}
                        onChange={event=>setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
            </div> 
          </div>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
       onTokenAdd:(token)=>dispatch({type:'ADD_TOKEN',token:token})
    }
}

export default connect(null,mapDispatchToProps)(withRouter(SignIn));
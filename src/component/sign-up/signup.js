import React,{useState} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios'

const SignUp=(props)=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState(false);
    const [errorMessage,seterrorMessage]=useState('')

    const onSubmitHandler=(event)=>{
         event.preventDefault();
        
         const userData={
            email,password,
            returnSecureToken:true
         }

     axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDW21PD3MW3uoNhLUnknEz6g3k9_mTNu9g',userData)
       .then(res=>{
        //    console.log(res);
           setError(false)
           seterrorMessage('');
           setName('');
           setEmail('');
           setPassword('');
           props.history.push('/sign-in')
       })
       .catch(err=>{
           seterrorMessage(err.response.data.error.message);
           setError(true);
           setName('');
           setEmail('');
           setPassword('');
       })

    }

    const Error=error?<p style={{color:'red'}}>{errorMessage}</p>:null;

    return(
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-10 offset-sm-2">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={name}
                        onChange={(event)=>setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        value={email}
                        onChange={(event)=>setEmail(event.target.value)}
                        />
                        {Error}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        value={password}
                        onChange={(event)=>setPassword(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </form>
            </div> 
          </div>
        </div>
    )
}

export default withRouter(SignUp);
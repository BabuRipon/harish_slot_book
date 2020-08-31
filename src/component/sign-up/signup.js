import React,{useState} from 'react';
import axios from 'axios'

const SignUp=(props)=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const onSubmitHandler=(event)=>{
         event.preventDefault();
        
         const userData={
            email,password,
            returnSecureToken:true
         }

  

    }

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

export default SignUp;
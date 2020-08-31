import React,{useState,useEffect} from 'react';
import {withRouter, Redirect}from 'react-router-dom'
import axios from 'axios';

const SlotBook=(props)=>{

    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [phone,setPhone]=useState('');
    const [date,setDate]=useState('');
    const [time,setTime]=useState('10');
    const [slotedData,setSlotedData]=useState([]);

    useEffect(()=>{
         axios.get('https://react-book-doctor-slot.firebaseio.com/bookedslot.json')
         .then(res=>{
             setSlotedData(Object.values(res.data));
         })
         .catch(err=>console.log(err))

    },[])

    const onSubmitHandler=(event)=>{
        event.preventDefault();

        let index=slotedData.findIndex(element=>{
            return element.date===date && element.time===time
        })

        const userData={
            name,age,phone,date,time
        }

        if(index!==-1){
            props.history.push('/error')
        }else{
            axios.post('https://react-book-doctor-slot.firebaseio.com/bookedslot.json',userData)
            .then(res=>{
                props.history.push('/category');
            })
            .catch(err=>console.log(err))
        }
    }

    return(
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-10 offset-sm-2">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">name</label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={name}
                        onChange={(event)=>setName(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">age</label>
                        <input 
                        type="text" 
                        className="form-control"  
                        value={age}
                        onChange={(event)=>setAge(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone-no">phone-no</label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={phone}
                        onChange={(event)=>setPhone(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label >slot date</label>
                        <input 
                        type="date" 
                        name="slot-date" 
                        min="2020-01-01"
                        max="2025-12-31" 
                        className="form-control" 
                        value={date}
                        onChange={(event)=>setDate(event.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label >Time</label>
                        <select
                         className="custom-select mb-4"
                         value={time}
                         onChange={(event)=>setTime(event.target.value)}
                        >
                            <option value='10'>10 am</option>
                            <option value="12">12 pm</option>
                            <option value="2">2 pm</option>
                            <option value="4">4 pm</option>
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">book-slot</button>
                </form>
            </div> 
          </div>
        </div>
    )
}

export default withRouter(SlotBook);
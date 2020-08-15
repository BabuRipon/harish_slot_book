import React ,{Component} from 'react';
import classes from './todo.module.css';

class TODO extends Component{
    state={
        todoList:[],
        dataName:''
    }

    onSubmiHandler=()=>{
        let newArray=[...this.state.todoList]
        newArray=newArray.concat({data:this.state.dataName,id:new Date().getTime()})
        this.setState({todoList:newArray,dataName:''})
    }

    onDeleteItem=(id)=>{
      let updatedArray=[...this.state.todoList]
      updatedArray=updatedArray.filter(item=>item.id!==id)
      this.setState({todoList:updatedArray});
    }

    render(){
        return(
           <React.Fragment>
               
               <div className={classes.TodoInput}>
                  <h3 >TODO-LIST</h3>
                   <input 
                   type="text" 
                   placeholder="value"
                   style={{display:'block',width:'60%',margin:'10px auto'}}
                   name='name'
                   onChange={
                    (event)=>this.setState({dataName:event.target.value})
                }
                value={this.state.dataName}
                   />
                   <button onClick={this.onSubmiHandler}>submit</button>
               </div>
               <div className={classes.TodoBody}>
                   <ul>
                        {this.state.todoList.map((item)=>(
                            <li key={item.id} onClick={()=>this.onDeleteItem(item.id)}> {item.data}</li>
                        ))}
                   </ul>
               </div>
           </React.Fragment>
        )
    }
}

export default TODO;
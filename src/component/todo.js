import React ,{Component} from 'react';
import classes from './todo.module.css';
import Modal from './modal/modal';

class TODO extends Component{
    state={
        todoList:[],
        dataName:'',
        deleted:false,
        deleteData:null,
        id:null,
    }

    onSubmiHandler=()=>{
        let newArray=[...this.state.todoList]
        newArray=newArray.concat({data:this.state.dataName,id:new Date().getTime()})
        this.setState({todoList:newArray,dataName:''})
    }

    onDeleteItem=(id)=>{
    
    let updatedArray=[...this.state.todoList]
    let deleteElement=updatedArray.filter(item=>item.id===id)
    this.setState({deleted:true,id:id,deleteData:deleteElement[0].data})

    }

    onOKHandler=()=>{
        this.setState(preState=>(
            {deleted:false}
            ))
         
          let updatedArray=[...this.state.todoList]
          updatedArray=updatedArray.filter(item=>item.id!==this.state.id)
           this.setState({todoList:updatedArray})  
    
    }

    onCancelHandler=()=>{
        this.setState({deleted:false})
    }


    render(){

        let modal=null;
        if(this.state.deleted){
          modal=<Modal element={this.state.deleteData} 
           clicked={this.onOKHandler} 
           isDeleted={this.state.deleted} 
           clickedCancel={this.onCancelHandler}
           />
        }
            
        return(
           <React.Fragment>
               
               <div className={classes.TodoInput}>
                   {modal}
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
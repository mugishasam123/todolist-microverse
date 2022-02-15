import React,{useState} from "react";
import {FaPlusCircle} from "react-icons/fa"


const InputTodo = (props) => {
  const [state,setState] = useState({
    
  })

  const onChange = (e) =>{
    setState({
      [e.target.name]: e.target.value,
    })
  }
const handleSubmit = (e) =>{
  e.preventDefault();
 
if(state.title.trim()){
  props.addTodoProps(state.title);
  setState({
    title:"",
  })
}
else{
  alert("Please write item")
}
}


  return (
    <form onSubmit={handleSubmit} className="form-container">
   <input type="text" placeholder="Add todo" name="title" onChange={onChange}  className="input-text" />
   <button className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
   
  );
};

export default InputTodo;

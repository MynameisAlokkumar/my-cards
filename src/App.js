
import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData]=useState({Firstname:"", Lastname:"", Email:""})
  
 function changeHandler(event){
   const { name, value, checked, type } = event.target;
   setFormData((prev) => ({...prev,[name]:value }))
}

  return (
    <div className="flex flex-col items-center mt-2">
     
      
      <form>
        <lable htmlFor="Firstname">First name</lable>
        <br></br>
        <input type="text"
          name="Firstname"
          placeholder='Eg.. John'
           id="Firstname"
          value={formData.Firstname}
          onChange={changeHandler}
          className='outline'
        />
              <br></br>
         <lable htmlFor="Lastname">Lastname</lable>
        <br></br>
        <input type="text"
          name="Lastname"
          placeholder='Eg..Singh'
           id="Firstname"
          value={formData.Lastname}
          onChange={changeHandler}
          className='outline'
        />
               <br></br>
         <lable htmlFor="Email">Enter email</lable>
        <br></br>
        <input type="text"
          name="Firstname"
          placeholder='John@gamail.com'
           id="Firstname"
          value={formData.Firstname}
          onChange={changeHandler}
          className='outline'
        />
   </form>
      
      
    </div>
  );
}

export default App;

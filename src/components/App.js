import React, {Component, useState,useEffect} from "react";
import '../styles/App.css';

const App = () => {
  
   const [getName,setName] = useState("");
   const [getEmail,setEmail] = useState("");
   const [getGender,setGender] = useState("male");
   const [getPhone,setPhone] = useState("");
   const [getPassword,setPassword] = useState("");
   const [getError,setError] = useState("");
   const [getSuccess,setSuccess] = useState("");
   
   
   const putNameHandler=(e)=>{
       setName(e.target.value);
   }
   const putEmailHandler=(e)=>{
       setEmail(e.target.value);
   }
   const putGenderHandler=(e)=>{
      setGender(e.target.value);
   }
   const putPhoneHandler=(e)=>{
      setPhone(e.target.value);
   }
   const putPasswordHandler=(e)=>{
       setPassword(e.target.value);
   }
   
   const submitHandler = (e)=>{
//        e.preventDefault();
       if(getName==="" && getEmail==="" && getPassword==="" && getGender==="" && getPhone===""){
          setError("All fields are mandatory");
       }
       else{
          if(getName===""){
             setError("Name Error");
          }
          else if(getEmail===""){
             setError("Email Error");
          } 
          else if(getPhone===""){
            setError("Phone Number Error");
          }
          else if(getPassword===""){
             setError("Password Error");
          }else{
               
            let alphaExp=/^([a-z]+[\s]*[0-9]+[\s]*)+$/i;
            if(!alphaExp.test(getName)){
               setError("Name is not alphanumeric");
            }else{
                 
                if(!getEmail.includes("@")){
                     setError("Email must contain @")
                }else{
                    if(getGender===""){
                       setError("Please identify as male, female or others")
                    }else{
                       if(isNaN(getPhone)){
                        setError("Phone Number must contain only numbers")
                       }else{
                          
                        if(getPassword.length<6){
                           setError("Password must contain atleast 6 letters")
                        }
                        else{
                           
                           let out = getEmail.split("@");
                           setError(out[0]);

                        }
                     
                       }
                    }
                }
                
            }
              

          }         
       } 
          
       
       
   }

  return (
    <div id="main">
       <form>
          {getError}
          <br></br>
          Name<input type="text" data-testid = 'name' onChange={putNameHandler}/>
          <br></br>
          Email address<input type="text" data-testid = 'email' onChange={putEmailHandler} />
          <br></br>
          Gender<select data-testid='gender' value="male"  onChange={putGenderHandler}>
             <option value="male">male</option>
             <option value="female">female</option>
             <option value="other">other</option>
             </select>
          <br></br>
          Phone Number <input type="text" data-testid = 'phoneNumber' onChange={putPhoneHandler}/>
          <br></br>
          Password <input data-testid = 'password' type="password" onChange={putPasswordHandler}/>
          <br></br>
          Submit button <button type='submit' data-testid = 'submit'  onClick={submitHandler} >Submit</button>
       </form>
    </div>
  )
}


export default App;

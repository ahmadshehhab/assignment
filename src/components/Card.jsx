import React, { useState } from "react";
/* email={e.email} first_name={e.first_name} last_name={e.last_name} gender={e.gender} ip_address={e.ip_address} */
const Card = () => {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState(0);
  const [Age, setAge] = useState(0);
  const [Employee, setEmployee] = useState(false);
  const [Salary, setSalary] = useState(0);
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleEmployeeChange = (e) => {
     setEmployee(!Employee)
 
  };
  const handleSalaryChange = (e) => {
    setSalary(e.target.value);
  };
  const handle = () => {
      if(Age <  18 || Age > 65){
        document.getElementsByClassName("onScreenMessage")[0].classList.remove("none")
        document.getElementsByClassName("onScreenMessage")[0].innerText = "Please Enter Your Name Correctly"
      }else if(Phone.toString().length < 10){
        document.getElementsByClassName("onScreenMessage")[0].classList.remove("none")
        document.getElementsByClassName("onScreenMessage")[0].innerText = "Phone Number Format Is Incorrect" 
      }else{
        console.log({
          Name,
          Age,
          Phone,
          Employee,
          Salary
        })
      }
   
    
    
  }
 
  return (
    <>

      <div className="container">
      
        <div className="loginTitle">Requesting aLoan</div>
        <hr/>
        <div className="form">
          <div className="formInput">
            <div className="inputName" >Name:</div>
            <input type="text" className="input" onChange={handleNameChange}/>
          </div>
          <div className="formInput">
            <div className="inputName">Phone Number:</div>
            <input type="text" className="input" onChange={handlePhoneChange} />
          </div>
          <div className="formInput">
            <div className="inputName">Age:</div>
            <input type="text" className="input" onChange={handleAgeChange} />
          </div>
          <div className="formInput"  >
            <div className="inputName">Are you an employee?</div>
            <input type="checkbox" className="input" onChange={handleEmployeeChange}/>
          </div>
          <div className="formInput">
            <div className="inputName">Salary:</div>
            <input type="text" className="input" placeholder="Less Than 500$" onChange={handleSalaryChange}/>
          </div>
          <br/>
          <button className="button" onClick={handle}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Card;

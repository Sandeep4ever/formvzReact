import React,{useState,useRef} from 'react'
import "../App.css";
const Form = () => {

const initialvalue = {
  mobile_no:"",
  student_name:"",
  DOB:"",
  mother_name:"",
  MContact_no:"",
  MEmail:"",
  grade:"",
  gender:"",
  father_name:"",
  fcontact_no:"",
  fEmail:"",
  address:"",
  }
  
  const [formValues, setFormValues] = useState(initialvalue)  
  const mobRef=useRef();
  const validmobRef =useRef();
  const inputRef =useRef();
  const StdRef =useRef();
  const stdinputRef=useRef();
  const validStdRef =useRef();
  const motherinputRef= useRef();
  const validmotherRef=useRef();
  const motherRef =useRef();
  const MEmailRef=useRef();
 const MEmailinputRef=useRef();
 const validMEmailRef =useRef();


  const onChangehandler =(e)=>{
     const {name,value } =e.target     
    setFormValues({...formValues,[name]:value})
  }
  
  const submitform= (e)=>{
    e.preventDefault()
   let mobregex=/^[7-9][0-9]{9}$/;
   let stdnameregex =/^[a-zA-Z ]{3,30}$/;
   let mothernameregex =/^[a-zA-Z ]{3,30}$/;

   let emailregex=/^([a-z 0-9\.-]+)@([a-z0-9]{2,8}).([a-z]{2,8}).([a-z]{2,8})?$/;
   // for mobile no validation logic
   if(formValues.mobile_no===''){
    mobRef.current.style.display='block';
    mobRef.current.style.color='red';
    console.log("required")
    return false;
   }
   else{
     if(mobregex.test(formValues.mobile_no)){

      inputRef.current.style.border='1px solid green';
       mobRef.current.style.display='none';
      validmobRef.current.style.display='none';
      //  console.log("valid mo no")
     }
     else{
      mobRef.current.style.display='none';
      validmobRef.current.style.display='block';
      validmobRef.current.style.color='red';
      console.log("not a valid mo no")

      return false;
     }
   }
   //for student name validation logic
   if(formValues.student_name===''){
    StdRef.current.style.display='block';
    StdRef.current.style.color='red';
    console.log("required")
    return false;
   }
   else{
     if(stdnameregex.test(formValues.student_name)){

      stdinputRef.current.style.border='1px solid green';
      StdRef.current.style.display='none';
      validStdRef.current.style.display='none';
       console.log("valid mo no")
     }
     else{
      StdRef.current.style.display='none';
      validStdRef.current.style.display='block';
      validStdRef.current.style.color='red';
      console.log("not a valid mo no")

      return false;
     }
   }

   // for mother name validation logic
   if(formValues.mother_name===''){
    motherRef.current.style.display='block';
    motherRef.current.style.color='red';
    console.log("required")
    return false;
   }
   else{
     if(mothernameregex.test(formValues.mother_name)){

      motherinputRef.current.style.border='1px solid green';
      motherRef.current.style.display='none';
      validmotherRef.current.style.display='none';
       console.log("valid mo no")
     }
     else{
      motherRef.current.style.display='none';
      validmotherRef.current.style.display='block';
      validmotherRef.current.style.color='red';
      console.log("not a valid mo no")

      return false;
     }
   }
// for Email logic
if(formValues.MEmail===''){
  MEmailRef.current.style.display='block';
  MEmailRef.current.style.color='red';
  console.log("required")
  return false;
 }
 else{
   if(emailregex.test(formValues.MEmail)){

    MEmailinputRef.current.style.border='1px solid green';
    MEmailRef.current.style.display='none';
    validMEmailRef.current.style.display='none';
     console.log("valid emai id ")
   }
   else{
    MEmailRef.current.style.display='none';
    validMEmailRef.current.style.display='block';
    validMEmailRef.current.style.color='red';
    console.log("not a valid emai id")

    return false;
   }
 }


  }

   

  return (
    <>
    <div className='container'>
     <div className="main_container">
      <header className='heading'>
         <p className='head_para'>Admission form</p>
      </header>
       <form action="#" className='form' onSubmit={submitform} >
       <div className='form_container'>

       <div className='firstform_container'>
         <label > Enter 10 digit no.</label>
           <input type="number" name='mobile_no' ref={inputRef}  value={formValues.mobile_no} placeholder="Enter your number" onChange={onChangehandler} />
           <label style={{display:'none'}} ref={mobRef}>please enter mobile number</label>
           <label style={{display:'none'}} ref={validmobRef}>please enter valid mobile number</label>

         
         <label > Student name</label>
         <input type="text" name='student_name' ref={stdinputRef} value={formValues.student_name} placeholder="Enter your name" onChange={onChangehandler} />
         <label style={{display:'none'}} ref={validStdRef}>Please Enter Valid Student Name</label>
         <label style={{display:'none'}} ref={StdRef}>please Enter student name</label>



         <label >  Date of birth </label>
           <input type="date" name='DOB' value={formValues.DOB} placeholder="DOB" onChange={onChangehandler} />

         <label > Mother name </label>
           <input type="text" name='mother_name' ref={motherinputRef} value={formValues.mother_name} placeholder="Mother name" onChange={onChangehandler}  />
           <label style={{display:'none'}} ref={validmotherRef}>Please Enter Valid Mother Name</label>
           <label style={{display:'none'}} ref={motherRef}>please Enter Mother name</label>

           <label > Mother Contact N0. </label>
           <input type="number" name='MContact_no' value={formValues.MContact_no} placeholder="Mother contact no."  onChange={onChangehandler}/>

           <label > Mother Email id. </label>
           <input type="email" name='MEmail' ref={MEmailinputRef} value={formValues.MEmail} placeholder="Email id." onChange={onChangehandler} />
           <label style={{display:'none'}} ref={validMEmailRef}>Please Enter Valid Email Id</label>
           <label style={{display:'none'}} ref={MEmailRef}>please Enter Email Id</label>
      </div>
      
       <div className='secform_container'>
          <label >Grade </label>
           <input type="text" name='grade' value={formValues.grade} placeholder="Grade" onChange={onChangehandler} />

           <label > Gender</label>
          <div className='genderinput'>
           <input type="radio" name="gender" value="male" onChange={onChangehandler} checked /> <label>Male</label>
           <input className='gensecondinput' type="radio" name="gender" value="female" onChange={onChangehandler} /> <label>Female</label>
           </div>
           
           <label > Father name</label>
           <input className="secinput" type="text" name='father_name' value={formValues.father_name} placeholder="Father name" onChange={onChangehandler}/>
         
           <label > Father contact no.</label>
           <input className="secinput" type="number" name='fcontact_no' value={formValues.fcontact_no} placeholder="Father contact no." onChange={onChangehandler}/>

           <label > Father Email Id</label>
           <input className="secinput" type="email" name='fEmail' value={formValues.fEmail} placeholder="Email id." onChange={onChangehandler}/>
        </div>
       </div>
          <div className='address'>
              <label > Address </label>
              <input type="text" name='address' value={formValues.address} placeholder="Address" />
          </div>
        <div className='btn'>
          <button> Proceed to pay Rs 200/- As Application Fee *</button>
          </div>
       </form>

      </div>

     </div>
      
    </>
  )
}

export default Form

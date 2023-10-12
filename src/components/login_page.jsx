import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useState } from 'react';
import Swal from 'sweetalert2'
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
function Loginpage() {
  const [login, setlogin] = useState('')
  const Loginchange = e => setlogin(e.target.value)
  // login form chat bot demo
  const responseMessage = (response) => {
    // console.log(response.credential);
    var stringDecode = jwt_decode(response.credential)
    console.log(stringDecode.email);
    axios({
      method: 'post',
      url: 'https://students.trungthanhweb.com/api/checkLoginhtml',
      data: {
        email: stringDecode.email
      },
      responseType: 'stream'

    }).then(function (response) {
      console.log(response.data);
      var check1 = JSON.parse(response.data);
      console.log(check1.check);
      var check2 = check1.check;
      if(check2!==false){
        console.log("email đăng ký phần mềm")
        localStorage.setItem("email",check2.email)
        Swal.fire({
          title: 'success',
          text: 'Bạn đã đăng nhập',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          window.location.href="http://localhost:3000/chatbot"
        })
      }else{
        console.log("email chưa đăng ký phần mềm");
        Swal.fire({
          title: 'warning',
          text: 'email chưa đăng ký phần mềm',
          icon: 'warning',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  
  const login12 = (email)=>{
    console.log(email)
    axios({
      method: 'post',
      url: 'https://students.trungthanhweb.com/api/checkLoginhtml',
      data: {
        email: email
      },
      responseType: 'stream'

    }).then(function (response) {
      console.log(response.data);
      var check1 = JSON.parse(response.data);
      console.log(check1.check);
      var check2 = check1.check;
      if(check2!==false){
        console.log("email đăng ký phần mềm")
        localStorage.setItem("email",check2.email)
        Swal.fire({
          title: 'success',
          text: 'Bạn đã đăng nhập',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          window.location.href="http://localhost:3000/chatbot"
        })
      }else{
        console.log("email chưa đăng ký phần mềm");
        Swal.fire({
          title: 'warning',
          text: 'email chưa đăng ký phần mềm',
          icon: 'warning',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }


  return (
    <>
      <div className="login-bot"> 

        <h2 className='mt-2' style={{textAlign:'center',color:'black '}}><img width="48" height="48" src="https://img.icons8.com/color/48/speech-bubble-with-dots.png" alt="speech-bubble-with-dots"/> Chat bot KNN</h2>
        <br />
        <br />
        <center>
        <h2 style={{fontWeight:'700'}} className='mb-4'>Sign in to Chat bot</h2>
        <Form.Control onChange={Loginchange} className='mb-3' style={{color:'white',width:"400px"}} id="filled-basic" placeholder="Email" />
        
        <GoogleLogin className='m-2' style={{textAlign:'center'}} onSuccess={responseMessage} onError={errorMessage} />
        </center>
        <center>
        <Button onClick={()=>login12(login)} className='mt-3' variant="contained">Login</Button>
        </center>
      </div>
    </>
  );
}

export default Loginpage;

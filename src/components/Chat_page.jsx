
import '../css/style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';
import axios from "axios";

function Chatbot() {
  console.log(window.screen.height);
  const [input, setinput] = useState('')
  const input2 = e => setinput(e.target.value)

  const [chat_message, setchatmessage] = useState([])
 
  let chat;
  const onclick_send_chat = () => {
    axios({
      method: 'post',
      url: 'https://students.trungthanhweb.com/api/sendchat',
      data: {
        id: 18,
        mess:input
      },
      responseType: 'stream'

    }).then(function (response) {
      setchatmessage([])
      console.log(response.data);
      const cates = JSON.parse(response.data)
      chat = cates.map((cate) =>
      <div>
        <div style={{ display: "flex" }} className="chat1">
            <img className='me-2 ms-2 mt-2' width="50" height="50" src="https://img.icons8.com/bubbles/50/user.png" alt="robot-1" />
            <div style={{ color:"white", backgroundColor: 'blue', height: "30px", borderRadius: "5px" }} className="message-bot mt-4"><p className='mb-2 me-2 ms-2'>{cate.question}</p></div>
          </div>
          <div style={{ display: "flex" }} className="chat2 mb-4">
          <img className='me-2 ms-2 mt-2' width="50" height="50" src="https://img.icons8.com/3d-fluency/94/robot-1.png" alt="robot-1" />
          <div style={{ backgroundColor: 'white', height: "30px", borderRadius: "5px" }} className="message-bot mt-4"><p className='mb-2 me-2 ms-2'>{cate.response}</p></div>
          </div>
      </div>
      );
      setchatmessage(chat_message => [...chat_message, chat]);
      setinput('')
    })
    console.log(chat);
  }
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(input);
      onclick_send_chat()
      setinput('')
    }
  }
 
 function load_message() {
  axios({
    method: 'get',
    url: 'https://students.trungthanhweb.com/api/loadchat?id=18'

  }).then(function (data) {
    console.log(data.data);
    var cates = data.data
    chat = cates.map((cate) =>
      <div>
        <div style={{ display: "flex" }} className="chat1">
            <img className='me-2 ms-2 mt-2' width="50" height="50" src="https://img.icons8.com/bubbles/50/user.png" alt="robot-1" />
            <div style={{ color:"white", backgroundColor: 'blue', height: "30px", borderRadius: "5px" }} className="message-bot mt-4"><p className='mb-2 me-2 ms-2'>{cate.question}</p></div>
          </div>
          <div style={{ display: "flex" }} className="chat2 mb-4">
          <img className='me-2 ms-2 mt-2' width="50" height="50" src="https://img.icons8.com/3d-fluency/94/robot-1.png" alt="robot-1" />
          <div style={{ backgroundColor: 'white', height: "30px", borderRadius: "5px" }} className="message-bot mt-4"><p className='mb-2 me-2 ms-2'>{cate.response}</p></div>
          </div>
        <div ref={endOfMessagesRef}></div>
      </div>
      );
      setchatmessage(chat_message => [...chat_message, chat]);
  }).catch(err => {
    console.log(err);
  });
 }
useEffect(() => {
  load_message()
}, []);
    useEffect(()=>{
    endOfMessagesRef.current?.scrollIntoView({ behavior: "instant" });
  },[load_message])
  return (
    <Row className='w-100'>
      <Col style={{ backgroundColor: '#252c48', height: '651px' }} sm={2}>
        <Row className='mt-2'>
          <Col sm={1}></Col>
          <Col sm={10}>
            {/* <Button style={{ width: "180px" }} variant="secondary">Thêm đoạn Chat</Button> */}
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Col>
      <Col style={{ height: '500px' }} sm={10}>
        <div style={{overflowX:"hidden",overflowY:"auto", backgroundColor: '#1c2039', height: '570px', borderWidth: "5px", borderColor: "black" }} className='w-100 mt-2'>
          {chat_message}
        </div>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2 mt-2 w-100" aria-label="First group">
            <Form.Control onKeyDown={_handleKeyDown} value={input} onChange={input2} className='me-2' type="email" placeholder="Vui lòng điền câu hỏi bạn muốn hỏi vào đây" />
            <Button onClick={onclick_send_chat} >Gửi</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Col>
    </Row>
  );
}

export default Chatbot;

import Chatbot  from "./components/Chat_page";
import Navbar23 from "./components/Narvbar";

function Pagechatbot() {
    return (
      <div style={{width:"100%"}} className="page_chatbot">
        <Navbar23></Navbar23>
         <Chatbot></Chatbot>
      </div>
    );
  }
  
  export default Pagechatbot;
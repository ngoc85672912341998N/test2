import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbar23() {
  return (
    <>
      <Navbar className="bg-body-tertiary" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://img.icons8.com/officel/16/chat-message--v1.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Chat bot
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbar23;
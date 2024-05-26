import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">ChitChat</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="https://chitchat-4xrw.onrender.com">Login/Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
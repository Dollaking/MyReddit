import { Container, Navbar, Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function NavBar() {
    const history = useHistory();

    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand onClick={() => {history.push('/')} }>
                <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            MyReddit
            </Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link onClick={() => {history.push('/ServerTutorial')} }>Server Tutorial</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>

        </Navbar>
        </>
    );

}
export default NavBar;
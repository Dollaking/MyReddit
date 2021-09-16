import { Container, Navbar, Nav } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function NavBar() {
    const history = useHistory();

    const SignedIn = () => {
        return (
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
                    <Nav.Link>MyReddit</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>

            </Navbar>
        )
    }

    const SignedOut = () => {

        return(
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
                        
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => {history.push('/login')}}>Login</Nav.Link>
                        <Nav.Link onClick={() => {history.push('/signup')}}>Sign Up</Nav.Link>
                    </Nav>
                </Container>

            </Navbar>
        )
    }

    return (
        <SignedOut/>
    );

}
export default NavBar;
import { Container, Navbar, Image, Nav, Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const NavbarWeb = ({addButtonHandle}) => {
    return (
        <Navbar bg="success" variant="success">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="./logoClassroom.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                    <span className="text-white pl-3"> Classroom</span>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Button onClick={() => addButtonHandle()}><FontAwesomeIcon icon={faPlusCircle} size="lg"></FontAwesomeIcon> Add course</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarWeb
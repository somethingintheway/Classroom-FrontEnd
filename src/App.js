import logo from './logo.svg';
import './App.css';
import Course from './components/course';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CardGroup, Container, Navbar, Image, Modal } from 'react-bootstrap';
import { Card, Row, Col} from "react-bootstrap";
import NavbarWeb from './components/navbar';
import { useState } from 'react';
import AddCoursModal from './components/addCourseModal';

const getCourses = () => {
  return [
    {id:1,
      courseName:"Distributed System",
      subject:"About the distribued system",
      teacherName:"Ngo Van An"},
    {id:2,
      courseName:"Distributed System",
      subject:"About the distribued system",
      teacherName:"Ngo Van An"},
    {id:3,
      courseName:"Distributed System",
      subject:"About the distribued system",
      teacherName:"Ngo Van An"},
    {id:4,
      courseName:"Distributed System",
      subject:"About the distribued system",
      teacherName:"Ngo Van An"},
    {id:5,
      courseName:"Distributed System",
      subject:"About the distribued system",
      teacherName:"Ngo Van An"},
    {id:6,
      courseName:"Distributed System",
      subject:"About the distribued system",
      teacherName:"Ngo Van An"},
  ];
}


function App() {
  const [courses, setCourses] = useState(getCourses);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log("handel show");
    setShow(true)
  };

  const addCourse = (id, courseName, subject, teacherName) => {
    const newCourse = {id:id,
      courseName:courseName,
      subject:subject,
      teacherName:teacherName}
    setCourses(oldCourses => [...oldCourses, newCourse])
  }


  return (
    <>
    <NavbarWeb addButtonHandle={handleShow}></NavbarWeb>
    <AddCoursModal
      addCourse={addCourse}
      show={show}
      handleClose={handleClose}
    ></AddCoursModal>
    <div className="App">
      <Container>
        <Row xs={1} md={3} className="g-6 my-4">
            {courses.map(Course)}
        </Row>
      </Container>
    </div>
    </>
  );
}

export default App;

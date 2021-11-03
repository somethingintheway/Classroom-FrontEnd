import { useState } from "react";
import { Form, Button } from "react-bootstrap";


const AddCourseForm = ({addCourse}) => {
    const [course, setCourse] = useState({
        id:7,
        courseName:"",
        subject:"",
        teacherName:""
    });

    const onInputChange = (e) => {
        setCourse(oldCourse => ({...oldCourse, [e.target.name]: e.target.value}))
    }

    const {id, courseName, subject, teacherName} = course;

    const handelSubmit = (e) => {
        e.preventDefault();
        addCourse(id, courseName, subject, teacherName);
    }

    return (
        <Form onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="courseName">
                <Form.Label>Class name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter course name"
                    value = {courseName}
                    onChange = {e => onInputChange(e)}
                    name="courseName"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter class subject"
                    onChange = {e => onInputChange(e)}
                    value = {subject}
                    name="subject"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="teacherName">
                <Form.Label>Teacher name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter class name"
                    onChange = {e => onInputChange(e)}
                    value = {teacherName}
                    name="teacherName"
                    required
                />
            </Form.Group>


            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default AddCourseForm;
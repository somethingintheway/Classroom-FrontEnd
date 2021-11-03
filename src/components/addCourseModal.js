import AddCourseForm from "./addCourseForm"
import { Modal, Button } from "react-bootstrap";

const AddCoursModal = ({show, handleClose, addCourse}) => {

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding A Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddCourseForm addCourse={addCourse}></AddCourseForm>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
    )
}

export default AddCoursModal;
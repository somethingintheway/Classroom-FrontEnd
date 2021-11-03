import { Card, Button, Row, Col} from "react-bootstrap";

const Course = ({id, courseName, subject, teacherName}) => {
    return (
        <Col>
            <Card border="primary rounded" className="border-3 my-3" key={id}>
                <Card.Header className="bg-gradient-info">
                    <Col>
                        <h5><a href="#" className="nounderline">{courseName}</a></h5>
                        <p className="font-italic">{teacherName}</p>
                    </Col>
                </Card.Header>
                <Card.Body>
                    <p>{subject}</p>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Course;
import { Modal, Button } from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import AddCropFormButton from "../buttons/AddCropFormButton";

class Example extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <AddCropFormButton onClick={this.handleShow} />
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                
                                </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        )
    }
}


import { Modal, Button } from "react-bootstrap";
import { Container, Row, Col } from "reactstrap";
import AddCropFormButton from "../buttons/AddCropFormButton";
import AddCropForm from "../AddCropForm/AddCropForm";
import React from "react"; 

class AddCropModal extends React.Component {
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
                                <Modal.Title>Add your crop information</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <AddCropForm /> 
                                </Modal.Body>
                        </Modal>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default AddCropModal;


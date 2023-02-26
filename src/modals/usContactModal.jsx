import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const UsContactModal = ({ modalB, setModalB }) => {
  return (
    <Modal
      show={modalB}
      onHide={() => setModalB(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModalB(false)}>
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UsContactModal;

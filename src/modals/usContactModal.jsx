import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const UsContactModal = ({ modalB, setModalB }) => {
  const [useContact, setUsContact] = React.useState([]);
  //Get All Data
  React.useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((res) => res.json())
      .then((data) => setUsContact(data));
  }, []);

  return (
    <Modal
      show={modalB}
      onHide={() => setModalB(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Us Contacts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {useContact?.results?.map(
          (data, index) =>
            data?.phone?.startsWith("+1") && (
              <div key={index}>
                <h6>
                  Phone Number: <span>{data?.phone}</span>
                </h6>
              </div>
            )
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModalB(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UsContactModal;

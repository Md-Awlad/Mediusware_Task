import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AllContactModal = ({ modalA, setModalA }) => {
  const [show, setShow] = React.useState("all");
  const [allCountries, setAllCountries] = React.useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  React.useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((res) => res.json())
      .then((data) => setAllCountries(data));
  }, []);
  console.log(allCountries?.results?.map((data) => data));
  return (
    <Modal
      show={modalA}
      onHide={() => setModalA(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>All Contacts</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <button
              className={`nav-link ${show === "all" && "active"}`}
              type="button"
              onClick={() => handleClick("all")}
            >
              Modal A
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${show === "active" && "active"}`}
              type="button"
              onClick={() => handleClick("active")}
            >
              Modal B
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${show === "completed" && "active"}`}
              type="button"
              onClick={() => handleClick("completed")}
            >
              Modal C
            </button>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModalA(false)}>
          Close
        </Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AllContactModal;

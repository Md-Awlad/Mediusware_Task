import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AllContactModal = ({ modalA, setModalA }) => {
  const [show, setShow] = React.useState("allContact");
  const [allCountries, setAllCountries] = React.useState([]);

  const handleClick = (val) => {
    setShow(val);
  };

  //Get All Data
  React.useEffect(() => {
    fetch("https://contact.mediusware.com/api/contacts/")
      .then((res) => res.json())
      .then((data) => setAllCountries(data));
  }, []);

  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNumbers = allCountries?.results?.filter((number) => {
    const phone = number.phone.toLowerCase();
    const term = searchTerm.toLowerCase();
    return phone.includes(term);
  });

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
        <form className="d-flex gap-3 pb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Search Number"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </form>

        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item">
            <button
              className={`nav-link ${show === "allContact" && "active"} `}
              type="button"
              onClick={() => handleClick("allContact")}
            >
              All Contact
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${show === "usContact" && "active"}`}
              type="button"
              onClick={() => handleClick("usContact")}
              // style={{ backgroundColor: "#ff7f50" }}
            >
              Us Contact
            </button>
          </li>
        </ul>
        {allCountries.results === undefined
          ? "Loading..."
          : (show === "allContact" &&
              filteredNumbers?.map((data) => (
                <div key={data?.id}>
                  <h6>
                    Phone Number: <span>{data?.phone}</span>
                  </h6>
                </div>
              ))) ||
            (show === "usContact" &&
              filteredNumbers?.map(
                (data, index) =>
                  data?.phone?.startsWith("+1") && (
                    <div key={index}>
                      <h6>
                        Phone Number: <span>{data?.phone}</span>
                      </h6>
                    </div>
                  )
              ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModalA(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AllContactModal;

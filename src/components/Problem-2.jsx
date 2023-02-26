import React from "react";
import AllContactModal from "../modals/allContactModal";
import UsContactModal from "../modals/usContactModal";

const Problem2 = () => {
  const [modalA, setModalA] = React.useState(false);
  const [modalB, setModalB] = React.useState(false);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={() => setModalA(true)}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={() => setModalB(true)}
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>
      {modalA && <AllContactModal modalA={modalA} setModalA={setModalA} />}
      {modalB && <UsContactModal modalB={modalB} setModalB={setModalB} />}
    </>
  );
};

export default Problem2;

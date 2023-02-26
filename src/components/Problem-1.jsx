import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [items, setItems] = useState([]);

  const { handleSubmit, register, reset } = useForm();

  const handleClick = (val) => {
    setShow(val);
  };
  const onSubmit = (data) => {
    setItems([...items, data]);
    localStorage.setItem("items", JSON.stringify([...items, data]));
    reset();
  };

  const allData = JSON.parse(localStorage.getItem("items"));

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                {...register("name")}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                {...register("status")}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          {/* <-- all ---> */}
          {(show === "all" && (
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {allData?.map((data, index) => (
                  <tr key={index}>
                    <td className="font-medium text-base  p-2">{data?.name}</td>
                    <td className="font-medium text-base  p-2">
                      {data?.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )) ||
            (show === "active" && (
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allData?.map(
                    (data, index) =>
                      data?.status === "active" && (
                        <tr key={index}>
                          <td className="font-medium text-base  p-2">
                            {data?.name}
                          </td>
                          <td className="font-medium text-base  p-2">
                            {data?.status}
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            )) ||
            (show === "completed" && (
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {allData?.map(
                    (data, index) =>
                      data?.status === "complete" && (
                        <tr key={index}>
                          <td className="font-medium text-base  p-2">
                            {data?.name}
                          </td>
                          <td className="font-medium text-base  p-2">
                            {data?.status}
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Problem1;

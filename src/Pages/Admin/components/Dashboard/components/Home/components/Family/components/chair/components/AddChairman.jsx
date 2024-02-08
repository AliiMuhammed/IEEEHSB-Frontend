import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import http from "../../../../../../../../../../../Helper/http";
import MainError from "../../../../../../../../../../../Shared/components/MainError";
import MainSpinner from "../../../../../../../../../../../Shared/components/MainSpinner";

const AddChairman = ({
  isOpen,
  onClose,
  refreshTable,
  setSuccessMsg,
  setNotFoundMsg,
}) => {
  const [chairmanData, setChairmanData] = useState({
    name: "",
    email: "",
    role: "Chairman",
    committee: "",
    loading: false,
  });
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const handleModalClose = () => {
    setValidationErrors({});
    setError("");
    onClose();
  };

  const handleAdd = () => {
    const errors = {};

    // Validate all fields
    if (!chairmanData.name) {
      errors.name = "Name is required";
    }
    if (!chairmanData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(chairmanData.email)) {
      errors.email = "Invalid email address";
    }
    if (!chairmanData.committee) {
      errors.committee = "Committee is required";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});
    setChairmanData({ ...chairmanData, loading: true });

    const data = {
      name: chairmanData.name,
      role: chairmanData.role,
      email: chairmanData.email,
      committee: chairmanData.committee,
    };

    // Send data to the API
    http
      .POST("/team/createTeamMember", data) // Update the API endpoint accordingly
      .then((res) => {
        setChairmanData({ ...chairmanData, loading: false });
        setSuccessMsg("Chairman added successfully.");
        setNotFoundMsg("");
        setError("");
        refreshTable();
        handleModalClose();
      })
      .catch((err) => {
        setChairmanData({ ...chairmanData, loading: false });
        setSuccessMsg("");
        setError("An error occurred while adding the chairman.");
      });
  };
  const isValidEmail = (email) => {
    // Basic email validation
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <Modal
      className="main-modal"
      show={isOpen}
      onHide={handleModalClose}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Chairman</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error.length !== 0 && <MainError msg={error} />}
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={chairmanData.name}
              onChange={(e) =>
                setChairmanData({ ...chairmanData, name: e.target.value })
              }
            />
            {validationErrors.name && (
              <div className="text-danger">{validationErrors.name}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={chairmanData.email}
              onChange={(e) =>
                setChairmanData({ ...chairmanData, email: e.target.value })
              }
            />
            {validationErrors.email && (
              <div className="text-danger">{validationErrors.email}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="committee" className="form-label">
              Committee
            </label>
            <input
              type="text"
              className="form-control"
              id="committee"
              placeholder="Enter committee"
              value={chairmanData.committee}
              onChange={(e) =>
                setChairmanData({ ...chairmanData, committee: e.target.value })
              }
            />
            {validationErrors.committee && (
              <div className="text-danger">{validationErrors.committee}</div>
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="action-btns">
          <button className="main-btn delete-btn" onClick={handleModalClose}>
            Close
          </button>
          <button
            className="main-btn"
            disabled={chairmanData.loading}
            onClick={handleAdd}
          >
            {!chairmanData.loading ? (
              "Save Changes"
            ) : (
              <MainSpinner className={"btn-spinner"} />
            )}
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

AddChairman.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  refreshTable: PropTypes.func.isRequired,
  setSuccessMsg: PropTypes.func.isRequired,
  setNotFoundMsg: PropTypes.func.isRequired,
};

export default AddChairman;

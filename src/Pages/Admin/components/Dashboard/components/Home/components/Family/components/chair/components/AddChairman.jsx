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
    phone: "",
    role: "Chairman",
    committee: "",
    github: "",
    linkedin: "",
    faculty: "",
    image: null,
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
    if (!chairmanData.phone) {
      errors.phone = "Phone is required";
    } else if (!isValidPhoneNumber(chairmanData.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!chairmanData.committee) {
      errors.committee = "Committee is required";
    }
    if (!chairmanData.faculty) {
      errors.faculty = "Faculty is required";
    }
    if (!chairmanData.image) {
      errors.image = "Image is required";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});
    setChairmanData({ ...chairmanData, loading: true });

    const formData = new FormData();
    formData.append("name", chairmanData.name);
    formData.append("email", chairmanData.email);
    formData.append("phone", chairmanData.phone);
    formData.append("role", chairmanData.role);
    formData.append("committee", chairmanData.committee);
    formData.append("faculty", chairmanData.faculty);
    formData.append("image", chairmanData.image);

    // Send data to the API
    http
      .POST("/team/createTeamMember", formData) // Update the API endpoint accordingly
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

  const isValidPhoneNumber = (phone) => {
    // Basic phone number validation
    const re = /^\d{11}$/; // Assuming a 10-digit phone number
    return re.test(String(phone));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setChairmanData({ ...chairmanData, image: file });
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
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Enter phone"
              value={chairmanData.phone}
              onChange={(e) =>
                setChairmanData({ ...chairmanData, phone: e.target.value })
              }
            />
            {validationErrors.phone && (
              <div className="text-danger">{validationErrors.phone}</div>
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
          <div className="mb-3">
            <label htmlFor="faculty" className="form-label">
              Faculty
            </label>
            <input
              type="text"
              className="form-control"
              id="faculty"
              placeholder="Enter faculty"
              value={chairmanData.faculty}
              onChange={(e) =>
                setChairmanData({ ...chairmanData, faculty: e.target.value })
              }
            />
            {validationErrors.faculty && (
              <div className="text-danger">{validationErrors.faculty}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="github" className="form-label">
              GitHub
            </label>
            <input
              type="text"
              className="form-control"
              id="github"
              placeholder="Enter GitHub"
              value={chairmanData.github}
              onChange={(e) =>
                setChairmanData({ ...chairmanData, github: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="linkedin" className="form-label">
              LinkedIn
            </label>
            <input
              type="text"
              className="form-control"
              id="linkedin"
              placeholder="Enter LinkedIn"
              value={chairmanData.linkedin}
              onChange={(e) =>
                setChairmanData({ ...chairmanData, linkedin: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              placeholder="Upload image"
              accept=".jpg, .jpeg, .png"
              onChange={handleImageChange}
            />
            {validationErrors.image && (
              <div className="text-danger">{validationErrors.image}</div>
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div className="action-btns">
          <button className="main-btn delete-btn" onClick={handleModalClose}>
            Close
          </button>
          <button className="main-btn" onClick={handleAdd}>
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

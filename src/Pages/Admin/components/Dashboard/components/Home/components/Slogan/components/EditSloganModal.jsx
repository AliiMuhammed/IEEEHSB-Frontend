import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import MainError from "../../../../../../../../../Shared/components/MainError";
import MainSpinner from "../../../../../../../../../Shared/components/MainSpinner";
import http from "../../../../../../../../../Helper/http";

const EditSloganModal = ({
  isOpen,
  onClose,
  selectedSlogan,
  refreshTable,
  setSuccessMsg,
}) => {
  const [sloganData, setSloganData] = useState({
    body: "",
    season: "",
    loading: false,
  });
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (selectedSlogan) {
      setSloganData({
        body: selectedSlogan.body || "",
        season: selectedSlogan.season || "",
        loading: false,
      });
    }
  }, [selectedSlogan]);

  const handleModalClose = () => {
    setValidationErrors({});
    setError("");
    onClose();
  };

  const handleEdit = () => {
    const errors = {};

    if (!sloganData.body) {
      errors.body = "Slogan is required";
    }

    if (!sloganData.season) {
      errors.season = "Season is required";
    } else if (!/^\d{4}\/\d{4}$/.test(sloganData.season)) {
      errors.season =
        "Season must be in the format YYYY/YYYY (e.g., 2023/2024)";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});

    setSloganData({ ...sloganData, loading: true });

    const data = {
      body: sloganData.body,
      season: sloganData.season,
    };
    // You need to replace 'selectedSlogan.id' with the actual ID of the slogan to be edited.
    http
      .PATCH(`/slogan/${selectedSlogan._id}`, data)
      .then((res) => {
        setSloganData({
          ...sloganData,
          loading: false,
        });
        setError("");
        setSuccessMsg("Slogan Updated successfully.");
        refreshTable();
        handleModalClose();
      })
      .catch((err) => {
        console.log(err);
        setSloganData({
          ...sloganData,
          loading: false,
        });
        setError("An error occurred while editing the slogan.");
      });
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
        <Modal.Title>Edit Slogan</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error.length !== 0 && <MainError msg={error} />}
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Slogan</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              placeholder="e.g., IEEE HSB"
              value={sloganData.body}
              onChange={(e) =>
                setSloganData({ ...sloganData, body: e.target.value })
              }
            />
            {validationErrors.body && (
              <div className="text-danger">{validationErrors.body}</div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Season</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., 2023/2024"
              value={sloganData.season}
              onChange={(e) =>
                setSloganData({ ...sloganData, season: e.target.value })
              }
            />
            {validationErrors.season && (
              <div className="text-danger">{validationErrors.season}</div>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div className="action-btns">
          <button className="main-btn delete-btn" onClick={handleModalClose}>
            Close
          </button>
          <button
            className="main-btn"
            onClick={() => {
              handleEdit();
            }}
          >
            {!sloganData.loading ? (
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

// Prop types validation
EditSloganModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedSlogan: PropTypes.object,
  refreshTable: PropTypes.func.isRequired,
  setSuccessMsg: PropTypes.func.isRequired,
};

export default EditSloganModal;

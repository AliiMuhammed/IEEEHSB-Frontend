import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import Modal from "react-bootstrap/Modal";
import MainSpinner from "../../../../../../../../../Shared/components/MainSpinner";
import MainError from "../../../../../../../../../Shared/components/MainError";
import http from "../../../../../../../../../Helper/http";

const AddVideoModal = ({
  isOpen,
  onClose,
  refreshTable,
  setSuccessMsg,
  setNotFoundMsg,
}) => {
  const [videoData, setVideoData] = useState({
    season: "",
    video: "",
    tag: "",
    loading: false,
  });
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({}); // State for validation errors

  const handleModalClose = () => {
    setValidationErrors({});
    setError("");
    onClose();
  };

  const handleAdd = () => {
    const errors = {}; // Object to store validation errors

    // Validate season format
    if (!videoData.season) {
      errors.season = "Season is required";
    } else if (!/^\d{4}\/\d{4}$/.test(videoData.season)) {
      errors.season =
        "Season must be in the format YYYY/YYYY (e.g., 2023/2024)";
    }

    // Validate tag
    if (!videoData.tag) {
      errors.tag = "Tag is required";
    }

    // Validate video
    if (!videoData.video) {
      errors.video = "Video is required";
    } else if (
      !videoData.video.startsWith("https://") &&
      !videoData.video.startsWith("http://")
    ) {
      errors.video =
        "Please enter a valid video link starting with 'https://' or 'http://'";
    }

    // If there are validation errors, update the state and prevent the API call
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Clear any previous validation errors
    setValidationErrors({});

    // Continue with the API call
    setVideoData({ ...videoData, loading: true });

    const data = {
      body: videoData.video,
      season: videoData.season,
      tag: videoData.tag.toUpperCase(),
    };
    http
      .POST("/videos", data)
      .then((res) => {
        setVideoData({
          ...videoData,
          loading: false,
        });
        setSuccessMsg("Video added successfully.");
        setNotFoundMsg("");
        setError("");
        refreshTable();
        handleModalClose();
      })
      .catch((err) => {
        setVideoData({
          ...videoData,
          loading: false,
        });
        setSuccessMsg("");
        setError("An error occurred while adding the video.");
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
        <Modal.Title>Add Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error.length !== 0 && <MainError msg={error} />}
        <form>
          <div className="mb-3">
            <label htmlFor="video" className="form-label">
              Video Link
            </label>
            <input
              type="text"
              className="form-control"
              id="video"
              placeholder="https://www.youtube.com...."
              value={videoData.video}
              onChange={(e) =>
                setVideoData({ ...videoData, video: e.target.value })
              }
            />
            {validationErrors.video && (
              <div className="text-danger">{validationErrors.video}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="season" className="form-label">
              Season
            </label>
            <input
              type="text"
              className="form-control"
              id="season"
              placeholder="2023/2024"
              value={videoData.season}
              onChange={(e) =>
                setVideoData({ ...videoData, season: e.target.value })
              }
            />
            {validationErrors.season && (
              <div className="text-danger">{validationErrors.season}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Video Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              placeholder="where do you want to show the vidoe? like Home page"
              value={videoData.tag}
              onChange={(e) =>
                setVideoData({ ...videoData, tag: e.target.value })
              }
            />
            {validationErrors.tag && (
              <div className="text-danger">{validationErrors.tag}</div>
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
            onClick={() => {
              handleAdd();
            }}
          >
            {!videoData.loading ? (
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

AddVideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  refreshTable: PropTypes.func.isRequired,
  setSuccessMsg: PropTypes.func.isRequired,
  setNotFoundMsg: PropTypes.func.isRequired,
};

export default AddVideoModal;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import MainError from "../../../../../../../../../Shared/components/MainError";
import MainSpinner from "../../../../../../../../../Shared/components/MainSpinner";
import http from "../../../../../../../../../Helper/http";
import ReactPlayer from "react-player";
const EditVideoModal = ({
  isOpen,
  onClose,
  selectedVideo,
  refreshTable,
  setSuccessMsg,
}) => {
  const [videoData, setVideoData] = useState({
    season: "",
    video: "",
    tag: "",
    loading: false,
  });
  const [error, setError] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    if (selectedVideo) {
      setVideoData({
        video: selectedVideo.body || "",
        season: selectedVideo.season || "",
        tag: selectedVideo.tag || "",
        loading: false,
      });
    }
  }, [selectedVideo]);

  const handleModalClose = () => {
    setValidationErrors({});
    setError("");
    onClose();
  };

  const handleEdit = () => {
    const errors = {};

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

    // Validate season format
    if (!videoData.season) {
      errors.season = "Season is required";
    } else if (!/^\d{4}\/\d{4}$/.test(videoData.season)) {
      errors.season =
        "Season must be in the format YYYY/YYYY (e.g., 2023/2024)";
    }

    if (!videoData.tag) {
      errors.tag = "Video tag is required";
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    setValidationErrors({});

    setVideoData({ ...videoData, loading: true });

    const data = {
      body: videoData.video,
      season: videoData.season,
      tag: videoData.tag.toUpperCase(),
    };
    // You need to replace 'selectedVideo.id' with the actual ID of the video to be edited.
    console.log(data);
    http
      .PATCH(
        `https://ieee-backend-06597876c603.herokuapp.com/videos/${selectedVideo._id}`,
        data
      )
      .then((res) => {
        setVideoData({
          ...videoData,
          loading: false,
        });
        setError("");
        setSuccessMsg("Video Updated successfully.");
        refreshTable();
        handleModalClose();
      })
      .catch((err) => {
        console.log(err);
        setVideoData({
          ...videoData,
          loading: false,
        });
        setError("An error occurred while editing the video.");
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
        <Modal.Title>Edit Video</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error.length !== 0 && <MainError msg={error} />}
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Video Link</Form.Label>
            <Form.Control
              type="text"
              autoFocus
              placeholder="https://www.youtube.com/"
              value={videoData.video}
              onChange={(e) =>
                setVideoData({ ...videoData, video: e.target.value })
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
              placeholder="2023/2024"
              value={videoData.season}
              onChange={(e) =>
                setVideoData({ ...videoData, season: e.target.value })
              }
            />
            {validationErrors.season && (
              <div className="text-danger">{validationErrors.season}</div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Video Tag</Form.Label>
            <Form.Control
              type="text"
              placeholder="like Home or About us"
              value={videoData.tag}
              onChange={(e) =>
                setVideoData({ ...videoData, tag: e.target.value })
              }
            />
            {validationErrors.tag && (
              <div className="text-danger">{validationErrors.tag}</div>
            )}
          </Form.Group>
        </Form>
        <div className="form-video">
          <ReactPlayer url={selectedVideo ? selectedVideo.body : ""} />
        </div>
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

EditVideoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedVideo: PropTypes.object,
  refreshTable: PropTypes.func.isRequired,
  setSuccessMsg: PropTypes.func.isRequired,
};

export default EditVideoModal;

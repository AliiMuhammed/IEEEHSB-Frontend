import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import "../../../../../../../../../Shared/style/main-table.css";
import AddVideoModal from "./AddVideoModal";
import EditVideoModal from "./EditVideoModal";
import MainError from "../../../../../../../../../Shared/components/MainError";
import http from "../../../../../../../../../Helper/http";
import MainSpinner from "../../../../../../../../../Shared/components/MainSpinner";
import { Link } from "react-router-dom";

const MainVideosTable = ({
  headers,
  data,
  className,
  refresh,
  setSuccessMsg,
  setErrorMsg,
  setNotFoundMsg,
  notFoundMsg,
}) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState({ loading: false, id: "" });

  const handleAddVideo = () => {
    setIsAddModalOpen(true);
  };

  const handleEditVideo = (video) => {
    setSelectedVideo(video);
    setIsEditModalOpen(true);
  };

  const handelDelete = (id) => {
    setLoading({ ...loading, loading: true, id: id });
    http
      .DELETE(`https://ieee-backend-06597876c603.herokuapp.com/videos/${id}`)
      .then((res) => {
        setErrorMsg("");
        setSuccessMsg("Video deleted successfully.");
        setLoading({ ...loading, loading: false, id: id });

        data.length === 0
          ? setNotFoundMsg(
              "There are no videos, you can add one from the add button."
            )
          : setNotFoundMsg("");
        refresh();
      })
      .catch((err) => {
        refresh();
        setSuccessMsg("");
        setErrorMsg("Couldn't delete video.");
        setLoading({ ...loading, loading: false, id: id });
      });
  };
  return (
    <>
      <div className={`main-table ${className}`}>
        <div className="table-header">
          <h1>Videos</h1>
          <button className="main-btn add-btn" onClick={handleAddVideo}>
            Add videos
          </button>
        </div>
        
        {notFoundMsg.length !== 0 ? (
          <MainError msg={notFoundMsg} className={"successMsg"} />
        ) : (
          <table>
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((el, index) => {
                return (
                  <tr key={el._id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link
                        to={el.body}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch Video
                      </Link>
                    </td>
                    <td>{el.season}</td>
                    <td>{el.tag}</td>
                    <td>
                      <div className="action-btns">
                        <button
                          className="main-btn delete-btn"
                          onClick={() => {
                            handelDelete(el._id);
                          }}
                        >
                          {loading.loading && el._id === loading.id && (
                            <MainSpinner />
                          )}
                          {el._id !== loading.id && "Delete"}
                        </button>
                        <button
                          className="main-btn edit-btn"
                          onClick={() => handleEditVideo(el)}
                        >
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      <AddVideoModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        refreshTable={refresh}
        setSuccessMsg={setSuccessMsg}
        setNotFoundMsg={setNotFoundMsg}
      />

      <EditVideoModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        selectedVideo={selectedVideo}
        refreshTable={refresh}
        setSuccessMsg={setSuccessMsg}
      />
    </>
  );
};

MainVideosTable.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
  refresh: PropTypes.func.isRequired,
  setSuccessMsg: PropTypes.func.isRequired,
  setErrorMsg: PropTypes.func.isRequired,
  setNotFoundMsg: PropTypes.func.isRequired,
  notFoundMsg: PropTypes.string,
};

export default MainVideosTable;

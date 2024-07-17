import React, { useState } from "react";
import MainError from "../../../../../../../../../../../Shared/components/MainError";
import MainSpinner from "../../../../../../../../../../../Shared/components/MainSpinner";
import http from "../../../../../../../../../../../Helper/http";
import AddChairman from "./AddChairman";
import EditChairman from "./EditChairman";
import PropTypes from "prop-types"; // Import PropTypes for props validation
import { Link } from "react-router-dom";

const MainChairmenTable = ({
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
  const [selectedSlogan, setSelectedSlogan] = useState(null);
  const [loading, setLoading] = useState({ loading: false, id: "" });

  const handleAddSlogan = () => {
    setIsAddModalOpen(true);
  };

  const handleEditSlogan = (chairman) => {
    setSelectedSlogan(chairman);
    setIsEditModalOpen(true);
  };

  const handelDelete = (id) => {
    setLoading({ ...loading, loading: true, id: id });
    http
      .DELETE(`/chairman/${id}`)
      .then((res) => {
        setErrorMsg("");
        setSuccessMsg("Slogan deleted successfully.");
        setLoading({ ...loading, loading: false, id: id });
        data.length === 0
          ? setNotFoundMsg(
              "There is no chairmen, you can add one form add button."
            )
          : setNotFoundMsg("");
        refresh();
      })
      .catch((err) => {
        refresh();
        setSuccessMsg("");
        setErrorMsg("Can't delete chairman.");
        setLoading({ ...loading, loading: false, id: id });
      });
  };

  return (
    <>
      <div className={`main-table ${className}`}>
        <div className="table-header">
          <h1>EXcom</h1>
          <button className="main-btn add-btn" onClick={handleAddSlogan}>
            Add chairmen
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
                      <div
                        className="table-img"
                        style={{ backgroundImage: `url(${el.image})` }}
                      ></div>
                    </td>
                    <td>{el.name}</td>
                    <td>{el.committee}</td>
                    <td>
                      {el.github !== "N/A" ? (
                        <Link to={el.github}>GitHub</Link>
                      ) : (
                        el.github
                      )}
                    </td>
                    <td>
                    {el.github !== "N/A" ? (
                        <Link to={el.linkedin}>LinkedIn</Link>
                      ) : (
                        el.linkedin
                      )}
                      
                    </td>
                    <td>{el.faculty}</td>
                    <td>{el.email}</td>
                    <td>{el.phone}</td>
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
                          onClick={() => handleEditSlogan(el)}
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

      <AddChairman
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        refreshTable={refresh}
        setSuccessMsg={setSuccessMsg}
        setNotFoundMsg={setNotFoundMsg}
      />
      <EditChairman
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        selectedSlogan={selectedSlogan}
        refreshTable={refresh}
        setSuccessMsg={setSuccessMsg}
      />
    </>
  );
};

MainChairmenTable.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
  refresh: PropTypes.func.isRequired,
  setSuccessMsg: PropTypes.func.isRequired,
  setErrorMsg: PropTypes.func.isRequired,
  setNotFoundMsg: PropTypes.func.isRequired,
  notFoundMsg: PropTypes.string,
};
export default MainChairmenTable;

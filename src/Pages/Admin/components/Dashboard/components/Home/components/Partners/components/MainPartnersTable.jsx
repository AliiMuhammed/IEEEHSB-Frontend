import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../../../../../../../../Shared/style/main-table.css";
import AddPartnerModal from "./AddPartnerModal";
import EditPartnerModal from "./EditPartnerModal";
import MainError from "../../../../../../../../../Shared/components/MainError";
import { Link } from "react-router-dom";
import http from "../../../../../../../../../Helper/http";
import MainSpinner from "../../../../../../../../../Shared/components/MainSpinner";

const MainPartnersTable = ({
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
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [loading, setLoading] = useState({ loading: false, id: "" });

  const handleAddPartner = () => {
    setIsAddModalOpen(true);
  };

  const handleEditPartner = (partner) => {
    setSelectedPartner(partner);
    setIsEditModalOpen(true);
  };

  const handelDelete = (id) => {
    setLoading({ ...loading, loading: true, id: id });

    http
      .DELETE(`/partners/${id}`)
      .then((res) => {
        setLoading({ ...loading, loading: false, id: id });

        setErrorMsg("");
        setSuccessMsg("Partner deleted successfully.");
        data.length === 0
          ? setNotFoundMsg(
              "There are no partners, you can add one from the add button."
            )
          : setNotFoundMsg("");
        refresh();
      })
      .catch((err) => {
        setLoading({ ...loading, loading: false, id: id });

        refresh();
        setSuccessMsg("");
        setErrorMsg("Can't delete partner.");
      });
  };

  return (
    <>
      <div className={`main-table ${className}`}>
        <div className="table-header">
          <h1>Partners</h1>
          <button className="main-btn add-btn" onClick={handleAddPartner}>
            Add partners
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
                  <tr key={el.id}>
                    <td>{index + 1}</td>
                    <td>{el.name}</td>
                    <td>
                      <div
                        className="table-img"
                        style={{ backgroundImage: `url(${el.image})` }}
                      ></div>
                    </td>
                    <td>
                      <Link to={el.page_link}>Page Link</Link>
                    </td>
                    <td>
                      <div className="action-btns">
                        <button
                          className="main-btn delete-btn"
                          onClick={() => handelDelete(el._id)}
                          disabled={loading.loading}
                        >
                          {loading.loading && el._id === loading.id && (
                            <MainSpinner />
                          )}
                          {el._id !== loading.id && "Delete"}{" "}
                        </button>
                        <button
                          className="main-btn edit-btn"
                          onClick={() => handleEditPartner(el)}
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

      <AddPartnerModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        refreshTable={refresh}
        setSuccessMsg={setSuccessMsg}
        setNotFoundMsg={setNotFoundMsg}
      />

      <EditPartnerModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        selectedPartner={selectedPartner}
        refreshTable={refresh}
        setSuccessMsg={setSuccessMsg}
      />
    </>
  );
};

// Prop types validation
MainPartnersTable.propTypes = {
  headers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  className: PropTypes.string,
  refresh: PropTypes.func.isRequired,
  setSuccessMsg: PropTypes.func.isRequired,
  setErrorMsg: PropTypes.func.isRequired,
  setNotFoundMsg: PropTypes.func.isRequired,
  notFoundMsg: PropTypes.string,
};

export default MainPartnersTable;

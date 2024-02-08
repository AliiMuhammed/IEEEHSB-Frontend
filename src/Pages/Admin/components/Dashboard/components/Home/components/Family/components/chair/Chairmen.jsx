import React, { useState, useEffect } from "react";
import http from "../../../../../../../../../../Helper/http";
import MainError from "../../../../../../../../../../Shared/components/MainError";
import MainSpinner from "../../../../../../../../../../Shared/components/MainSpinner";
import MainSuccess from "../../../../../../../../../../Shared/components/MainSuccess";
import MainChairmenTable from "./components/MainChairmenTable";
const Chairmen = () => {
  const headers = [
    "Id",
    "Image",
    "Name",
    "Role",
    "GitHub",
    "Linkedin",
    "Faculty",
    "Email",
    "Phone",
    "Action",
  ];
  const refreshTable = () => {
    setChairman({ ...chairman, reload: chairman.reload + 1 });
  };
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [notFoundMsg, setNotFoundMsg] = useState("");
  const [chairman, setChairman] = useState({
    response: [],
    reload: 1,
    loading: false,
  });

  // get all chairman
  useEffect(() => {
    if (chairman.reload) {
      setChairman({ ...chairman, loading: true });

      http
        .GET("/team/getChairmans")
        .then((res) => {
          console.log(res);
          setChairman({
            ...chairman,
            loading: false,
            response: res.data,
          });
          setErrorMsg("");
          if (res.data.length === 0) {
            setNotFoundMsg(
              "There is no chairman, you can add one from add button."
            );
          } else {
            setNotFoundMsg("");
          }
        })
        .catch((err) => {
          setChairman({
            ...chairman,
            loading: false,
          });
          setSuccessMsg("");
        });
    }
  }, [chairman.reload]);
  return (
    <section className="chairmen-section">
      <div className="container">
        {/* error handling */}
        {successMsg.length !== 0 && errorMsg.length === 0 && (
          <MainSuccess msg={successMsg} className={"successMsg"} />
        )}
        {successMsg.length === 0 && errorMsg.length !== 0 && (
          <MainError msg={errorMsg} className={"successMsg"} />
        )}
        {chairman.loading && <MainSpinner className={"table-spinner"} />}
        {!chairman.loading && (
          <MainChairmenTable
            headers={headers}
            data={chairman.response}
            className={"chairman-table"}
            refresh={refreshTable}
            setSuccessMsg={setSuccessMsg}
            setErrorMsg={setErrorMsg}
            setNotFoundMsg={setNotFoundMsg}
            notFoundMsg={notFoundMsg}
          />
        )}
      </div>
    </section>
  );
};

export default Chairmen;

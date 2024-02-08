import React, { useState, useEffect } from "react";
import http from "./../../../../../../../../Helper/http";
import MainHeader from "../../../../../../../../Shared/components/MainHeader";
import MainSuccess from "./../../../../../../../../Shared/components/MainSuccess";
import MainError from "../../../../../../../../Shared/components/MainError";
import MainSpinner from "../../../../../../../../Shared/components/MainSpinner";
import MainVideosTable from "./components/MainVideosTable";

import "./style/video.css";

const Video = () => {
  const headers = ["Id", "Video Link", "Season", "Tag", "Action"];

  const refreshTable = () => {
    setVideos({ ...videos, reload: videos.reload + 1 });
  };
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [notFoundMsg, setNotFoundMsg] = useState("");
  const [videos, setVideos] = useState({
    response: [],
    reload: 1,
    loading: false,
  });

  // get all videos
  useEffect(() => {
    if (videos.reload) {
      setVideos({ ...videos, loading: true });

      http
        .GET("/videos")
        .then((res) => {
          console.log(res);
          setVideos({
            ...videos,
            loading: false,
            response: res.data,
          });
          if (res.data.length === 0) {
            setNotFoundMsg(
              "There is no videos, you can add one from add button."
            );
          } else {
            setNotFoundMsg("");
          }
          setErrorMsg("");
        })
        .catch((err) => {
          setVideos({
            ...videos,
            loading: false,
          });
          setSuccessMsg("");
        });
    }
  }, [videos.reload]);

  console.log(videos.response.length, "from");
  return (
    <section className="video-section">
      <MainHeader
        title={"Our Videos"}
        paragraph={"Here You can add, update, and delete Videos."}
      />

      <div className="container">
        {/* error handling */}
        {successMsg.length !== 0 && errorMsg.length === 0 && (
          <MainSuccess msg={successMsg} className={"successMsg"} />
        )}
        {successMsg.length === 0 && errorMsg.length !== 0 && (
          <MainError msg={errorMsg} className={"successMsg"} />
        )}
        {videos.loading && <MainSpinner className={"table-spinner"} />}
        {!videos.loading && (
          <MainVideosTable
            headers={headers}
            data={videos.response}
            className={"videos-table"}
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

export default Video;

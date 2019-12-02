import React, { Fragment, useState, useEffect } from "react";

import "../components/Toast.css";

const Toast = ({ msgHeader, msgBody, status, resetMsg }) => {

  const [openMensaje, setOpenMensaje] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (openMensaje) {
      setOpenMensaje(false);
      console.log("openMensaje 1:: ", openMensaje);
    } else {
      setOpenMensaje(true);
      console.log("openMensaje 2:: ", openMensaje);
    }
  }, []);

  const cerrarMensaje = () => {
    resetMsg(false);
    setOpenMensaje(false);
    setFade(false)
  };

  const openMsg = openMensaje ? "open" : "animated fadein";

  return (
    <Fragment>
        <div className={`toast toastGreen ${openMsg}`}>
        {/* <div className={`toast toastGreen ${fade ? "fade" : ""}`} onAnimationEnd={() => setFade(true)}> */}
          <div className="toast__icon"></div>
          <div className="toast__content">
            <p className="toast__type">
              {status === "" ? "Cabecera sin Mensaje" : msgHeader}
            </p>
            <p className="toast__message">
              {msgBody === "" ? "Sin Mensaje" : msgBody}
            </p>
          </div>
          <div className="toast__close" onClick={cerrarMensaje}>
            <b>X</b>
          </div>
        </div>
    </Fragment>
  );
};

export default Toast;

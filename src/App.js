import React, {useState, useEffect} from 'react';
import Toast from './components/Toast';

import './App.css';


function App() {

  const [msgHeader, setMsgHeader] = useState('');
  const [msgBody, setMsgBody] = useState('');
  const [status, setStatus] = useState('');

  const [activarMsg, setActivarMsg] = useState('');

  useEffect(() => {
    setMsgHeader('Título Cabecera');
    setMsgBody('Contenido');
    setStatus('success');
    setActivarMsg(false);
  }, []);

  const resetMsg = value => {
    console.log(value);
    setActivarMsg(value);
  };

  // const onMessage = () => {

  // }

  return (
    <div className="box">

      <button onClick={() => setActivarMsg(!activarMsg)}>Activar Mensaje</button>

      {activarMsg ? (
        <Toast
        msgHeader={msgHeader}
        msgBody={msgBody}
        status={status}
        resetMsg={resetMsg}
        />
      ) : null}
    </div>
  );
}

export default App;

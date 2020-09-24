import React from 'react';
import logo from './logo.svg';
import './App.css';
import Uploader from './Uploader/index';
// const imageToBase64 = require('image-to-base64');

function App() {
  
  const onConvertClick = (path: string) => {
    console.log('yzy');
    // imageToBase64(path)
    //   .then((response: string) => {
    //     console.log(JSON.stringify(response));
    //   })
    //   .catch((error: string) => {
    //     console.error(JSON.stringify(error));
    //   });
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React11
    //     </a>
    //     <div onClick={() => { console.log('111') }}>click11</div>
    //   </header>
    // </div>
    <div className="App">
      <Uploader />
    </div>
  );
}

export default App;

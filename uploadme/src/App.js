
import './App.css';
import React, { useRef } from 'react';
function App() {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const files = event.target.files[0];
    console.log(files);
    
  }
  return (
    <div className="file-upload">
      <div className="upload-container">
        <div className="upload-icon">
          <img src="upload.svg" alt="" />
        </div>
       
        <input
          ref={fileInputRef}
          type="file"
          className="file-input"
          onChange={handleFileUpload}
        ></input>

        <p>Drag and Drop Files</p>
        <p>Or</p>
        <button onClick={()=>fileInputRef.current.click()} className="browse-button">Browse</button>

        
      </div>
    </div>
  );
}

export default App;

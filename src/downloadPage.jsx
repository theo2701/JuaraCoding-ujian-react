import React from 'react';
import './download.css'
const DownloadPage = ({username,password}) => {
  return (
    <div>
      <h2 className='hehe'>Halo, {username}! Download Page passwordnya {password}</h2>
      <div>
        <h3>Files:</h3>
        <ul>
          <li>Download File 1</li>
          <li>Download File 2</li>
          <li>Download File 3</li>
          <li>Download File 4</li>
          <li>Download File 5</li>
        </ul>
        <button>Download File 1</button>
        <button>Download File 2</button>
        <button>Download File 3</button>
        <button>Download File 4</button>
        <button>Download File 5</button>
      </div>
    </div>
  );
};

export default DownloadPage;
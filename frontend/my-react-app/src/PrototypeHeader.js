// PrototypeHeader.js
import React, { useState } from 'react';
import './PrototypeHeader.css';
import image from './favicon.png';
import { useDarkMode } from './DarkModeContext';
import Popup from './Popup';
import { Link } from 'react-router-dom';

import Upload from './Upload';
import Delete from './Delete'
import Project from './Project'
import Transform from './Transform'
import Pipeline from './Pipeline'
import Files from './Files'
import Projects from './Projects'
import Model from './Model'
import ExportModal from './ExportModal'
import ProcessModal from './ProcessModal'
//<Project onFileUpload={onFileUpload}/>
// <Upload onFileUpload={onFileUpload}/>
// <Delete onFileUpload={onFileUpload} />

const PrototypeHeader = ({ handleOverlayChange, sheetTitle, handleOverlaidSelection, onFileUpload, dataStore}) => {
  const { isDarkMode } = useDarkMode();
  const [xlsxData, setXLSXData] = useState(null);
console.log(onFileUpload)

const [clear, setClear] = useState(null);

const handleClearTrue = ()=>{
  setClear(true)
}


const handleClearFalse = ()=>{
  setClear(false)
}
// <Transform />
// <Pipeline />
const [exportStatus, setExportStatus] = useState(null)
const setExportTrue = ()=>{
  setExportStatus(true)
}

const setExportFalse = ()=>{
  setExportStatus(false)
}


const handleExportTrue =()=>{
  setExportTrue()
}

// <div className='button-wrap2'>
// <ProcessModal />
// <Modal />
// </div>

// <div className='button-wrap'>
// <Model  handleOverlayChange={handleOverlayChange} handleClearFalse={handleClearFalse} clear={clear} sheetTitle={sheetTitle} handleOverlaidSelection={handleOverlaidSelection} dataStore={dataStore}/>
// <Popup onFileUpload={onFileUpload} />
// <Delete  handleClearTrue={handleClearTrue} dataStore={dataStore} />
// <Upload />
// </div>
  return (

    <div className={`prototype-header ${isDarkMode ? 'dark-mode' : ''}`}>
    <Link to="/" >
    <img className={`header-image ${isDarkMode ? 'dark-mode' : ''}`} src={image} alt="My Image" />
  </Link>
      <div className='button-wrap2'>
        <div className='container'>
         <Projects /></div>
        <div className='container'>
        <Files /></div>
        </div>



      <div className='button-wrap'>
      <div className='popup-container'>
      <div className='dropdown-button'>Records</div></div>
      <div className='popup-container'>
      <div className='dropdown-button'>Share</div></div>
      <div className='popup-container'>
      <div className='dropdown-button'>New</div></div>
      <div className='popup-container'>
      <div className='dropdown-button' onClick={()=> handleExportTrue()}>Export/Generate</div></div>

      </div>

      <div className='titlez'>Luciano - git:main | version 0.350</div>
      {exportStatus ? <ExportModal setExportFalse={setExportFalse} exportStatus={exportStatus}/> : <div></div>}

    </div>
  );
};

export default PrototypeHeader;

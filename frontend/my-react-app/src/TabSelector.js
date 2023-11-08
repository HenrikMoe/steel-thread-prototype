// PrototypeHeader.js
import React, { useState } from 'react';
import './PrototypeHeader.css';
import image from './favicon.png';
import { useDarkMode } from './DarkModeContext';
import Popup from './Popup';
import Upload from './Upload';
import Delete from './Delete'
import Project from './Project'
import Transform from './Transform'
import Pipeline from './Pipeline'
import Files from './Files'
import Projects from './Projects'
import Model from './Model'
import Modal from './Modal'
import ProcessModal from './ProcessModal'
//<Project onFileUpload={onFileUpload}/>
// <Upload onFileUpload={onFileUpload}/>
// <Delete onFileUpload={onFileUpload} />

const PrototypeHeader = ({onFileUpload, dataStore, handleTabSelection}) => {
  const { isDarkMode } = useDarkMode();
  const [xlsxData, setXLSXData] = useState(null);
console.log(onFileUpload)


// <Transform />
// <Pipeline />
//
// <div className='button-wrap'>
//   <div className='container'>
//    <Projects /></div>
//   <div className='container'>
//   <Files /></div>
//   <Model  dataStore={dataStore}/>
//   <Popup onFileUpload={onFileUpload} />
//   <Delete  dataStore={dataStore} />
//   <Upload />
// </div>
//
// <div className='button-wrap2'>
// <ProcessModal />
// <Modal />
// </div>
//
// <div className='button-wrap2'>
// <div className='popup-container'>
// <div className='dropdown-button'>Share</div></div>
// <div className='popup-container'>
// <div className='dropdown-button'>New</div></div>
// </div>

const handleTabClick = (selection)=>{
  handleTabSelection(selection)
}


  return (

    <div className={`prototype-header2 ${isDarkMode ? 'dark-mode' : ''}`}>

      <div className='button-wrap3'>
      <div className='dropdown-button2' onClick={() => handleTabClick('Schema')}>Report Schema Config</div>
      <div className='dropdown-button2' onClick={() => handleTabClick('Structure')}>Report Structure Instances</div>
      <div className='dropdown-button2' onClick={() => handleTabClick('Pipeline')}>Pipeline and Process Management</div>
      <div className='dropdown-button2' onClick={() => handleTabClick('Canvas')}>Canvas Map</div>
      </div>






      <div className='titlez'>Workspace</div>


    </div>
  );
};

export default PrototypeHeader;

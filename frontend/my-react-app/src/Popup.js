// Popup.js
import React, { useState, useEffect, useRef } from 'react';
import './Upload.css';
import { useDarkMode } from './DarkModeContext';
import XLSXFileHandler from './XLSXFileHandler';
import CSVFileHandler from './CSVFileHandler'
import JSONfileHandler from './JSONfileHandler'
import XBRLFilesHandler from './XBRLFilesHandler'

const Popup = ({ onFileUpload }) => {
  const { isDarkMode } = useDarkMode();
  console.log(onFileUpload)

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

      // Function to close the dropdown.
    const closeDropdown = () => {
      setIsDropdownOpen(false);
    };

        useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            closeDropdown();
          }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

  return (
    <div className={`popup-container ${isDarkMode ? 'dark-mode' : ''}`}>
    <div ref={dropdownRef} className={`dropdown ${isDropdownOpen ? 'open' : ''}`}>
      <button className="dropdown-button4" onClick={toggleDropdown}>
        Import &or;
      </button>
      <div className="dropdown-content">

        <div className='button-space2'>This Sheet:</div>
        <XBRLFilesHandler onFileUpload={onFileUpload} />
        <XLSXFileHandler closeDropdown={closeDropdown} onFileUpload={onFileUpload} />
        <CSVFileHandler onFileUpload={onFileUpload} />
        <JSONfileHandler onFileUpload={onFileUpload} />
        {/* Add other dropdown items here */}
        <div className='button-space2'>All Sheets (Model):</div>
        <XBRLFilesHandler onFileUpload={onFileUpload} />
        <XLSXFileHandler closeDropdown={closeDropdown} onFileUpload={onFileUpload} />
        <CSVFileHandler onFileUpload={onFileUpload} />
        <JSONfileHandler onFileUpload={onFileUpload} />
      </div>

    </div>
    </div>
  );
};

export default Popup;

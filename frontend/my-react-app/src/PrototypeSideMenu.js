import React, { useState, useEffect, useRef } from 'react';
import './PrototypeSideMenu.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext


const PrototypeSideMenu = ({ overlaidModelName, sheetTitle, handleSchemaConfigSelection, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [initialWidth, setInitialWidth] = useState(200);
  const [initialHeight, setInitialHeight] = useState(400);
  const [currentWidth, setCurrentWidth] = useState(initialWidth);
  const [currentHeight, setCurrentHeight] = useState(initialHeight);
  const resizeBorderWidth = 35;



  const [selectedSheet, setSelectedSheet] = useState(null); // Track the selected sheet title

  console.log(sheetTitle)

  console.log('should be sheettile above me')

  const { isDarkMode } = useDarkMode();


//depcerecated
  const [isFirstSheetSelected, setIsFirstSheetSelected] = useState(false); // Track if the first sheet is selected
  const resizeRef = useRef(null); // Reference to the resize area


  useEffect(() => {
      // Set the initial selected sheet when the component mounts
      setSelectedSheet(sheetTitle);
    }, []);

    useEffect(() => {
      // Update the selected sheet when the sheetTitle prop changes
      setSelectedSheet(sheetTitle);
    }, [sheetTitle]);


    useEffect(() => {
      console.log('overlausin')
      console.log(overlaidModelName)
      //woohoo we have the new overlay name

      // Update the selected sheet when the sheetTitle prop changes
    }, [overlaidModelName]);

  useEffect(() => {
    const handleResize = (e) => {
      if (isResizing) {
        const newWidth = currentWidth + e.clientX - initialWidth - resizeBorderWidth;
        const newHeight = currentHeight + e.clientY - initialHeight - resizeBorderWidth;
        document.querySelector('.prototype-side-menu').style.width = `${newWidth}px`;
        document.querySelector('.prototype-side-menu').style.height = `${newHeight}px`;
      }
    };

    const handleMouseUp = (e) => {
      if (isResizing) {
        setIsResizing(false);
        setCurrentWidth(currentWidth + e.clientX - initialWidth - resizeBorderWidth);
        setCurrentHeight(currentHeight + e.clientY - initialHeight - resizeBorderWidth);
      }
    };
    // Attach event listeners to the resize area
    resizeRef.current.addEventListener('mousedown', (e) => {
      if (e.target === resizeRef.current) {
        // Only start resizing if the user clicks on the resize handle itself
        setIsResizing(true);
        setInitialWidth(currentWidth);
        setInitialHeight(currentHeight);
      }
    });

    document.addEventListener('mousemove', handleResize);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleResize);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, initialWidth, initialHeight, currentWidth, currentHeight]);



  useEffect(() => {
    if (sheetData) {
      const initialData = sheetData.slice(1);
    }
  }, [sheetData]);

  //depecrated????
  const handleSheetSelect = (index, sheetTitle) => {
   // Handle sheet selection here
   if(dataStore.workbookXLSX){
     console.log('Selecting sheet:', sheetTitle);
     setSelectedSheet(sheetTitle);
     onSheetSelect(sheetTitle);
     handleSelectedSheet(sheetTitle); // Call the function to update selectedShee
   }else{
     console.log('deleted workbook')
     console.log(index, sheetTitle)
     handleSelectedSheet(''); // Call the function to update selectedShee
     setSelectedSheet('');
     onSheetSelect('');
   }
   };
  //switch a prop that conditionally renderers xlsx sheet renderer or another component

  const handleSchemaConfigSelect = (index, sheetTitle)=>{
    console.log('hello, changed schema')
    console.log(index, sheetTitle)

    handleSchemaConfigSelection(sheetTitle)
    setSelectedSheet(sheetTitle);
    // if(dataStore.overLaidModelSheet){
    //   dataStore.updateOverLaidModelSheet(sheetTitle)
    // }
    if(dataStore.semanticWorkbookSheet){
      dataStore.updateSemanticWorkbookSheet(sheetTitle)
    }
  }


   const handleTitleChange = (index, title, titleChange) => {
    dataStore.updateDataTaxonomyXLSX(index, titleChange)
   }


   return (
      <div>
        <div
          className={`prototype-side-menu ${isResizing ? 'resizing' : ''} ${isDarkMode ? 'dark-mode' : ''}`}
        >
          <div className="resize-handle" ref={resizeRef}></div>
          <div className='elementTitle25'>Report Model</div>
          <ul>
            <div className='sidemenu-title'></div>
            {dataStore.lucaSideMenu ? dataStore.lucaSideMenu.map((title, index) => (
              <li
                key={title}
                className={`${isDarkMode ? 'dark-mode' : ''} ${title === sheetTitle && schemaConfigSelected ? 'selected' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSchemaConfigSelect(index, title)
                }
                }
              >
                {title}
              </li>
            )) : <li className='sidemenu-title'> Sheets </li>}
          </ul>
        </div>
      </div>
    );
  };

export default PrototypeSideMenu;

import React, { useState, useEffect, useRef } from 'react';
import './PrototypeSideMenu.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext


const PrototypeSideMenu = ({ setStrucutreComponentItem, handleStructureInstanceSelection, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected }) => {
  const [isResizing, setIsResizing] = useState(false);
  const [initialWidth, setInitialWidth] = useState(200);
  const [initialHeight, setInitialHeight] = useState(400);
  const [currentWidth, setCurrentWidth] = useState(initialWidth);
  const [currentHeight, setCurrentHeight] = useState(initialHeight);
  const resizeBorderWidth = 35;


  const [selectedSheet, setSelectedSheet] = useState(null); // Track the selected sheet title

  const { isDarkMode } = useDarkMode();
  console.log(dataStore)

//depcerecated
  const [isFirstSheetSelected, setIsFirstSheetSelected] = useState(false); // Track if the first sheet is selected
  const resizeRef = useRef(null); // Reference to the resize area


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

   const handleStructureInstanceSelect = (index, structTitle) =>{
     console.log(structTitle)
     setSelectedSheet(structTitle);
     console.log(selectedSheet)
     handleStructureInstanceSelection(structTitle)
   }

   const handleTitleChange = (index, title, titleChange) => {
    dataStore.updateDataTaxonomyXLSX(index, titleChange)
   }
   const [isButtonVisible, setIsButtonVisible] = useState(false);

   // {isButtonVisible && (
   //   <button className='additional-button'>
   //     Additional Button
   //   </button>
   // )}
   const [isTree, setIsTree] = useState(true);
   const [isDetails, setIsDetails] = useState(false);
   const [isAgendas, setIsAgendas] = useState(false);

   const handleIsTree = ()=>{
     setIsTree(true)
     setIsDetails(false)
     setIsAgendas(false)
   }

   const handleIsDetails = ()=>{
     setIsTree(false)
     setIsDetails(true)
     setIsAgendas(false)
   }

   const handleIsAgendas = ()=>{
     setIsTree(false)
     setIsDetails(false)
     setIsAgendas(true)
   }


   const [selectedButton, setSelectedButton] = useState(null);



 return (
   <div className='structureInstance'>
    <div className='elementTitle'></div>
     <div
       className={`prototype-side-menu5 ${isResizing ? 'resizing' : ''} ${
         isDarkMode ? 'dark-mode' : ''
       }`}
     >
     <div
        className="resize-handle"
        ref={resizeRef} // Reference to the resize area
      >
      </div>
      <div className='elementTitle25'>Report Instance</div>

      <div className='easy'>

      <div className='elementTitle6'
      style={{
        color: isTree ? '#556B2F' : 'initial',
        padding: '10px',
        fontWeight: 250, // Set font-weight to 250 if sheetTitle is 'Terms'

      }}
      onClick={()=>handleIsTree()}>Tree</div>
      <div className='elementTitle6' onClick={()=>handleIsDetails()}
      style={{
        color: isDetails ? '#556B2F' : 'initial',
        padding: '10px',
      fontWeight: 250, // Set font-weight to 250 if sheetTitle is 'Terms'

      }}>Details</div>
      <div className='elementTitle6' onClick={()=>handleIsAgendas()}
      style={{
        color: isAgendas ? '#556B2F' : 'initial',
        padding: '10px',
        fontWeight: 250, // Set font-weight to 250 if sheetTitle is 'Terms'

      }}>Agendas</div>
      </div>

      {isTree ? <div><div className='easy'>
      <div className='elementTitle6'>Networks: 15</div>
      <div className='elementTitle6'>Type Sort ^</div>
      </div>

      <ul>
        <div className='sidemenu-title'>
          {dataStore.workbookXLSX ? xlsxTitle : null}
        </div>
        {dataStore.structureInstanceComponentExample
          ? dataStore.structureInstanceComponentExample.map(
              (title, index) => (
                <li
                  key={title}

                     style={{
                backgroundColor:
                  selectedButton === title ? '#556B2F' : 'inherit',
                  color:
                    selectedButton === title ? 'white' : 'inherit',
                padding: selectedButton === title ? '5px' : '5px',

              }}
                  className={`${
                    isDarkMode ? 'dark-mode' : ''
                  } ${title === selectedSheet && !schemaConfigSelected
                    ? 'selected2'
                    : ''} ${
                    index === 0 && isFirstSheetSelected
                      ? 'selected2'
                      : ''
                  }`}
                  onClick={() => {
                    // handleStructureInstanceSelect(index, title);
                    setIsButtonVisible(true);
                    setSelectedButton(title);

                    setStrucutreComponentItem(title)
                  }}
                >
                  {title}

                </li>
              )
            )
          : <li className='sidemenu-title'> Sheets </li>}
      </ul></div>: <div></div>}

      {isDetails ? <div className='easyWrap'><div className='easy3'>
        XBRi/XBRL Tag:
      </div>
      <div className='easy'>
        Type: Asset:items
      </div>
      <div className='easy'>
        FactValue: 50
      </div>
      <div className='easy'>
        Identifier: A1HC70M
      </div>
      <div className='easy'>
        Currency: US
      </div>

      </div>: <div></div>}

      {isAgendas ? <div><div className='easy'>

        <div className='elementTitle6'>Agendas</div>
        </div>

      </div>: <div></div>}





     </div>
     </div>
   );
};

export default PrototypeSideMenu;

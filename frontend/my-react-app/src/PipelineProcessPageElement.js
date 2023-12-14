import React, { useState, useEffect, useRef } from 'react';
import './StructureInstanceTable.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext
import DeploymentTable from './DeploymentTable'

const PrototypeSideMenu = ({ handlePipelineInstanceSelection, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected }) => {


//<DeploymentTable />
 return (
   <div className="elementTitle11">

<div className='processTablesWrapper4'>
  <div className='elementTitle18'>Process Management</div>
   <div className='processTablesWrapper2'>
   <table className='xlsx-table2'>
 <tr><th><td>Report ID</td></th><th><td>EDGAR PULL</td></th></tr>
 <tr><td>Process ID</td><td>EDGARURI:abCo@SEC</td></tr>
 <tr><td>Analysis</td><td>Revenue to Stock Projections[cited]</td></tr>
 <tr><td>Credentials</td><td>TraderGroup</td></tr>
 <tr><td>TTL</td><td>80000000</td></tr>
 </table>

   <table className='xlsx-table2'>
   <tr><th><td>Report ID</td></th><th><td>Ab Co BalanceSheet</td></th></tr>
   <tr><td>Process ID</td><td>XBRL Verification</td></tr>
   <tr><td>Domain</td><td>abco.co/report/BalanceSheet.xbri</td></tr>
   <tr><td>Credentials</td><td></td></tr>
   <tr><td>TTL</td><td>80000000</td></tr>
   </table>
   </div>

   <div className='processTablesWrapper3'>

   <table className='xlsx-table2'>
   <tr><th><td>Report ID</td></th><th><td>Ab Co BalanceSheet</td></th></tr>
   <tr><td>Process ID</td><td>XBRL Verification</td></tr>
   <tr><td>Domain</td><td>abco.co/report/BalanceSheet.xbri</td></tr>
   <tr><td>Credentials</td><td></td></tr>
   <tr><td>TTL</td><td>80000000</td></tr>
   </table>

   <table className='xlsx-table2'>
   <tr><th><td>Report ID</td></th><th><td>Ab Co BalanceSheet</td></th></tr>
   <tr><td>Process ID</td><td>XBRL Verification</td></tr>
   <tr><td>Domain</td><td>abco.co/report/BalanceSheet.xbri</td></tr>
   <tr><td>Credentials</td><td></td></tr>
   <tr><td>TTL</td><td>80000000</td></tr>
   </table>

   </div>
   </div>

   <div className='balance-sheet2'>


     </div>
     </div>
   );
};

export default PrototypeSideMenu;

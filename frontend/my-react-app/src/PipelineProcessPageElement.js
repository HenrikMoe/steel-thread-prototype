import React, { useState, useEffect, useRef } from 'react';
import './StructureInstanceTable.css'; // Import the CSS file for styling
import { useDarkMode } from './DarkModeContext'; // Import the DarkModeContext
import DeploymentTable from './DeploymentTable'

const PrototypeSideMenu = ({ handlePipelineInstanceSelection, sheetTitles, onSheetSelect, sheetData, xlsxTitle, dataStore, handleSelectedSheet, schemaConfigSelected }) => {


const [isAnalysis, setIsAnalysis]= useState(false)
const [isDeployment, setIsDeployment]= useState(true)

const setAnalysisOff = ()=>{
  setIsAnalysis(false)
  setIsDeployment(true)

}

const setDeploymentOff = () =>{
  setIsDeployment(false)
  setIsAnalysis(true)

}

//<DeploymentTable />
 return (
   <div className="elementTitle11">




  {isDeployment ?   <div className='processHeaderwrap'>
  <div   className='notes5'

  >External Processes</div>
  <div   className='notes5'

  > Go To: </div><div   className='notes4'
  onClick={() => setDeploymentOff()}
  >Internal</div></div>:<div></div>}

{isAnalysis ?   <div className='processHeaderwrap'>
<div   className='notes5'
>Internal Processes</div><div   className='notes5'

> Go To: </div><div   className='notes4'
onClick={() => setAnalysisOff()}
>External</div></div>:<div></div>}

{isDeployment ?  <div className='processTablesWrapper6'>
<table className='xlsx-table2'>
  <tr><th><td>Process ID</td></th><th><td>BalanceSheet Deployment AbCo</td></th></tr>
  <tr><td>Report ID</td><td>Net Assets Hypercube</td></tr>
  <tr><td>Domain</td><td>abco.co/report/BalanceSheet.xbri</td></tr>
  <tr><td>Credentials</td><td></td></tr>
  <tr><td>TTL</td><td>80000000</td></tr>
  </table>
  <div className='processButtonWrap'>
  <button className='processButton'>Report</button>
  <button className='processButton'>Visit</button>

  <button  className='processButton'>Pause</button>
  <button  className='processButton'>Archive</button> </div>
  <table className='xlsx-table2'>
    <tr><th><td>Process ID</td></th><th><td>AbCo - SFAC 6 SBRM (OMG) SEC Submission</td></th></tr>
    <tr><td>Report ID</td><td>All HyperCubes</td></tr>
    <tr><td>Domain</td><td>abco.co/report/BalanceSheet.xbri</td></tr>
    <tr><td>Credentials</td><td></td></tr>
    <tr><td>TTL</td><td>80000000</td></tr>
    </table>
    <div className='processButtonWrap'>
    <button className='processButton'>Report</button>
    <button  className='processButton'>Archive</button> </div>
    </div> : <div></div>}

  {isAnalysis ?   <div className='processTablesWrapper5'>

    <table className='xlsx-table2'>
    <tr><th><td>Process ID</td></th><th><td>PROOF - SBRM (OMG) Report Set Verfiication AbCo</td></th></tr>
    <tr><td>Report ID</td><td>Report Logic Verification</td></tr>
    <tr><td>Analysis</td><td>Report model rules with facts verification.</td></tr>
    <tr><td>Domain</td><td>abco.co/report/BalanceSheet.xbri</td></tr>
    <tr><td>Credentials</td><td></td></tr>
    <tr><td>TTL</td><td>80000000</td></tr>
    </table>
    <div className='processButtonWrap'>
    <button className='processButton'>Report</button>
    <button className='processButton'>Archive</button>
    </div>

     <table className='xlsx-table2'>
   <tr><th><td>Process ID</td></th><th><td>Projection Analysis AbCo</td></th></tr>
   <tr><td>Report ID</td><td>EDGARURI:abCo@SEC</td></tr>
   <tr><td>Analysis</td><td>Revenue to Stock Projections[cited]</td></tr>
   <tr><td>Credentials</td><td>TraderGroup</td></tr>
   <tr><td>TTL</td><td>80000000</td></tr>
   </table>
   <div className='processButtonWrap'>

   <button  className='processButton'>Report</button>
   <button  className='processButton'>Archive</button>
   </div>

     <table className='xlsx-table2'>
     <tr><th><td>Process ID</td></th><th><td>Risk Analysis AbCo</td></th></tr>
     <tr><td>Report ID</td><td>EDGAR:abCo@SEC</td></tr>
     <tr><td>Domain</td><td>abco.co/report/BalanceSheet.xbri</td></tr>
     <tr><td>Analysis</td><td>Risk With Energy Change Shock Tests</td></tr>
     <tr><td>Parameters</td><td>FIBO, ACTUS</td></tr>

     <tr><td>Credentials</td><td></td></tr>
     <tr><td>TTL</td><td>80000000</td></tr>
     </table>
     <div className='processButtonWrap'>

     <button  className='processButton'>Report</button>
     <button  className='processButton'>Archive</button>
     </div>

     </div>: <div></div>}

<button className='notes6'>Create Process</button>



   </div>


   );
};

export default PrototypeSideMenu;

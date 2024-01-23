import { AgGridReact } from 'ag-grid-react'; 
import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-quartz.css"; 

const BarChart = ({missionData}) => {
  const colDefs = [
    { headerName: 'Mission', field: 'mission' },
    { headerName: 'Company', field: 'company' },
    { headerName: 'Location', field: 'location' },
    { headerName: 'Date', field: 'date' },
    { headerName: 'Time', field: 'time' },
    { headerName: 'Rocket', field: 'rocket' },
    { headerName: 'Price', field: 'price'},
    { headerName: 'Successful', field: 'successful' },
  ];
  return (<div className="ag-theme-quartz" >
    <AgGridReact
       columnDefs={colDefs}
       rowData={missionData}
       pagination={true}
       paginationPageSize={20}
       domLayout='autoHeight'
      />
  </div>);
}
export default BarChart
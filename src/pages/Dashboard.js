import React,{useEffect,useState} from 'react';
import BarChart from "../components/charts/BarChart"
import PieChart from '../components/charts/PieChart';
const Dashboard = () => {
  const [missionData, setMissionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.ag-grid.com/example-assets/space-mission-data.json');
        const data = await response.json();
        setMissionData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally{
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  if(isLoading){
    <div>
      <h2>SpaceVue Dashboard</h2>
      <p>Loading...</p>
    </div>
  }
  return (
    <div className='dashboard'>
      <h1>SpaceVue Dashboard</h1>
      {missionData.length>0&&<PieChart missionData={missionData} total={missionData.length} ></PieChart>}      <BarChart missionData={missionData}></BarChart>
    </div>
  );
};

export default Dashboard;

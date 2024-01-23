import logo from './logo.svg';
import './App.css';
import { AuthContextProvider } from './context/AuthContextProvider';
import AllRoutes from './components/AllRoutes';
function App() {
  return (
    <div>
       <AuthContextProvider>
       <AllRoutes></AllRoutes> 
    </AuthContextProvider>
    </div>
  );
}

export default App;

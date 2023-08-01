import logo from './logo.svg';
import './componentStyling/App.css';
import NavBar from './components/NavBar';
import WebSocketComponent from './components/WebSocketComponent';
import SystemIp from './components/SystemIp';
function App() {
  return (
    <div className="wrapper">
    <div className="container">
      <NavBar/>
      <WebSocketComponent />
      <SystemIp/>
      
    </div>
    </div>
   
  );
}

export default App;

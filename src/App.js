import logo from './logo.svg';
import './App.css';
import Navs from "./Navs";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function App() {
  return (
    <div className="App">
      <AppBar
        style={{
          width:'calc(100% - 250px)',
          height:'60px',
        }}
      >
        <Toolbar>
            <h1>skdsk</h1>
        </Toolbar>
      </AppBar>
      <Navs/>
    </div>
  );
}

export default App;

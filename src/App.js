import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Temp from './Temp';

function App() {
  return (
    <div className="g-sidenav-show   bg-gray-100">
      <div className="min-height-300 bg-primary position-absolute w-100"></div>
      <Sidebar/>
      <main className="main-content position-relative border-radius-lg ">
        {/* Navbar */}
        <Navbar/>
        {/* End Navbar */}
        

    <div className="container-fluid py-4">

      
    </div>



      </main>
    
    </div>
  );
}

export default App;

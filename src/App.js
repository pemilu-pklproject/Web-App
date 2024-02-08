import Temp from './Temp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDynamicPages from './Admin/DynamicPages';
import AdminDashboard from "./Admin/Dashboard";
import AdminCandidate from "./Admin/Candidate";
import AdminPosition from "./Admin/Position";

function App() {
  const admindashboardepage = <AdminDashboard/>;
  const admincandidatepage = <AdminCandidate/>;
  const adminpositionpage = <AdminPosition/>;
  
  return (
    <Router>
      <div className="g-sidenav-show   bg-gray-100">
        <div className="min-height-300 bg-primary position-absolute w-100"></div>
        <Switch>
          <Route path="/admindashboard">
            <AdminDynamicPages title='Dashboard Admin' active='dashboard' page ={admindashboardepage}/>
          </Route>
          <Route path="/kandidat">
            <AdminDynamicPages title='Data Kandidat' active='candidate' page ={admincandidatepage}/>
          </Route>
          <Route path="/jabatan">
            <AdminDynamicPages title='Data Jabatan' active='position' page ={adminpositionpage}/>
          </Route>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;

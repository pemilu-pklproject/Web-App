import Temp from './Temp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDynamicPages from './Admin/DynamicPages';
import AdminDashboard from "./Admin/Dashboard";
import AdminCandidate from "./Admin/Candidate";
import AdminPosition from "./Admin/Position";
import AdminVote from "./Admin/Vote";

import CandidateDynamicPages from './Candidate/DynamicPages';
import CandidateDashboard from "./Candidate/Dashboard";
import CandidateVolunteer from "./Candidate/Volunteer";
import CandidateVotingPlace from "./Candidate/VotingPlace";


function App() {
  const admindashboardpage = <AdminDashboard/>;
  const admincandidatepage = <AdminCandidate/>;
  const adminpositionpage = <AdminPosition/>;
  const adminvotepage = <AdminVote/>;

  const candidatedashboardpage = <CandidateDashboard/>;
  const candidatevolunteerpage = <CandidateVolunteer/>;
  const candidatevotingplacepage = <CandidateVotingPlace/>;

  
  return (
    <Router>
      <div className="g-sidenav-show   bg-gray-100">
        <div className="min-height-300 bg-primary position-absolute w-100"></div>
        <Switch>
          <Route path="/dashboardadmin">
            <AdminDynamicPages title='Dashboard Admin' active='dashboard' page ={admindashboardpage}/>
          </Route>
          <Route path="/kandidat">
            <AdminDynamicPages title='Data Kandidat' active='candidate' page ={admincandidatepage}/>
          </Route>
          <Route path="/jabatan">
            <AdminDynamicPages title='Data Jabatan' active='position' page ={adminpositionpage}/>
          </Route>
          <Route path="/hasilsuara">
            <AdminDynamicPages title='Data Hasil Pemilihan' active='vote' page ={adminvotepage}/>
          </Route>

          <Route path="/dashboardkandidat">
            <CandidateDynamicPages title='Dashboard Kandidat' active='dashboard' page ={candidatedashboardpage}/>
          </Route>
          <Route path="/relawan">
            <CandidateDynamicPages title='Data Relawan' active='volunteer' page ={candidatevolunteerpage}/>
          </Route>
          <Route path="/tps">
            <CandidateDynamicPages title='Data TPS' active='votingplace' page ={candidatevotingplacepage}/>
          </Route>
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;

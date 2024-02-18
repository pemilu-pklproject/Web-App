import Temp from './Temp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminDynamicPages from './Admin/DynamicPages';
import AdminDashboard from "./Admin/Dashboard";
import AdminCandidate from "./Admin/Candidate";
import AdminVote from "./Admin/Vote";
import AdminAdmin from "./Admin/Admin";

import CandidateDynamicPages from './Candidate/DynamicPages';
import CandidateDashboard from "./Candidate/Dashboard";
import CandidateVolunteer from "./Candidate/Volunteer";
import CandidateVotingPlace from "./Candidate/VotingPlace";
import CandidateVote from "./Candidate/Vote";
import CandidateVoter from "./Candidate/Voter";

import Login from "./Login";

function App() {
  const admindashboardpage = <AdminDashboard/>;
  const admincandidatepage = <AdminCandidate/>;
  const adminvotepage = <AdminVote/>;
  const adminadminpage = <AdminAdmin/>;

  const candidatedashboardpage = <CandidateDashboard/>;
  const candidatevolunteerpage = <CandidateVolunteer/>;
  const candidatevotingplacepage = <CandidateVotingPlace/>;
  const candidatevotepage = <CandidateVote/>;
  const candidatevoterpage = <CandidateVoter/>;

  
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
      <div className="g-sidenav-show bg-gray-100">
        <div className="min-height-300 bg-primary position-absolute w-100"></div>
          <Route path="/dashboardadmin">
            <AdminDynamicPages title='Dashboard Admin' active='dashboard' page ={admindashboardpage}/>
          </Route>
          <Route path="/admin">
            <AdminDynamicPages title='Data Admin' active='admin' page ={adminadminpage}/>
          </Route>
          <Route path="/kandidat">
            <AdminDynamicPages title='Data Kandidat' active='candidate' page ={admincandidatepage}/>
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
          <Route path="/hasilsuarakandidat">
            <CandidateDynamicPages title='Data Hasil Pemilihan' active='vote' page ={candidatevotepage}/>
          </Route>
          <Route path="/pemilih">
            <CandidateDynamicPages title='Data Pemilih' active='voter' page ={candidatevoterpage}/>
          </Route>
      </div>
      </Switch>
    </Router>
  );
}

export default App;

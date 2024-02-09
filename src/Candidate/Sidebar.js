import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const active = props.active;
    return ( 

        <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
            <div className="sidenav-header">
              <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
              <Link className="navbar-brand m-0" to="dashboardkandidat">
                <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
                <span className="ms-1 font-weight-bold">Aplikasi Pemilu</span>
              </Link>
            </div>
            <hr className="horizontal dark mt-0"/>
            <div id="sidenav-collapse-main">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className={(active=='dashboard') ? "nav-link active":"nav-link"} to="/dashboardkandidat">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-desktop text-primary text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={(active=='volunteer') ? "nav-link active":"nav-link"} to="/relawan">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-users text-primary text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Relawan</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={(active=='votingplace') ? "nav-link active":"nav-link"} to="/tps">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-box-tissue text-primary text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Tps</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={(active=='vote') ? "nav-link active":"nav-link"} to="/hasilsuarakandidat">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-poll text-primary text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Hasil Pemilihan</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={(active=='voter') ? "nav-link active":"nav-link"} to="/pemilih">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-users text-primary text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Pemilih</span>
                  </Link>
                </li>
              </ul>
            </div>
        </aside>

     );
}
 
export default Sidebar;
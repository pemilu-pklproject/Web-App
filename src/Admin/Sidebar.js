import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const active = props.active;
    return ( 

        <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
            <div className="sidenav-header">
              <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
              <Link className="navbar-brand m-0" to="/dashboardadmin">
                <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100" alt="main_logo" />
                <span className="ms-1 font-weight-bold">Aplikasi Pemilu</span>
              </Link>
            </div>
            <hr className="horizontal dark mt-0"/>
            <div id="sidenav-collapse-main">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className={(active=='dashboard') ? "nav-link active":"nav-link"} to="/dashboardadmin">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-desktop text-primary text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={(active=='admin') ? "nav-link active":"nav-link"} to="/admin">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-user-cog text-primary text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Admin</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={(active=='candidate') ? "nav-link active":"nav-link"} to="/kandidat">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-user-tie text-primary text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Kandidat</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={(active=='position') ? "nav-link active":"nav-link"} to="/jabatan">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-award text-primary text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Jabatan</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={(active=='vote') ? "nav-link active":"nav-link"} to="/hasilsuara">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-poll text-primary text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Hasil Pemilihan</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={(active=='region') ? "nav-link active":"nav-link"} to="/wilayah">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fa fa-map-marker-alt text-primary text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Wilayah</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={(active=='votearea') ? "nav-link active":"nav-link"} to="/dapil">
                    <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                      <i className="fas fa-map-pin text-primary text-sm opacity-10"></i>
                    </div>
                    <span className="nav-link-text ms-1">Dapil</span>
                  </Link>
                </li>
              </ul>
            </div>
        </aside>

     );
}
 
export default Sidebar;
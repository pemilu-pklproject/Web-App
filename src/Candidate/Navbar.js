import { Link } from "react-router-dom";

const Navbar = (props) => {
    const active = props.active;
    const title = props.title
    return ( 
    <div>
      <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
        <div className="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li className="breadcrumb-item text-sm"><a className="opacity-5 text-white" href="javascript:;">Kandidat</a></li>
              <li className="breadcrumb-item text-sm text-white active" aria-current="page">{title}</li>
            </ol>
            <h6 className="font-weight-bolder text-white mb-0">{title}</h6>
          </nav>
          <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
            <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
            <ul className="navbar-nav  justify-content-end">
              <li className="nav-item d-flex align-items-center">
                <a href="javascript:;" className="nav-link text-white font-weight-bold px-0">
                  
                </a>
              </li>
              <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                <a className="nav-link text-white p-0" id="iconNavbarSidenav" data-bs-toggle="offcanvas" href="#adminoffcanvas" role="button" aria-controls="offcanvasExample">
                  <div className="sidenav-toggler-inner">
                    <i className="sidenav-toggler-line bg-white"></i>
                    <i className="sidenav-toggler-line bg-white"></i>
                    <i className="sidenav-toggler-line bg-white"></i>
                  </div>
                </a>
              </li>

              <li className="nav-item px-2 d-flex align-items-center">
              </li>
              <li className="nav-item dropdown align-items-center">
                <a href="javascript:;" className="nav-link text-white" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa fa-user cursor-pointer"></i> Bambang
                </a>
                <ul class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                  <li class="mb-2">
                      <div class="d-flex py-1">
                        <div class="my-auto">
                          <i class="fa fa-user-tie mx-3" style={{fontSize:'40px'}}></i>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="text-sm font-weight-normal mb-1">
                            <span class="font-weight-bold">Bambang</span>
                          </h6>
                          <p class="text-xs text-secondary mb-0">
                            Kandidat
                          </p>
                        </div>
                      </div>
                  </li>
                  <li class="mb-n2 mt-3">
                      <button
                        type="button"
                        className="btn btn-primary col-10 offset-1"
                        data-bs-toggle="modal"
                        data-bs-target="#logoutModal"
                      >
                        Logout
                      </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

<div
  className="modal fade"
  id="logoutModal"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">
          Yakin Ingin Logout ?
        </h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-danger">
          Logout
        </button>
      </div>
    </div>
  </div>
</div>

      <div className="offcanvas offcanvas-start" id="adminoffcanvas" style={{ border: "none", borderRadius: '30px', width: '250px', style: "backgroundColor: red"}}>
          <aside className="bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl fixed-start " id="sidenav-main"  >
            <div className="sidenav-header p-4">
              <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
              <Link className="navbar-brand m-0" to="/dashboardkandidat">
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
</div>

    </div>
    

     );
}
 
export default Navbar;
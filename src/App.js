import {Helmet} from "react-helmet";

function App() {
  return (
    
    <div className="App">
      <div><aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 bg-slate-900 fixed-start " id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a className="navbar-brand d-flex align-items-center m-0" href=" https://demos.creative-tim.com/corporate-ui-dashboard/pages/dashboard.html " target="_blank">
        <span className="font-weight-bold text-lg">Corporate UI</span>
      </a>
    </div>
    <div className="collapse navbar-collapse px-4  w-auto " id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link  " href="../pages/dashboard.html">
            <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
              <svg width="30px" height="30px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>dashboard</title>
                <g id="dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="template" transform="translate(12.000000, 12.000000)" fill="#FFFFFF" fillRule="nonzero">
                    <path className="color-foreground" d="M0,1.71428571 C0,0.76752 0.76752,0 1.71428571,0 L22.2857143,0 C23.2325143,0 24,0.76752 24,1.71428571 L24,5.14285714 C24,6.08962286 23.2325143,6.85714286 22.2857143,6.85714286 L1.71428571,6.85714286 C0.76752,6.85714286 0,6.08962286 0,5.14285714 L0,1.71428571 Z" id="Path"></path>
                    <path className="color-background" d="M0,12 C0,11.0532171 0.76752,10.2857143 1.71428571,10.2857143 L12,10.2857143 C12.9468,10.2857143 13.7142857,11.0532171 13.7142857,12 L13.7142857,22.2857143 C13.7142857,23.2325143 12.9468,24 12,24 L1.71428571,24 C0.76752,24 0,23.2325143 0,22.2857143 L0,12 Z" id="Path"></path>
                    <path className="color-background" d="M18.8571429,10.2857143 C17.9103429,10.2857143 17.1428571,11.0532171 17.1428571,12 L17.1428571,22.2857143 C17.1428571,23.2325143 17.9103429,24 18.8571429,24 L22.2857143,24 C23.2325143,24 24,23.2325143 24,22.2857143 L24,12 C24,11.0532171 23.2325143,10.2857143 22.2857143,10.2857143 L18.8571429,10.2857143 Z" id="Path"></path>
                  </g>
                </g>
              </svg>
            </div>
            <span className="nav-link-text ms-1">Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="../pages/tables.html">
            <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
              <svg width="30px" height="30px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>table</title>
                <g id="table" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="view-grid" transform="translate(12.000000, 12.000000)" fill="#FFFFFF" fillRule="nonzero">
                    <path className="color-foreground" d="M3.42857143,0 C1.53502286,0 0,1.53502286 0,3.42857143 L0,6.85714286 C0,8.75069143 1.53502286,10.2857143 3.42857143,10.2857143 L6.85714286,10.2857143 C8.75069143,10.2857143 10.2857143,8.75069143 10.2857143,6.85714286 L10.2857143,3.42857143 C10.2857143,1.53502286 8.75069143,0 6.85714286,0 L3.42857143,0 Z" id="Path"></path>
                    <path className="color-background" d="M3.42857143,13.7142857 C1.53502286,13.7142857 0,15.2492571 0,17.1428571 L0,20.5714286 C0,22.4650286 1.53502286,24 3.42857143,24 L6.85714286,24 C8.75069143,24 10.2857143,22.4650286 10.2857143,20.5714286 L10.2857143,17.1428571 C10.2857143,15.2492571 8.75069143,13.7142857 6.85714286,13.7142857 L3.42857143,13.7142857 Z" id="Path"></path>
                    <path className="color-background" d="M13.7142857,3.42857143 C13.7142857,1.53502286 15.2492571,0 17.1428571,0 L20.5714286,0 C22.4650286,0 24,1.53502286 24,3.42857143 L24,6.85714286 C24,8.75069143 22.4650286,10.2857143 20.5714286,10.2857143 L17.1428571,10.2857143 C15.2492571,10.2857143 13.7142857,8.75069143 13.7142857,6.85714286 L13.7142857,3.42857143 Z" id="Path"></path>
                    <path className="color-foreground" d="M13.7142857,17.1428571 C13.7142857,15.2492571 15.2492571,13.7142857 17.1428571,13.7142857 L20.5714286,13.7142857 C22.4650286,13.7142857 24,15.2492571 24,17.1428571 L24,20.5714286 C24,22.4650286 22.4650286,24 20.5714286,24 L17.1428571,24 C15.2492571,24 13.7142857,22.4650286 13.7142857,20.5714286 L13.7142857,17.1428571 Z" id="Path"></path>
                  </g>
                </g>
              </svg>
            </div>
            <span className="nav-link-text ms-1">Tables</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../pages/wallet.html">
            <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
              <svg width="30px" height="30px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>wallet</title>
                <g id="wallet" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="credit-card" transform="translate(12.000000, 15.000000)" fill="#FFFFFF">
                    <path className="color-background" d="M3,0 C1.343145,0 0,1.343145 0,3 L0,4.5 L24,4.5 L24,3 C24,1.343145 22.6569,0 21,0 L3,0 Z" id="Path" fillRule="nonzero"></path>
                    <path className="color-foreground" d="M24,7.5 L0,7.5 L0,15 C0,16.6569 1.343145,18 3,18 L21,18 C22.6569,18 24,16.6569 24,15 L24,7.5 Z M3,13.5 C3,12.67155 3.67158,12 4.5,12 L6,12 C6.82842,12 7.5,12.67155 7.5,13.5 C7.5,14.32845 6.82842,15 6,15 L4.5,15 C3.67158,15 3,14.32845 3,13.5 Z M10.5,12 C9.67158,12 9,12.67155 9,13.5 C9,14.32845 9.67158,15 10.5,15 L12,15 C12.82845,15 13.5,14.32845 13.5,13.5 C13.5,12.67155 12.82845,12 12,12 L10.5,12 Z" id="Shape"></path>
                  </g>
                </g>
              </svg>
            </div>
            <span className="nav-link-text ms-1">Wallet</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link  " href="../pages/rtl.html">
            <div className="icon icon-shape icon-sm px-0 text-center d-flex align-items-center justify-content-center">
              <svg width="30px" height="30px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>rtl</title>
                <g id="rtl" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="menu-alt-3" transform="translate(12.000000, 14.000000)" fill="#FFFFFF">
                    <path className="color-foreground" d="M0,1.71428571 C0,0.76752 0.76752,0 1.71428571,0 L22.2857143,0 C23.2325143,0 24,0.76752 24,1.71428571 C24,2.66105143 23.2325143,3.42857143 22.2857143,3.42857143 L1.71428571,3.42857143 C0.76752,3.42857143 0,2.66105143 0,1.71428571 Z" id="Path"></path>
                    <path className="color-background" d="M0,10.2857143 C0,9.33894857 0.76752,8.57142857 1.71428571,8.57142857 L22.2857143,8.57142857 C23.2325143,8.57142857 24,9.33894857 24,10.2857143 C24,11.2325143 23.2325143,12 22.2857143,12 L1.71428571,12 C0.76752,12 0,11.2325143 0,10.2857143 Z" id="Path"></path>
                    <path className="color-background" d="M10.2857143,18.8571429 C10.2857143,17.9103429 11.0532343,17.1428571 12,17.1428571 L22.2857143,17.1428571 C23.2325143,17.1428571 24,17.9103429 24,18.8571429 C24,19.8039429 23.2325143,20.5714286 22.2857143,20.5714286 L12,20.5714286 C11.0532343,20.5714286 10.2857143,19.8039429 10.2857143,18.8571429 Z" id="Path"></path>
                  </g>
                </g>
              </svg>
            </div>
            <span className="nav-link-text ms-1">RTL</span>
          </a>
        </li>
        <li className="nav-item mt-2">
          <div className="d-flex align-items-center nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="ms-2 w-6 h-6">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
            </svg>
            <span className="font-weight-normal text-md ms-2">Account Pages</span>
          </div>
        </li>
        <li className="nav-item border-start my-0 pt-2">
          <a className="nav-link position-relative ms-0 ps-2 py-2 " href="../pages/profile.html">
            <span className="nav-link-text ms-1">Profile</span>
          </a>
        </li>
        <li className="nav-item border-start my-0 pt-2">
          <a className="nav-link position-relative ms-0 ps-2 py-2 " href="../pages/sign-in.html">
            <span className="nav-link-text ms-1">Sign In</span>
          </a>
        </li>
        <li className="nav-item border-start my-0 pt-2">
          <a className="nav-link position-relative ms-0 ps-2 py-2 " href="../pages/sign-up.html">
            <span className="nav-link-text ms-1">Sign Up</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="sidenav-footer mx-4 ">
      <div className="card border-radius-md" id="sidenavCard">
        <div className="card-body  text-start  p-3 w-100">
          <div className="mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="text-primary" viewBox="0 0 24 24" fill="currentColor" id="sidenavCardIcon">
              <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
              <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
            </svg>
          </div>
          <div className="docs-info">
            <h6 className="font-weight-bold up mb-2">Need help?</h6>
            <p className="text-sm font-weight-normal">Please check our docs.</p>
            <a href="https://www.creative-tim.com/learning-lab/bootstrap/license/corporate-ui-dashboard" target="_blank" className="font-weight-bold text-sm mb-0 icon-move-right mt-auto w-100 mb-0">
              Documentation
              <i className="fas fa-arrow-right-long text-sm ms-1" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </aside>
  <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
    {/* Navbar */}
    <nav className="navbar navbar-main navbar-expand-lg mx-5 px-0 shadow-none rounded" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb bg-transparent mb-1 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li className="breadcrumb-item text-sm"><a className="opacity-5 text-dark" href="javascript:;">Dashboard</a></li>
            <li className="breadcrumb-item text-sm text-dark active" aria-current="page">Tables</li>
          </ol>
          <h6 className="font-weight-bold mb-0">Tables</h6>
        </nav>
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text text-body bg-white  border-end-0 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
              <input type="text" className="form-control ps-0" placeholder="Search"/>
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                  <i className="sidenav-toggler-line"></i>
                </div>
              </a>
            </li>
            <li className="nav-item px-3 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0">
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="fixed-plugin-button-nav cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd" />
                </svg>
              </a>
            </li>
            <li className="nav-item dropdown pe-2 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cursor-pointers">
                  <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
                </svg>
              </a>
              <ul className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src="../assets/img/team-2.jpg" className="avatar avatar-sm border-radius-sm  me-3 "/>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New message</span> from Laur
                        </h6>
                        <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          13 minutes ago
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mb-2">
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="my-auto">
                        <img src="../assets/img/small-logos/logo-google.svg" className="avatar avatar-sm border-radius-sm bg-gradient-dark p-2  me-3 " />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          <span className="font-weight-bold">New report</span> by Google
                        </h6>
                        <p className="text-xs text-secondary mb-0 d-flex align-items-center ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          1 day
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item border-radius-md" href="javascript:;">
                    <div className="d-flex py-1">
                      <div className="avatar avatar-sm border-radius-sm bg-slate-800  me-3  my-auto">
                        <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
                          <title>credit-card</title>
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                              <g transform="translate(1716.000000, 291.000000)">
                                <g transform="translate(453.000000, 454.000000)">
                                  <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                  <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h6 className="text-sm font-weight-normal mb-1">
                          Payment successfully completed
                        </h6>
                        <p className="text-xs text-secondary d-flex align-items-center mb-0 ">
                          <i className="fa fa-clock opacity-6 me-1"></i>
                          2 days
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item ps-2 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0">
                <img src="../assets/img/team-2.jpg" className="avatar avatar-sm" alt="avatar" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* End Navbar */}
    <div className="container-fluid py-4 px-5">
      <div className="row">
        <div className="col-12">
          <div className="card card-background card-background-after-none align-items-start mt-4 mb-5">
            <div className="full-background" style={{backgroundImage: 'url("../assets/img/header-blue-purple.jpg")'}}></div>
            <div className="card-body text-start p-4 w-100">
              <h3 className="text-white mb-2">Collect your benefits 🔥</h3>
              <p className="mb-4 font-weight-semibold">
                Check all the advantages and choose the best.
              </p>
              <button type="button" className="btn btn-outline-white btn-blur btn-icon d-flex align-items-center mb-0">
                <span className="btn-inner--icon">
                  <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="d-block me-2">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.61036 4.52196C6.34186 4.34296 5.99664 4.32627 5.71212 4.47854C5.42761 4.63081 5.25 4.92731 5.25 5.25V8.75C5.25 9.0727 5.42761 9.36924 5.71212 9.52149C5.99664 9.67374 6.34186 9.65703 6.61036 9.47809L9.23536 7.72809C9.47879 7.56577 9.625 7.2926 9.625 7C9.625 6.70744 9.47879 6.43424 9.23536 6.27196L6.61036 4.52196Z" />
                  </svg>
                </span>
                <span className="btn-inner--text">Watch more</span>
              </button>
              <img src="../assets/img/3d-cube.png" alt="3d-cube" className="position-absolute top-0 end-1 w-25 max-width-200 mt-n6 d-sm-block d-none" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card border shadow-xs mb-4">
            <div className="card-header border-bottom pb-0">
              <div className="d-sm-flex align-items-center">
                <div>
                  <h6 className="font-weight-semibold text-lg mb-0">Members list</h6>
                  <p className="text-sm">See information about all members</p>
                </div>
                <div className="ms-auto d-flex">
                  <button type="button" className="btn btn-sm btn-white me-2">
                    View all
                  </button>
                  <button type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-center me-2">
                    <span className="btn-inner--icon">
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="d-block me-2">
                        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z" />
                      </svg>
                    </span>
                    <span className="btn-inner--text">Add member</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body px-0 py-0">
              <div className="border-bottom py-3 px-3 d-sm-flex align-items-center">
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                  <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable1" autoComplete="off" checked/>
                  <label className="btn btn-white px-3 mb-0" htmlFor="btnradiotable1">All</label>
                  <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable2" autoComplete="off"/>
                  <label className="btn btn-white px-3 mb-0" htmlFor="btnradiotable2">Monitored</label>
                  <input type="radio" className="btn-check" name="btnradiotable" id="btnradiotable3" autoComplete="off"/>
                  <label className="btn btn-white px-3 mb-0" htmlFor="btnradiotable3">Unmonitored</label>
                </div>
                <div className="input-group w-sm-25 ms-auto">
                  <span className="input-group-text text-body">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                    </svg>
                  </span>
                  <input type="text" className="form-control" placeholder="Search"/>
                </div>
              </div>
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-secondary text-xs font-weight-semibold opacity-7">Member</th>
                      <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Function</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Status</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7">Employed</th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex align-items-center">
                            <img src="../assets/img/team-2.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user1" />
                          </div>
                          <div className="d-flex flex-column justify-content-center ms-1">
                            <h6 className="mb-0 text-sm font-weight-semibold">John Michael</h6>
                            <p className="text-sm text-secondary mb-0">john@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm text-dark font-weight-semibold mb-0">Manager</p>
                        <p className="text-sm text-secondary mb-0">Organization</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm border border-success text-success bg-success">Online</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-sm font-weight-normal">23/04/18</span>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex align-items-center">
                            <img src="../assets/img/team-3.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user2" />
                          </div>
                          <div className="d-flex flex-column justify-content-center ms-1">
                            <h6 className="mb-0 text-sm font-weight-semibold">Alexa Liras</h6>
                            <p className="text-sm text-secondary mb-0">alexa@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm text-dark font-weight-semibold mb-0">Programator</p>
                        <p className="text-sm text-secondary mb-0">Developer</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-sm font-weight-normal">11/01/19</span>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex align-items-center">
                            <img src="../assets/img/team-1.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user3" />
                          </div>
                          <div className="d-flex flex-column justify-content-center ms-1">
                            <h6 className="mb-0 text-sm font-weight-semibold">Laurent Perrier</h6>
                            <p className="text-sm text-secondary mb-0">laurent@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm text-dark font-weight-semibold mb-0">Executive</p>
                        <p className="text-sm text-secondary mb-0">Projects</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm border border-success text-success bg-success">Online</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-sm font-weight-normal">19/09/17</span>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex align-items-center">
                            <img src="../assets/img/marie.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user4" />
                          </div>
                          <div className="d-flex flex-column justify-content-center ms-1">
                            <h6 className="mb-0 text-sm font-weight-semibold">Michael Levi</h6>
                            <p className="text-sm text-secondary mb-0">michael@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm text-dark font-weight-semibold mb-0">Programator</p>
                        <p className="text-sm text-secondary mb-0">Developer</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm border border-success text-success bg-success">Online</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-sm font-weight-normal">24/12/08</span>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex align-items-center">
                            <img src="../assets/img/team-5.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user5"/>
                          </div>
                          <div className="d-flex flex-column justify-content-center ms-1">
                            <h6 className="mb-0 text-sm font-weight-semibold">Richard Gran</h6>
                            <p className="text-sm text-secondary mb-0">richard@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm text-dark font-weight-semibold mb-0">Manager</p>
                        <p className="text-sm text-secondary mb-0">Executive</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-sm font-weight-normal">04/10/21</span>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div className="d-flex align-items-center">
                            <img src="../assets/img/team-6.jpg" className="avatar avatar-sm rounded-circle me-2" alt="user6" />
                          </div>
                          <div className="d-flex flex-column justify-content-center ms-1">
                            <h6 className="mb-0 text-sm font-weight-semibold">Miriam Eric</h6>
                            <p className="text-sm text-secondary mb-0">miriam@creative-tim.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm text-dark font-weight-semibold mb-0">Programtor</p>
                        <p className="text-sm text-secondary mb-0">Developer</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm border border-secondary text-secondary bg-secondary">Offline</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-sm font-weight-normal">14/09/20</span>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border-top py-3 px-3 d-flex align-items-center">
                <p className="font-weight-semibold mb-0 text-dark text-sm">Page 1 of 10</p>
                <div className="ms-auto">
                  <button className="btn btn-sm btn-white mb-0">Previous</button>
                  <button className="btn btn-sm btn-white mb-0">Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card border shadow-xs mb-4">
            <div className="card-header border-bottom pb-0">
              <div className="d-sm-flex align-items-center mb-3">
                <div>
                  <h6 className="font-weight-semibold text-lg mb-0">Recent transactions</h6>
                  <p className="text-sm mb-sm-0">These are details about the last transactions</p>
                </div>
                <div className="ms-auto d-flex">
                  <div className="input-group input-group-sm ms-auto me-2">
                    <span className="input-group-text text-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                      </svg>
                    </span>
                    <input type="text" className="form-control form-control-sm" placeholder="Search"/>
                  </div>
                  <button type="button" className="btn btn-sm btn-dark btn-icon d-flex align-items-center mb-0 me-2">
                    <span className="btn-inner--icon">
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="d-block me-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                    </span>
                    <span className="btn-inner--text">Download</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-body px-0 py-0">
              <div className="table-responsive p-0">
                <table className="table align-items-center justify-content-center mb-0">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-secondary text-xs font-weight-semibold opacity-7">Transaction</th>
                      <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Amount</th>
                      <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Date</th>
                      <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Status</th>
                      <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">Account</th>
                      <th className="text-center text-secondary text-xs font-weight-semibold opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                            <img src="../assets/img/small-logos/logo-spotify.svg" className="w-80" alt="spotify" />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Spotify</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-normal mb-0">$2,500</p>
                      </td>
                      <td>
                        <span className="text-sm font-weight-normal">Wed 3:00pm</span>
                      </td>
                      <td>
                        <span className="badge badge-sm border border-success text-success bg-success">
                          <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="me-1">
                            <path d="M1 4.42857L3.28571 6.71429L9 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Paid
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <div className="border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto">
                            <img src="../assets/img/logos/visa.png" className="w-90 mx-auto" alt="visa" />
                          </div>
                          <div className="ms-2">
                            <p className="text-dark text-sm mb-0">Visa 1234</p>
                            <p className="text-secondary text-sm mb-0">Expiry 06/2026</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                            <img src="../assets/img/small-logos/logo-invision.svg" className="w-80" alt="invision" />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Invision</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-normal mb-0">$5,000</p>
                      </td>
                      <td>
                        <span className="text-sm font-weight-normal">Wed 1:00pm</span>
                      </td>
                      <td>
                        <span className="badge badge-sm border border-success text-success bg-success">
                          <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="me-1">
                            <path d="M1 4.42857L3.28571 6.71429L9 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Paid
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <div className="border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto">
                            <img src="../assets/img/logos/mastercard.png" className="w-90 mx-auto" alt="mastercard" />
                          </div>
                          <div className="ms-2">
                            <p className="text-dark text-sm mb-0">Mastercard 1234</p>
                            <p className="text-secondary text-sm mb-0">Expiry 06/2026</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                            <img src="../assets/img/small-logos/logo-jira.svg" className="w-80" alt="jira" />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Jira</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-normal mb-0">$3,400</p>
                      </td>
                      <td>
                        <span className="text-sm font-weight-normal">Mon 7:40pm</span>
                      </td>
                      <td>
                        <span className="badge badge-sm border border-warning text-warning bg-warning">
                          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="me-1ca">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                          </svg>
                          Pending
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <div className="border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto">
                            <img src="../assets/img/logos/mastercard.png" className="w-90 mx-auto" alt="mastercard" />
                          </div>
                          <div className="ms-2">
                            <p className="text-dark text-sm mb-0">Mastercard 1234</p>
                            <p className="text-secondary text-sm mb-0">Expiry 06/2026</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                            <img src="../assets/img/small-logos/logo-slack.svg" className="w-80" alt="slack" />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Slack</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-normal mb-0">$1,000</p>
                      </td>
                      <td>
                        <span className="text-sm font-weight-normal">Wed 5:00pm</span>
                      </td>
                      <td>
                        <span className="badge badge-sm border border-success text-success bg-success">
                          <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="me-1">
                            <path d="M1 4.42857L3.28571 6.71429L9 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Paid
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <div className="border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto">
                            <img src="../assets/img/logos/visa.png" className="w-90 mx-auto" alt="visa" />
                          </div>
                          <div className="ms-2">
                            <p className="text-dark text-sm mb-0">Visa 1234</p>
                            <p className="text-secondary text-sm mb-0">Expiry 06/2026</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                            <img src="../assets/img/small-logos/logo-webdev.svg" className="w-80" alt="webdev" />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Webdev</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-normal mb-0">$14,000</p>
                      </td>
                      <td>
                        <span className="text-sm font-weight-normal">Wed 3:30am</span>
                      </td>
                      <td>
                        <span className="badge badge-sm border border-success text-success bg-success">
                          <svg width="9" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" className="me-1">
                            <path d="M1 4.42857L3.28571 6.71429L9 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          Paid
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <div className="border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto">
                            <img src="../assets/img/logos/visa.png" className="w-90 mx-auto" alt="visa" />
                          </div>
                          <div className="ms-2">
                            <p className="text-dark text-sm mb-0">Visa 1234</p>
                            <p className="text-secondary text-sm mb-0">Expiry 06/2026</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2">
                            <img src="../assets/img/small-logos/logo-xd.svg" className="w-80" alt="xd" />
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Adobe XD</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-normal mb-0">$2,300</p>
                      </td>
                      <td>
                        <span className="text-sm font-weight-normal">Tue 3:30pm</span>
                      </td>
                      <td>
                        <span className="badge badge-sm border border-danger text-danger bg-danger">
                          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="me-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          Canceled
                        </span>
                      </td>
                      <td className="align-middle">
                        <div className="d-flex">
                          <div className="border px-1 py-1 text-center d-flex align-items-center border-radius-sm my-auto">
                            <img src="../assets/img/logos/mastercard.png" className="w-90 mx-auto" alt="mastercard" />
                          </div>
                          <div className="ms-2">
                            <p className="text-dark text-sm mb-0">Mastercard 1234</p>
                            <p className="text-secondary text-sm mb-0">Expiry 06/2026</p>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-bs-toggle="tooltip" data-bs-title="Edit user">
                          <svg width="14" height="14" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2201 2.02495C10.8292 1.63482 10.196 1.63545 9.80585 2.02636C9.41572 2.41727 9.41635 3.05044 9.80726 3.44057L11.2201 2.02495ZM12.5572 6.18502C12.9481 6.57516 13.5813 6.57453 13.9714 6.18362C14.3615 5.79271 14.3609 5.15954 13.97 4.7694L12.5572 6.18502ZM11.6803 1.56839L12.3867 2.2762L12.3867 2.27619L11.6803 1.56839ZM14.4302 4.31284L15.1367 5.02065L15.1367 5.02064L14.4302 4.31284ZM3.72198 15V16C3.98686 16 4.24091 15.8949 4.42839 15.7078L3.72198 15ZM0.999756 15H-0.000244141C-0.000244141 15.5523 0.447471 16 0.999756 16L0.999756 15ZM0.999756 12.2279L0.293346 11.5201C0.105383 11.7077 -0.000244141 11.9624 -0.000244141 12.2279H0.999756ZM9.80726 3.44057L12.5572 6.18502L13.97 4.7694L11.2201 2.02495L9.80726 3.44057ZM12.3867 2.27619C12.7557 1.90794 13.3549 1.90794 13.7238 2.27619L15.1367 0.860593C13.9869 -0.286864 12.1236 -0.286864 10.9739 0.860593L12.3867 2.27619ZM13.7238 2.27619C14.0917 2.64337 14.0917 3.23787 13.7238 3.60504L15.1367 5.02064C16.2875 3.8721 16.2875 2.00913 15.1367 0.860593L13.7238 2.27619ZM13.7238 3.60504L3.01557 14.2922L4.42839 15.7078L15.1367 5.02065L13.7238 3.60504ZM3.72198 14H0.999756V16H3.72198V14ZM1.99976 15V12.2279H-0.000244141V15H1.99976ZM1.70617 12.9357L12.3867 2.2762L10.9739 0.86059L0.293346 11.5201L1.70617 12.9357Z" fill="#64748B" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="border-top py-3 px-3 d-flex align-items-center">
                <button className="btn btn-sm btn-white d-sm-block d-none mb-0">Previous</button>
                <nav aria-label="..." className="ms-auto">
                  <ul className="pagination pagination-light mb-0">
                    <li className="page-item active" aria-current="page">
                      <span className="page-link font-weight-bold">1</span>
                    </li>
                    <li className="page-item"><a className="page-link border-0 font-weight-bold" href="javascript:;">2</a></li>
                    <li className="page-item"><a className="page-link border-0 font-weight-bold d-sm-inline-flex d-none" href="javascript:;">3</a></li>
                    <li className="page-item"><a className="page-link border-0 font-weight-bold" href="javascript:;">...</a></li>
                    <li className="page-item"><a className="page-link border-0 font-weight-bold d-sm-inline-flex d-none" href="javascript:;">8</a></li>
                    <li className="page-item"><a className="page-link border-0 font-weight-bold" href="javascript:;">9</a></li>
                    <li className="page-item"><a className="page-link border-0 font-weight-bold" href="javascript:;">10</a></li>
                  </ul>
                </nav>
                <button className="btn btn-sm btn-white d-sm-block d-none mb-0 ms-auto">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer pt-3  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-xs text-muted text-lg-start">
                Copyright
                © <script>
                  document.write(new Date().getFullYear())
                </script>
                Corporate UI by
                <a href="https://www.creative-tim.com" className="text-secondary" target="_blank">Creative Tim</a>.
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a href="https://www.creative-tim.com" className="nav-link text-xs text-muted" target="_blank">Creative Tim</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/presentation" className="nav-link text-xs text-muted" target="_blank">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/blog" className="nav-link text-xs text-muted" target="_blank">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.creative-tim.com/license" className="nav-link text-xs pe-0 text-muted" target="_blank">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </main>
  <div className="fixed-plugin">
    <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
      <i className="fa fa-cog py-2"></i>
    </a>
    <div className="card shadow-lg ">
      <div className="card-header pb-0 pt-3 ">
        <div className="float-start">
          <h5 className="mt-3 mb-0">Corporate UI Configurator</h5>
          <p>See our dashboard options.</p>
        </div>
        <div className="float-end mt-4">
          <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
            <i className="fa fa-close"></i>
          </button>
        </div>
        {/* End Toggle Button */}
      </div>
      <hr className="horizontal dark my-1"/>
      <div className="card-body pt-sm-3 pt-0">
        {/* Sidebar Backgrounds */}
        <div>
          <h6 className="mb-0">Sidebar Colors</h6>
        </div>
        <a href="javascript:void(0)" className="switch-trigger background-color">
          <div className="badge-colors my-2 text-start">
            <span className="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)"></span>
            <span className="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
            <span className="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
            <span className="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
            <span className="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
          </div>
        </a>
        {/* Sidenav Type */}
        <div className="mt-3">
          <h6 className="mb-0">Sidenav Type</h6>
          <p className="text-sm">Choose between 2 different sidenav types.</p>
        </div>
        <div className="d-flex">
          <button className="btn bg-gradient-primary w-100 px-3 mb-2 active" data-class="bg-slate-900" onclick="sidebarType(this)">Dark</button>
          <button className="btn bg-gradient-primary w-100 px-3 mb-2 ms-2" data-class="bg-white" onclick="sidebarType(this)">White</button>
        </div>
        <p className="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
        {/* Navbar Fixed */}
        <div className="mt-3">
          <h6 className="mb-0">Navbar Fixed</h6>
        </div>
        <div className="form-check form-switch ps-0">
          <input className="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)"/>
        </div>
        <hr className="horizontal dark my-sm-4"/>
        <a className="btn bg-gradient-dark w-100" href="https://www.creative-tim.com/product/corporate-ui-dashboard">Free Download</a>
        <a className="btn btn-outline-dark w-100" href="https://www.creative-tim.com/learning-lab/bootstrap/license/corporate-ui-dashboard">View documentation</a>
        <div className="w-100 text-center">
          <a className="github-button" href="https://github.com/creativetimofficial/corporate-ui-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/corporate-ui-dashboard on GitHub">Star</a>
          <h6 className="mt-3">Thank you for sharing!</h6>
          <a href="https://twitter.com/intent/tweet?text=Check%20Corporate%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fcorporate-ui-dashboard" className="btn btn-dark mb-0 me-2" target="_blank">
            <i className="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/corporate-ui-dashboard" className="btn btn-dark mb-0 me-2" target="_blank">
            <i className="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
          </a>
        </div>
      </div>
    </div>
  </div>
  </div>
  <Helmet>
      <script src="/assets/js/corporate-ui-dashboard.min.js" type="text/javascript"></script>
    </Helmet>
</div>
  );
}

export default App;

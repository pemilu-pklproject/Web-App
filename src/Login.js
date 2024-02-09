const Login = () => {
    return ( 
    
    <div className="container">
        <div className="row mt-8 justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                <div className="card z-index-0">
                    <div className="card-header text-center pt-4">
                        <h5>Silahkan Login</h5>
                    </div>
                    <div className="card-body">
                    <form role="form">
                        <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                        />
                        </div>
                        <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            aria-label="Password"
                        />
                        </div>
                        <div className="text-center">
                            <input type="submit" className="btn bg-gradient-dark w-100 my-4 mb-2" value="Login" />
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}
 
export default Login;
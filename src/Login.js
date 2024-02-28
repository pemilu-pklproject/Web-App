import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('admin');
    const [user, setUser] = useState(null);
    const history = useHistory();
    const [cookies, setCookie] = useCookies(['access_token']);

    const login = (e) => {
        e.preventDefault();

        if (role == "admin") {
            const url = 'http://localhost:8080/si-pemilu/api/v1/login/admin';
            const login = { "email":username, password };
            fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(login),
            }).then(res => {
                return res.json();
            })
            .then(data => {
                setUser(data);
                console.log(data);
                setCookie('access_token', data.access_token)
            })
            .catch(err => {
                console.log(err.message);
            });
        }else{
            const url = 'http://localhost:8080/si-pemilu/api/v1/login/kandidat';
            const login = { "nik":username, password };
            fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(login),
            }).then(res => {
                return res.json();
            })
            .then(data => {
                setUser(data);
                console.log(data);
            })
            .catch(err => {
                console.log(err.message);
            });
        }
    }

    useEffect(() => {
        if (user != null) {
            if (user.status == true) {
                if (role == 'admin') {
                    alert('Login berhasil, selamat datang admin')
                    history.push('/dashboardadmin')
                }else{
                    alert('Login berhasil, selamat datang kandidat')
                    history.push('/dashboardkandidat')
                }
            }else{
                alert(user.msg);
            }
        }
    }, [user]); 

    return ( 
    
    <div className="container">
        <div className="row mt-8 justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
                <div className="card z-index-0">
                    <div className="card-header text-center">
                        <h5>Silahkan Login</h5>
                    </div>
                    <div className="card-body">
                    <form onSubmit={login}>
                        <div className="mb-3 mt-n3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        </div>
                        <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>

                        <div className="mb-3">
                            <select 
                                className="form-select"
                                onChange={(e) => setRole(e.target.value)}
                                value={role}
                            >
                                <option value="admin">Login Sebagai Admin</option>
                                <option value="kandidat">Login Sebagai Kandidat</option>
                            </select>
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
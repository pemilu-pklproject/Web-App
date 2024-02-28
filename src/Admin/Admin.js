import { useState, useEffect } from 'react';
import useFetch from "../useFetch";
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Admin = () => {
    let i = 1;
    const [admin, setAdmin] = useState(null);
    const [id, setId] = useState(null);
    const [nama, setNama] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [cookies, setCookie] = useCookies(['access_token']);
    const history = useHistory();

    const getAllAdmin = async () =>{
      const url = 'http://localhost:8080/si-pemilu/api/v1/admin.json';
      fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${cookies.access_token}`
        }
        })
          .then(res => {
              if (!res.ok) {
                  throw Error('could not fetch the data for that resource');
              }
              return res.json();
          })
          .then(data => {
              setAdmin(data);
          })
          .catch(err => {
              console.log(err.message);
              history.push('/')
          });
      }

      useEffect(() => {
        getAllAdmin();
    }, []);

    const insertModal = () => {
      setNama('');
      setEmail('');
      setPassword('');
    }

    const insert = () => {
      const url = 'http://localhost:8080/si-pemilu/api/v1/admin/add';
      const newAdmin = { nama, email, password};
      fetch(url, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newAdmin),
      }).then(res => {
          return res.json();
      })
      .then(data => {
          console.log(data)
          window.location.href = "/admin";
      })
      .catch(err => {
          console.log(err.message);
      });
    }

    const editDeleteModal = async (admId) => {
      const url = 'http://localhost:8080/si-pemilu/api/v1/admin/' + admId + '.json';
      try {
        const response = await fetch(url);
        let data = await response.json();
        data = data[0];

        setId(admId);
        setNama(data.nama);
        setEmail(data.email);
        setPassword('');
      } catch (err) {
          console.log(err.message);
      }
    }

    const update = () => {
      const url = 'http://localhost:8080/si-pemilu/api/v1/admin/update/' + id;
      const newAdmin = { nama, email, password};
      fetch(url, {
        method: 'PUT',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newAdmin),
      }).then(res => {
          return res.json();
      })
      .then(data => {
          console.log(data)
          window.location.href = "/admin";
      })
      .catch(err => {
          console.log(err.message);
      });
    }

    const delet = () => {
      const url = 'http://localhost:8080/si-pemilu/api/v1/admin/delete/' + id;
      const newAdmin = { nama, email, password};
      fetch(url, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newAdmin),
      }).then(res => {
          return res.json();
      })
      .then(data => {
          console.log(data)
          window.location.href = "/admin";
      })
      .catch(err => {
          console.log(err.message);
      });
    }
    
    return ( 

        <div>
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                <div className="card-header pb-0">
                    <h6>Tabel Admin</h6>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#createModal" onClick={insertModal}>
                        <i class="fa fa-plus"></i>
                    </button>
                </div>
                <div className="card-body px-0 pt-0 pb-2">
                    <div className="table-responsive p-0">
                        <table className="table align-items-center mb-0">
                            <thead>
                            <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                No
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Nama
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Email
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Aksi
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {admin && admin.map((adm) => (
                              <tr>
                                  <td>
                                      <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>{i++}</p>
                                  </td>
                                  <td>
                                      <p className="text-xs font-weight-bold mb-0">{adm.nama}</p>
                                  </td>
                                  <td>
                                      <p className="text-xs font-weight-bold mb-0">{adm.email}</p>
                                  </td>
                                  <td className="align-middle">
                                      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => {editDeleteModal(adm.id)}}>
                                          <i class="fas fa-pencil-alt"></i>
                                      </button>
                                      &nbsp;
                                      <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => {editDeleteModal(adm.id)}}>
                                          <i class="far fa-trash-alt"></i>
                                      </button>
                                  </td>
                              </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        </div>

  {/* Create Modal */}
  <div
    className="modal fade"
    id="createModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style={{zIndex: 10000}}
  >
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Tambah Data Admin
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <form onSubmit={insert}>
        <div className="modal-body">
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="name" className="col-form-label">
                    Nama :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={nama} 
                    onChange={(e) => setNama(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="email" className="col-form-label">
                    Email :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="password" className="col-form-label">
                    Password :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="password"
                    className="form-control"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
            </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Tutup
          </button>
          <button type="submit" className="btn btn-success">
            Simpan Data Admin
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>

  {/* Edit Modal */}
  <div
    className="modal fade"
    id="editModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style={{zIndex: 10000}}
  >
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Ubah Data Admin
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <form onSubmit={update}>
        <div className="modal-body">
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="name" className="col-form-label">
                    Nama :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={nama} 
                    onChange={(e) => setNama(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="email" className="col-form-label">
                    Email :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="password" className="col-form-label">
                    Password :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="password"
                    className="form-control"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Tutup
          </button>
          <button type="submit" className="btn btn-warning">
            Simpan Perubahan
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>

  {/* Delete Modal */}
  <div
    className="modal fade"
    id="deleteModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style={{zIndex: 10000}}
  >
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Yakin Ingin Hapus Admin Ini?
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <form onSubmit={delet}>
        <div className="modal-body">
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="name" className="col-form-label">
                    Nama :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={nama} 
                    onChange={(e) => setNama(e.target.value)}
                    required
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="email" className="col-form-label">
                    Email :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="password" className="col-form-label">
                    Password :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="password"
                    className="form-control"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    disabled
                    />
                </div>
            </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Tutup
          </button>
          <button type="submit" className="btn btn-danger">
            Hapus Admin
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>

        </div>

    );
}
 
export default Admin;
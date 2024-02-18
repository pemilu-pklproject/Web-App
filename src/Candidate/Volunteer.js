import { useState, useEffect } from 'react';
import useFetch from "../useFetch";

const Volunteer = () => {
    const [nama, setNama] = useState('');
    const [nik, setNik] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [jenis_kelamin, setJenisKelamin] = useState('pria');
    const [no_hp, setHp] = useState('');
    const [role, setRole] = useState('relawan');

    const [id, setId] = useState(null);
    const [isRelawan, setIsRelawan] = useState();
    const [isSaksi, setIsSaksi] = useState();

    const id_kandidat = 1;

    const {data:relawans} = useFetch('http://localhost:8080/si-pemilu/api/v1/relawan/data/'+ id_kandidat +'.json');
    console.log(relawans);
    let i = 1;

    const insertModal = () => {
        setNama('');
        setNik('');
        setEmail('');
        setPassword('');
        setJenisKelamin('Pria');
        setHp('');
        setRole('relawan');
    }

    useEffect(() => {
        if (role == 'relawan') {
            setIsRelawan(true)
            setIsSaksi(false)
        }else if(role == 'saksi') {
            setIsRelawan(false)
            setIsSaksi(true)
        }else if(role == 'relawansaksi'){
            setIsRelawan(true)
            setIsSaksi(true)
        }
    }, [role]);


    const insert = (e) =>{
        e.preventDefault();

        const url = 'http://localhost:8080/si-pemilu/api/v1/relawan/add';
        const newVolunteer = { nama, email, password, jenis_kelamin, nik, no_hp, id_kandidat, isRelawan, isSaksi};

        console.log(newVolunteer);
        fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newVolunteer),
        }).then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            window.location.href = "/relawan";
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    const editDeleteModal = async (idRel) =>{
        const url = 'http://localhost:8080/si-pemilu/api/v1/relawan/' + idRel + '.json';
        try {
            const response = await fetch(url);
            let data = await response.json();
            data = data[0];
          
            setId(idRel);
            setNama(data.nama);
            setNik(data.nik);
            setEmail(data.email);
            setPassword('');
            setJenisKelamin(data.jenis_kelamin);
            setHp(data.no_hp);
          
            if (data.isRelawan && data.isSaksi) {
              setRole('relawansaksi');
            } else if (data.isSaksi) {
              setRole('saksi');
            } else {
              setRole('relawan');
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    const edit = (e) =>{
        e.preventDefault();

        const url = 'http://localhost:8080/si-pemilu/api/v1/relawan/update/' + id;
        const newVolunteer = { id, nama, email, password, jenis_kelamin, nik, no_hp, id_kandidat, isRelawan, isSaksi};

        fetch(url, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newVolunteer),
        }).then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            window.location.href = "/relawan";
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    const delet = (e) =>{
        e.preventDefault();

        const url = 'http://localhost:8080/si-pemilu/api/v1/relawan/delete/' + id;
        const newVolunteer = { nama, email, password, jenis_kelamin, nik, no_hp, id_kandidat, isRelawan, isSaksi};

        console.log(newVolunteer);
        fetch(url, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newVolunteer),
        }).then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            window.location.href = "/relawan";
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
                    <h6>Tabel Relawan</h6>
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
                                Data Diri
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Role
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Kontak
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Aksi
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {relawans && relawans.map((relawan) => (
                            <tr>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>{i++}</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{relawan.nama}</p>
                                    <p className="text-xs text-secondary mb-0">{relawan.nik}</p>
                                    <p className="text-xs text-secondary mb-0">{relawan.jenis_kelamin}</p>
                                </td>
                                <td>
                                    <p className="text-xs text-secondary mb-0">{relawan.isRelawan && 'Relawan'}</p>
                                    <p className="text-xs text-secondary mb-0">{relawan.isSaksi && 'Saksi'}</p>
                                </td>
                                <td>
                                    <p className="text-xs text-secondary mb-0">{relawan.no_hp}</p>
                                    <p className="text-xs text-secondary mb-0">{relawan.email}</p>
                                </td>
                                <td className="align-middle">
                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => {editDeleteModal(relawan.id)}}>
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => {editDeleteModal(relawan.id)}}>
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
            Tambah Data Relawan
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
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="nama" className="col-form-label">
                    Nama :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nama"
                    className="form-control"
                    value={nama} 
                    onChange={(e) => setNama(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="jeniskelamin" className="col-form-label">
                    Jenis Kelamin :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        id="jeniskelamin"
                        value={jenis_kelamin} 
                        onChange={(e) => setJenisKelamin(e.target.value)}
                        required>
                        <option value="Pria">Pria</option>
                        <option value="Wanita">Wanita</option>
                    </select>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="nik" className="col-form-label">
                    Nomor Induk Kependudukan :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nik"
                    className="form-control"
                    value={nik} 
                    onChange={(e) => setNik(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="nohp" className="col-form-label">
                    Nomor Handphone :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nohp"
                    className="form-control"
                    value={no_hp} 
                    onChange={(e) => setHp(e.target.value)}
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
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="role" className="col-form-label">
                    Role :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        id="role"
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}
                        required>
                        <option value="relawan">Relawan</option>
                        <option value="saksi">Saksi</option>
                        <option value="relawansaksi">Relawan Dan Saksi</option>
                    </select>
                </div>
            </div>
            {/* <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="kandidat" className="col-form-label">
                    Kandidat :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="kandidat">
                        {kandidat && kandidat.map((kandi) => (
                            <option value={kandi.id}>{kandi.nama}</option>
                        ))}
                    </select>
                </div>
            </div> */}
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
            Simpan Data Relawan
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
            Ubah Data Relawan
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <form onSubmit={edit}>
        <div className="modal-body">
            <input type="hidden" value={id}/>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="nama" className="col-form-label">
                    Nama :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nama"
                    className="form-control"
                    value={nama} 
                    onChange={(e) => setNama(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="jeniskelamin" className="col-form-label">
                    Jenis Kelamin :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        id="jeniskelamin"
                        value={jenis_kelamin} 
                        onChange={(e) => setJenisKelamin(e.target.value)}
                        required>
                        <option value="pria">Pria</option>
                        <option value="wanita">Wanita</option>
                    </select>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="nik" className="col-form-label">
                    Nomor Induk Kependudukan :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nik"
                    className="form-control"
                    value={nik} 
                    onChange={(e) => setNik(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="nohp" className="col-form-label">
                    Nomor Handphone :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nohp"
                    className="form-control"
                    value={no_hp} 
                    onChange={(e) => setHp(e.target.value)}
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
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="role" className="col-form-label">
                    Role :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        id="role"
                        value={role} 
                        onChange={(e) => setRole(e.target.value)}
                        required>
                        <option value="relawan">Relawan</option>
                        <option value="saksi">Saksi</option>
                        <option value="relawansaksi">Relawan Dan Saksi</option>
                    </select>
                </div>
            </div>
            {/* <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="kandidat" className="col-form-label">
                    Kandidat :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="kandidat">
                        <option selected value="Bambang">Bambang</option>
                        <option value="ilman">Ilman</option>
                        <option value="junaedi">Junaedi</option>
                    </select>
                </div>
            </div> */}
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
            Yakin Ingin Hapus Kandidat Ini?
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
            <input type="hidden" value={id}/>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="nama" className="col-form-label">
                    Nama :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nama"
                    className="form-control"
                    value={nama} 
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="jeniskelamin" className="col-form-label">
                    Jenis Kelamin :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        id="jeniskelamin"
                        value={jenis_kelamin} 
                        disabled>
                        <option value="pria">Pria</option>
                        <option value="wanita">Wanita</option>
                    </select>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="nik" className="col-form-label">
                    Nomor Induk Kependudukan :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nik"
                    className="form-control"
                    value={nik} 
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="nohp" className="col-form-label">
                    Nomor Handphone :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nohp"
                    className="form-control"
                    disabled
                    value={no_hp} 
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
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="role" className="col-form-label">
                    Role :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        id="role"
                        value={role} 
                        disabled>
                        <option value="relawan">Relawan</option>
                        <option value="saksi">Saksi</option>
                        <option value="relawansaksi">Relawan Dan Saksi</option>
                    </select>
                </div>
            </div>
            {/* <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="kandidat" className="col-form-label">
                    Kandidat :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="kandidat" disabled>
                        <option selected value="Bambang">Bambang</option>
                        <option value="ilman">Ilman</option>
                        <option value="junaedi">Junaedi</option>
                    </select>
                </div>
            </div> */}
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
            Hapus Relawan
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>

        </div>
    );
}
 
export default Volunteer;
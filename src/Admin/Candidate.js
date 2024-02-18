import { useState, useEffect } from 'react';
import useFetch from "../useFetch";

const Candidate = () => {
    const {data:jabatans} = useFetch('http://localhost:8080/si-pemilu/api/v1/calon-jabatan.json');
    
    const [kandidats, setKandidats] = useState(null);
    
    const [nama, setNama] = useState('');
    const [nik, setNik] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [jenis_kelamin, setJenisKelamin] = useState('pria');
    const [partai, setPartai] = useState('');
    const [noUrut, setNoUrut] = useState('');
    const [idJabatan, setIdJabatan] = useState(1);
    let idAdmin = 2;
    
    const [listProvinsi, setListProvinsi] = useState(null);
    const [listKabupatenKota, setListKabupatenKota] = useState(null);
    const [listKecamatan, setListKecamatan] = useState(null);
    const [listDesaKelurahan, setListDesaKelurahan] = useState(null);
    const [listDapil, setListDapil] = useState(null);
    
    const [kodeWilayah, setKodeWilayah] = useState(null);
    const [kodeProvinsi, setKodeProvinsi] = useState(null);
    const [kodeKabKot, setKodeKabKot] = useState(null);
    const [kodeKec, setKodeKec] = useState(null);
    const [kodeDes, setKodeDes] = useState(null);
    
    const [kodeDapil, setKodeDapil] = useState(null);
    
    const [id, setId] = useState(null);
    
    const [wilKabKotaVisibility, setWilKabKotaVisibility] = useState('');
    const [wilKecVisibility, setWilKecVisibility] = useState('');
    const [wilDesVisibility, setWilDesVisibility] = useState('');
    
    const [dapilVisibility, setDapilVisibility] = useState('none');
    
    let i = 1;
    
    // const loadJabatan = async () =>{
        //     const url = 'http://localhost:8080/si-pemilu/api/v1/calon-jabatan.json';
        //     try {
            //         const response = await fetch(url);
            //         let data = await response.json();
            //         data = data[0].id;
            
            //         setIdJabatan(data);
            
            //     } catch (err) {
                //         console.log(err.message);
                //     }
                // }
                
                // useEffect(() => {
                    //     loadJabatan();
                    //     console.log(idJabatan);
                    // }, []);
                    
    const loadWilayahDesaKelurahan = async (kodeKecamatan) =>{
        const url = 'http://localhost:8080/si-pemilu/api/v1/wilayah/kelurahan-desa/' + kodeKecamatan + '.json';
        try {
            const response = await fetch(url);
            let data = await response.json();
            let kode_desakelurahan = data[0].kode;
            
            setKodeDes(kode_desakelurahan);
            setListDesaKelurahan(data);
            
        } catch (err) {
            console.log(err.message);
        }
    }
    
    const loadWilayahKecamatan = async (kodeKabupatenKota) =>{
        const url = 'http://localhost:8080/si-pemilu/api/v1/wilayah/kecamatan/' + kodeKabupatenKota + '.json';
        try {
            const response = await fetch(url);
            let data = await response.json();
            let kode_kecamatan = data[0].kode;
            
            setKodeKec(kode_kecamatan);
            setListKecamatan(data);
            // loadWilayahDesaKelurahan(kode_kecamatan);
            
        } catch (err) {
            console.log(err.message);
        }
    }
    
    const loadWilayahKabupatenKota = async (kodeProv) =>{
        const url = 'http://localhost:8080/si-pemilu/api/v1/wilayah/kabupaten-kota/' + kodeProv + '.json';
        try {
            const response = await fetch(url);
            let data = await response.json();
            let kode_kabupatenkota = data[0].kode;
            
            setKodeKabKot(kode_kabupatenkota);
            setListKabupatenKota(data);
            // loadWilayahKecamatan(kode_kabupatenkota);
            
        } catch (err) {
            console.log(err.message);
        }
    }
    
    const loadDapil = async (idJabatan, kodeWilayah) =>{
        const url = 'http://localhost:8080/si-pemilu/api/v1/dapil/' + idJabatan + '/' + kodeWilayah + '.json';
        try {
            const response = await fetch(url);
            let data = await response.json();
            let kode_dapil = data[0].kode_dapil;
            
            if (kodeDapil == null) {
                setKodeDapil(kode_dapil);
            }
            setListDapil(data);
        } catch (err) {
            console.log(err.message);
        }
    }
    
    const loadWilayahProvinsi = async () =>{
        const url = 'http://localhost:8080/si-pemilu/api/v1/wilayah/provinsi.json';
        
        try {
            const response = await fetch(url);
            let data = await response.json();
            let kode_provinsi = data[0].kode;
            
            setListProvinsi(data);
            if (kodeProvinsi === null) {
                setKodeProvinsi(kode_provinsi);
                // loadWilayahKabupatenKota(kode_provinsi);
            }else{
                // loadWilayahKabupatenKota(kodeProvinsi);
            }
            
        } catch (err) {
            console.log(err.message);
        }
    }

    const getAllKandidat = async () =>{
        const url = 'http://localhost:8080/si-pemilu/api/v1/data/kandidat.json';

        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        })
        .then(data => {
            setKandidats(data);
        })
        .catch(err => {
            console.log(err.message);
        });
    }
    
    useEffect(() => {
        getAllKandidat();
    }, []);

    useEffect(() => {
        loadWilayahProvinsi();
    }, []);
    
    useEffect(() => {
        loadWilayahKabupatenKota(kodeProvinsi);
    }, [kodeProvinsi]);
    
    useEffect(() => {
        loadWilayahKecamatan(kodeKabKot);
    }, [kodeKabKot]);

    useEffect(() => {
        loadWilayahDesaKelurahan(kodeKec);
    }, [kodeKec]);

    useEffect(() => {
        if (idJabatan == 1 || idJabatan == 2 || idJabatan == 4 || idJabatan == 5) {
            setWilKabKotaVisibility('none');
            setWilKecVisibility('none');
            setWilDesVisibility('none');
        }else if (idJabatan == 6 || idJabatan == 7 || idJabatan == 8) {
            setWilKabKotaVisibility('');
            setWilKecVisibility('none');
            setWilDesVisibility('none');
        }else{
            setWilKabKotaVisibility('');
            setWilKecVisibility('');
            setWilDesVisibility('');
        }
    }, [idJabatan]);

    useEffect(() => {
        if (idJabatan == 1 || idJabatan == 2 || idJabatan == 4 || idJabatan == 5) {
            setKodeWilayah(kodeProvinsi);
        }else if (idJabatan == 6 || idJabatan == 7 || idJabatan == 8) {
            setKodeWilayah(kodeKabKot);
        }else{
            setKodeWilayah(kodeDes);
        }
    }, [idJabatan, kodeProvinsi, kodeKabKot, kodeDes]);

    useEffect(() => {
        if (idJabatan == 2 || idJabatan == 5 || idJabatan == 8) {
            setDapilVisibility('');
        }else{
            setDapilVisibility('none');
        }

        console.log(idJabatan, kodeProvinsi);

        if (idJabatan != null && kodeProvinsi != null) {
            loadDapil(idJabatan, kodeProvinsi);
        }
    }, [idJabatan, kodeProvinsi]);

    const insertModal = () =>{
        setNama('');
        setNik('');
        setEmail('');
        setIdJabatan(1);
        setPassword('');
        setJenisKelamin('pria');
        setPartai('');
        setNoUrut('');
        loadWilayahProvinsi();
    }

    const insertNewCandidate = (newCandidate) =>{
        fetch('http://localhost:8080/si-pemilu/api/v1/kandidat/add', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCandidate),
        }).then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            window.location.href = "/kandidat";
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    const insert = (e) =>{
        e.preventDefault();
        
        if (idJabatan == 2 || idJabatan == 5 || idJabatan == 8) {
            const newCandidate = {nama, nik, email, password, jenis_kelamin, partai, kode_dapil:kodeDapil, no_urut:noUrut, id_jabatan:idJabatan, id_admin:idAdmin, kode_wilayah:kodeWilayah};
            insertNewCandidate(newCandidate);
        }else{
            const newCandidate = {nama, nik, email, password, jenis_kelamin, partai, kode_dapil:null, no_urut:noUrut, id_jabatan:idJabatan, id_admin:idAdmin, kode_wilayah:kodeWilayah};
            insertNewCandidate(newCandidate);
        }
    }

    const editDeleteModal = (idKan) => {
        fetch('http://localhost:8080/si-pemilu/api/v1/kandidat/' + idKan + '.json')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setId(idKan);
            setNama(data.nama);
            setNik(data.nik);
            setEmail(data.email);
            setPassword('');
            setJenisKelamin(data.jenis_kelamin);
            setPartai(data.partai);
            setIdJabatan(data.id_jabatan);
            setNoUrut(data.no_urut);

            let wilayah = data.kode_wilayah.split('.');
            wilayah.push(null, null, null);
            console.log(wilayah);
            
            setKodeProvinsi(wilayah[0]);
            
            setTimeout(() => {
                setKodeKabKot(wilayah[0] + '.' + wilayah[1]);
            }, 100);
            setTimeout(() => {
                setKodeKec(wilayah[0] + '.' + wilayah[1] + '.' + wilayah[2]);
            }, 200);
            setTimeout(() => {
                setKodeDes(wilayah[0] + '.' + wilayah[1] + '.' + wilayah[2] + '.' + wilayah[3]);    
            }, 300);
            
            setKodeDapil(data.kode_dapil);
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    const update = (e) =>{
        e.preventDefault();

        const url = 'http://localhost:8080/si-pemilu/api/v1/kandidat/update/' + id;
        const newCandidate = {id, nama, nik, email, password, jenis_kelamin, partai, kode_dapil:kodeDapil, no_urut:noUrut, id_jabatan:idJabatan, id_admin:idAdmin, kode_wilayah:kodeWilayah};

        fetch(url, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newCandidate),
        }).then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            window.location.href = "/kandidat";
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    const delet = (e) =>{
        e.preventDefault();

        const url = 'http://localhost:8080/si-pemilu/api/v1/kandidat/delete/' + id;
        const deleteCandidate = {id, nama, nik, email, password, jenis_kelamin, partai, kode_dapil:kodeDapil, no_urut:noUrut, id_jabatan:idJabatan, id_admin:idAdmin, kode_wilayah:kodeWilayah};

        fetch(url, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(deleteCandidate),
        }).then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            window.location.href = "/kandidat";
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
                    <h6>Tabel Kandidat</h6>
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
                                Jabatan
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Admin
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Aksi
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {kandidats && kandidats.map((kandidat) => (
                            <tr>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>{i++}</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{kandidat.nama}</p>
                                    <p className="text-xs text-secondary mb-0">{kandidat.nik}</p>
                                    <p className="text-xs text-secondary mb-0">{kandidat.jenis_kelamin}</p>
                                    <p className="text-xs text-secondary mb-0">{kandidat.email}</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{kandidat.no_urut}</p>
                                    <p className="text-xs font-weight-bold mb-0">{kandidat.jbtn.jabatan}</p>
                                    <p className="text-xs text-secondary mb-0">{kandidat.partai}</p>
                                    <p className="text-xs text-secondary mb-0">{kandidat.wilayah.nama}</p>
                                    <p className="text-xs text-secondary mb-0">{kandidat.kode_dapil && kandidat.kandidat_dapil.nama_dapil}</p>
                                </td>
                                <td>
                                    <p className="text-xs text-weight mb-0">{kandidat.admin && kandidat.admin.nama}</p>
                                </td>
                                <td className="align-middle">
                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => {editDeleteModal(kandidat.id)}}>
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => {editDeleteModal(kandidat.id)}}>
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
            Tambah Data Kandidat
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
                        >
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
                    <label htmlFor="jabatan" className="col-form-label">
                    Jabatan :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        aria-label="Default select example" 
                        id="jabatan"
                        value={idJabatan}
                        onChange={(e) => setIdJabatan(e.target.value)}
                    >
                        { jabatans && jabatans.map((jabatan) => (
                            <option value={jabatan.id}>{jabatan.jabatan}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="wilayah" className="col-form-label">
                    Wilayah :
                    </label>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-2">
                            Provinsi
                        </div>
                        <div className="col-10">
                            <select 
                                class="form-select" 
                                aria-label="Default select example" 
                                id="provinsi"
                                value={kodeProvinsi}
                                onChange={(e) => setKodeProvinsi(e.target.value)}
                            >
                                { listProvinsi && listProvinsi.map((provinsi) => (
                                    <option value={provinsi.kode}>{provinsi.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3" style={{display:wilKabKotaVisibility}}>
                    <div className="row">
                        <div className="col-2">
                            Kabupaten / Kota
                        </div>
                        <div className="col-10">
                            <select 
                                class="form-select" 
                                aria-label="Default select example" 
                                id="provinsi"
                                value={kodeKabKot}
                                onChange={(e) => setKodeKabKot(e.target.value)}
                            >
                                { listKabupatenKota && listKabupatenKota.map((kabupatenKota) => (
                                    <option value={kabupatenKota.kode}>{kabupatenKota.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3" style={{display:wilKecVisibility}}>
                    <div className="row">
                        <div className="col-2">
                            Kecamatan
                        </div>
                        <div className="col-10">
                            <select 
                                class="form-select" 
                                aria-label="Default select example" 
                                id="provinsi"
                                value={kodeKec}
                                onChange={(e) => setKodeKec(e.target.value)}
                            >
                                { listKecamatan && listKecamatan.map((kecamatan) => (
                                    <option value={kecamatan.kode}>{kecamatan.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3" style={{display:wilDesVisibility}}>
                    <div className="row">
                        <div className="col-2">
                            Desa
                        </div>
                        <div className="col-10">
                            <select 
                                class="form-select" 
                                aria-label="Default select example" 
                                id="provinsi"
                                value={kodeDes}
                                onChange={(e) => setKodeDes(e.target.value)}
                            >
                                { listDesaKelurahan && listDesaKelurahan.map((desaKelurahan) => (
                                    <option value={desaKelurahan.kode}>{desaKelurahan.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center mt-3" style={{display:dapilVisibility}}>
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Dapil :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        aria-label="Default select example" 
                        id="provinsi"
                        value={kodeDapil}
                        onChange={(e) => setKodeDapil(e.target.value)}
                    >
                        { listDapil && listDapil.map((dapil) => (
                            <option value={dapil.kode_dapil}>{dapil.nama_dapil}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="nourut" className="col-form-label">
                    Nomor Urut :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nourut"
                    className="form-control"
                    value={noUrut} 
                    onChange={(e) => setNoUrut(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="partai" className="col-form-label">
                    Partai :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="partai"
                    className="form-control"
                    value={partai} 
                    onChange={(e) => setPartai(e.target.value)}
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
            Simpan Data Kandidat
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
            Ubah Data Kandidat
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
                        >
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
                    <label htmlFor="jabatan" className="col-form-label">
                    Jabatan :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        aria-label="Default select example" 
                        id="jabatan"
                        value={idJabatan}
                        onChange={(e) => setIdJabatan(e.target.value)}
                    >
                        { jabatans && jabatans.map((jabatan) => (
                            <option value={jabatan.id}>{jabatan.jabatan}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="wilayah" className="col-form-label">
                    Wilayah :
                    </label>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-2">
                            Provinsi
                        </div>
                        <div className="col-10">
                            <select 
                                class="form-select" 
                                aria-label="Default select example" 
                                id="provinsi"
                                value={kodeProvinsi}
                                onChange={(e) => setKodeProvinsi(e.target.value)}
                            >
                                { listProvinsi && listProvinsi.map((provinsi) => (
                                    <option value={provinsi.kode}>{provinsi.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3" style={{display:wilKabKotaVisibility}}>
                    <div className="row">
                        <div className="col-2">
                            Kabupaten / Kota
                        </div>
                        <div className="col-10">
                            <select 
                                class="form-select" 
                                aria-label="Default select example" 
                                id="provinsi"
                                value={kodeKabKot}
                                onChange={(e) => setKodeKabKot(e.target.value)}
                            >
                                { listKabupatenKota && listKabupatenKota.map((kabupatenKota) => (
                                    <option value={kabupatenKota.kode}>{kabupatenKota.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3" style={{display:wilKecVisibility}}>
                    <div className="row">
                        <div className="col-2">
                            Kecamatan
                        </div>
                        <div className="col-10">
                            <select 
                                class="form-select" 
                                aria-label="Default select example" 
                                id="provinsi"
                                value={kodeKec}
                                onChange={(e) => setKodeKec(e.target.value)}
                            >
                                { listKecamatan && listKecamatan.map((kecamatan) => (
                                    <option value={kecamatan.kode}>{kecamatan.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3" style={{display:wilDesVisibility}}>
                    <div className="row">
                        <div className="col-2">
                            Desa
                        </div>
                        <div className="col-10">
                            <select 
                                class="form-select" 
                                aria-label="Default select example" 
                                id="provinsi"
                                value={kodeDes}
                                onChange={(e) => setKodeDes(e.target.value)}
                            >
                                { listDesaKelurahan && listDesaKelurahan.map((desaKelurahan) => (
                                    <option value={desaKelurahan.kode}>{desaKelurahan.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center mt-3" style={{display:dapilVisibility}}>
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Dapil :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        aria-label="Default select example" 
                        id="provinsi"
                        value={kodeDapil}
                        onChange={(e) => setKodeDapil(e.target.value)}
                    >
                        { listDapil && listDapil.map((dapil) => (
                            <option value={dapil.kode_dapil}>{dapil.nama_dapil}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="nourut" className="col-form-label">
                    Nomor Urut :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nourut"
                    className="form-control"
                    value={noUrut} 
                    onChange={(e) => setNoUrut(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="partai" className="col-form-label">
                    Partai :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="partai"
                    className="form-control"
                    value={partai} 
                    onChange={(e) => setPartai(e.target.value)}
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
                        onChange={(e) => setJenisKelamin(e.target.value)}
                        disabled
                        >
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
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="jabatan" className="col-form-label">
                    Jabatan :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        aria-label="Default select example" 
                        id="jabatan"
                        value={idJabatan}
                        onChange={(e) => setIdJabatan(e.target.value)}
                        disabled
                    >
                        { jabatans && jabatans.map((jabatan) => (
                            <option value={jabatan.id}>{jabatan.jabatan}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="wilayah" className="col-form-label">
                    Wilayah :
                    </label>
                </div>
                <div className="col-12">
                    <div className="row">
                        <div className="col-2">
                            Provinsi
                        </div>
                        <div className="col-10">
                            <select 
                                class="form-select" 
                                aria-label="Default select example" 
                                id="provinsi"
                                value={kodeProvinsi}
                                onChange={(e) => setKodeProvinsi(e.target.value)}
                                disabled
                            >
                                { listProvinsi && listProvinsi.map((provinsi) => (
                                    <option value={provinsi.kode}>{provinsi.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3" style={{display:wilKabKotaVisibility}}>
                    <div className="row">
                        <div className="col-2">
                            Kabupaten / Kota
                        </div>
                        <div className="col-10">
                            <select 
                                class="form-select" 
                                aria-label="Default select example" 
                                id="provinsi"
                                value={kodeKabKot}
                                onChange={(e) => setKodeKabKot(e.target.value)}
                                disabled
                            >
                                { listKabupatenKota && listKabupatenKota.map((kabupatenKota) => (
                                    <option value={kabupatenKota.kode}>{kabupatenKota.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3" style={{display:wilKecVisibility}}>
                    <div className="row">
                        <div className="col-2">
                            Kecamatan
                        </div>
                        <div className="col-10">
                            <select 
                                class="form-select" 
                                aria-label="Default select example" 
                                id="provinsi"
                                value={kodeKec}
                                onChange={(e) => setKodeKec(e.target.value)}
                                disabled
                            >
                                { listKecamatan && listKecamatan.map((kecamatan) => (
                                    <option value={kecamatan.kode}>{kecamatan.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-3" style={{display:wilDesVisibility}}>
                    <div className="row">
                        <div className="col-2">
                            Desa
                        </div>
                        <div className="col-10">
                            <select 
                                class="form-select" 
                                aria-label="Default select example" 
                                id="provinsi"
                                value={kodeDes}
                                onChange={(e) => setKodeDes(e.target.value)}
                                disabled
                            >
                                { listDesaKelurahan && listDesaKelurahan.map((desaKelurahan) => (
                                    <option value={desaKelurahan.kode}>{desaKelurahan.nama}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row align-items-center mt-3" style={{display:dapilVisibility}}>
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Dapil :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        aria-label="Default select example" 
                        id="provinsi"
                        value={kodeDapil}
                        onChange={(e) => setKodeDapil(e.target.value)}
                        disabled
                    >
                        { listDapil && listDapil.map((dapil) => (
                            <option value={dapil.kode_dapil}>{dapil.nama_dapil}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="nourut" className="col-form-label">
                    Nomor Urut :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nourut"
                    className="form-control"
                    value={noUrut} 
                    onChange={(e) => setNoUrut(e.target.value)}
                    required
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="partai" className="col-form-label">
                    Partai :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="partai"
                    className="form-control"
                    value={partai} 
                    onChange={(e) => setPartai(e.target.value)}
                    required
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
            Hapus Kandidat
          </button>
        </div>
        </form>
      </div>
    </div>
  </div>

        </div>

     );
}
 
export default Candidate;
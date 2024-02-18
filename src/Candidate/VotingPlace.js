import { useState, useEffect } from 'react';
import useFetch from "../useFetch";

const VotingPlace = () => {
    let idKandidat = 3;
    let i = 1;
    const {data:tps} = useFetch('http://localhost:8080/si-pemilu/api/v1/kandidat/tps/' + idKandidat);
    const [listSaksi, setListSaksi] = useState(null);
    
    const [id, setId] = useState(null);
    const [nomor, setNomor] = useState(null);
    const [idSaksi, setIdSaksi] = useState(null);
    const [namaKpps, setNamaKpps] = useState(null);
    const [alamat, setAlamat] = useState(null);

    const [listProvinsi, setListProvinsi] = useState(null);
    const [listKabupatenKota, setListKabupatenKota] = useState(null);
    const [listKecamatan, setListKecamatan] = useState(null);
    const [listDesaKelurahan, setListDesaKelurahan] = useState(null);
    
    const [kodeProvinsi, setKodeProvinsi] = useState(null);
    const [kodeKabKot, setKodeKabKot] = useState(null);
    const [kodeKec, setKodeKec] = useState(null);
    const [kodeDes, setKodeDes] = useState(null);

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

    const loadSaksi = async () =>{
        const url = 'http://localhost:8080/si-pemilu/api/v1/relawan/saksi/' + idKandidat + '.json';
        
        try {
            const response = await fetch(url);
            let data = await response.json();
            let id_saksi = data[0].id;
            
            setListSaksi(data);
            setIdSaksi(id_saksi);
            
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        loadWilayahProvinsi();
        loadSaksi();
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

    const insertModal = () => {
        setNomor('');
        setAlamat('');
        setNamaKpps('');
    }
    
    const insert = (e) =>{
        e.preventDefault();

        const url = 'http://localhost:8080/si-pemilu/api/v1/tps/add';
        const newVotingPlace = { kode_wilayah:kodeDes, alamat, nomor, id_saksi:idSaksi, nama_kpps:namaKpps, id_kandidat:idKandidat};

        console.log(newVotingPlace);
        fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newVotingPlace),
        }).then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            window.location.href = "/tps";
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    const editDeleteModal = (idTps) => {
        fetch('http://localhost:8080/si-pemilu/api/v1/tps/' + idTps + '.json')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setId(idTps);
            setNomor(data[0].nomor);
            setAlamat(data[0].alamat);
            setIdSaksi(data[0].id_saksi);
            setNamaKpps(data[0].nama_kpps);

            let wilayah = data[0].kode_wilayah.split('.');
            
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
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    const update = (e) =>{
        e.preventDefault();

        const url = 'http://localhost:8080/si-pemilu/api/v1/tps/update/' + id;

        const newVotingPlace = { id, kode_wilayah:kodeDes, alamat, nomor, id_saksi:idSaksi, nama_kpps:namaKpps, id_kandidat:idKandidat};

        fetch(url, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newVotingPlace),
        }).then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            window.location.href = "/tps";
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    const delet = (e) =>{
        e.preventDefault();

        const url = 'http://localhost:8080/si-pemilu/api/v1/tps/delete/' + id;
        const deleteVotingPlace = { id, kode_wilayah:kodeDes, alamat, nomor, id_saksi:idSaksi, nama_kpps:namaKpps, id_kandidat:idKandidat};

        fetch(url, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(deleteVotingPlace),
        }).then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            window.location.href = "/tps";
        })
        .catch(err => {
            console.log(err.message);
        });
    }

    // console.log(tps);
    return ( 

        <div>
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                <div className="card-header pb-0">
                    <h6>Tabel TPS</h6>
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
                                Nomor
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Lokasi
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Saksi
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Kpps
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Aksi
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {tps && tps.map((tp) => (
                            <tr>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>{i++}</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{tp.nomor}</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">
                                        {tp.tps_wilayah.nama_provinsi + ', ' + tp.tps_wilayah.nama_kabupaten + ', ' + tp.tps_wilayah.nama_kecamatan + ', ' + tp.tps_wilayah.nama_desa+ ', ' + tp.alamat }
                                    </p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{tp.saksi.nama}</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{tp.nama_kpps}</p>
                                </td>
                                <td className="align-middle">
                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal" onClick={() => {editDeleteModal(tp.id)}}>
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" onClick={() => {editDeleteModal(tp.id)}}>
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
            Tambah Data TPS
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
                    <label htmlFor="nomor" className="col-form-label">
                    Nomor :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nomor"
                    className="form-control"
                    value={nomor} 
                    onChange={(e) => setNomor(e.target.value)}
                    required
                    />
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
                <div className="col-12 mt-3">
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
                <div className="col-12 mt-3">
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
                <div className="col-12 mt-3">
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
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="alamat" className="col-form-label">
                    Alamat :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="alamat"
                    className="form-control"
                    value={alamat} 
                    onChange={(e) => setAlamat(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="jabatan" className="col-form-label">
                    Saksi :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        aria-label="Default select example" 
                        id="jabatan"
                        value={idSaksi}
                        onChange={(e) => setIdSaksi(e.target.value)}
                    >
                        { listSaksi && listSaksi.map((saksi) => (
                            <option value={saksi.id}>{saksi.nama}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="kpps" className="col-form-label">
                    Nama KPPS :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="kpps"
                    className="form-control"
                    value={namaKpps} 
                    onChange={(e) => setNamaKpps(e.target.value)}
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
            Simpan Data TPS
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
            Ubah Data TPS
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
                    <label htmlFor="nomor" className="col-form-label">
                    Nomor :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nomor"
                    className="form-control"
                    value={nomor} 
                    onChange={(e) => setNomor(e.target.value)}
                    required
                    />
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
                <div className="col-12 mt-3">
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
                <div className="col-12 mt-3">
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
                <div className="col-12 mt-3">
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
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="alamat" className="col-form-label">
                    Alamat :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="alamat"
                    className="form-control"
                    value={alamat} 
                    onChange={(e) => setAlamat(e.target.value)}
                    required
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="jabatan" className="col-form-label">
                    Saksi :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        aria-label="Default select example" 
                        id="jabatan"
                        value={idSaksi}
                        onChange={(e) => setIdSaksi(e.target.value)}
                    >
                        { listSaksi && listSaksi.map((saksi) => (
                            <option value={saksi.id}>{saksi.nama}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="kpps" className="col-form-label">
                    Nama KPPS :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="kpps"
                    className="form-control"
                    value={namaKpps} 
                    onChange={(e) => setNamaKpps(e.target.value)}
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
            Yakin Ingin Hapus TPS Ini?
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
                    <label htmlFor="nomor" className="col-form-label">
                    Nomor :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nomor"
                    className="form-control"
                    value={nomor} 
                    onChange={(e) => setNomor(e.target.value)}
                    required
                    disabled
                    />
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
                <div className="col-12 mt-3">
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
                <div className="col-12 mt-3">
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
                <div className="col-12 mt-3">
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
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="alamat" className="col-form-label">
                    Alamat :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="alamat"
                    className="form-control"
                    value={alamat} 
                    onChange={(e) => setAlamat(e.target.value)}
                    required
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="jabatan" className="col-form-label">
                    Saksi :
                    </label>
                </div>
                <div className="col-12">
                    <select 
                        class="form-select" 
                        aria-label="Default select example" 
                        id="jabatan"
                        value={idSaksi}
                        onChange={(e) => setIdSaksi(e.target.value)}
                        disabled
                    >
                        { listSaksi && listSaksi.map((saksi) => (
                            <option value={saksi.id}>{saksi.nama}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="kpps" className="col-form-label">
                    Nama KPPS :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="kpps"
                    className="form-control"
                    value={namaKpps} 
                    onChange={(e) => setNamaKpps(e.target.value)}
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
 
export default VotingPlace;
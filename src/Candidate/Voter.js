import useFetch from "../useFetch";
import { useState } from 'react';

const Voter = () => {
    let i =1;
    const idKandidat = 3;
    const {data:pemilih} = useFetch('http://localhost:8080/si-pemilu/api/v1/kandidat/pemilih/' + idKandidat + '.json');
    console.log(pemilih)

    const [nama, setNama] = useState(null);
    const [nik, setNik] = useState(null);
    const [jenisKelamin, setJenisKelamin] = useState(null);
    const [hp, setHp] = useState(null);
    const [email, setEmail] = useState(null);
    const [alamat, setAlamat] = useState(null);
    const [rtRw, setRtRw] = useState(null);
    const [relawan, setRelawan] = useState(null);
    const [tps, setTps] = useState(null);
    const [wilayah, setWilayah] = useState(null);

    const detail = async (idPemilih) =>{
        const url = 'http://localhost:8080/si-pemilu/api/v1/pemilih/' + idPemilih + '.json';
        try {
            const response = await fetch(url);
            let data = await response.json();
            data = data[0];
            
            setNama(data.nama);
            setNik(data.nik);
            setHp(data.no_hp);
            setJenisKelamin(data.jenis_kelamin);
            setEmail(data.email);
            setAlamat(data.alamat);
            setRtRw(data.rt_rw);
            setRelawan(data.relawan.nama);
            setWilayah(data.pemilih_wilayah.nama_provinsi + ', ' + data.pemilih_wilayah.nama_kabupaten + ', ' + data.pemilih_wilayah.nama_kecamatan + ', ' + data.pemilih_wilayah.nama_desa);
        } catch (err) {
            console.log(err.message);
        }
    }

    return ( 
        <div>
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                <div className="card-header pb-0">
                    <h6>Tabel Pemilih</h6>
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
                                Relawan
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Detail
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {pemilih && pemilih.map((p) => (
                            <tr>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>{i++}</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{p.nama}</p>
                                    <p className="text-xs text-secondary mb-0">{p.nik}</p>
                                    <p className="text-xs text-secondary mb-0">{p.jenis_kelamin}</p>
                                    <p className="text-xs text-secondary mb-0">{p.no_hp}</p>
                                    <p className="text-xs text-secondary mb-0">{p.email}</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{p.relawan.nama}</p>
                                </td>
                                <td className="align-middle">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal" onClick={() => {detail(p.id)}}>
                                        <i class="fas fa-list-alt"></i>
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

  {/* Info Modal */}
  <div
    className="modal fade"
    id="detailModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style={{zIndex: 10000}}
  >
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">
            Detail Data Pemilih
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
            <div className="row align-items-center">
                <div className="col-12">
                    <p className="col-form-label">
                    Nama :
                    </p>
                </div>
                <div className="col-12">
                    <p>{nama}</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <p className="col-form-label">
                    Nomor Induk Kependudukan :
                    </p>
                </div>
                <div className="col-12">
                    <p>{nik}</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <p className="col-form-label">
                    Jenis Kelamin :
                    </p>
                </div>
                <div className="col-12">
                    <p>{jenisKelamin}</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <p className="col-form-label">
                    Nomor Hp :
                    </p>
                </div>
                <div className="col-12">
                    <p>{hp}</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <p className="col-form-label">
                    Email :
                    </p>
                </div>
                <div className="col-12">
                    <p>{email}</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <p className="col-form-label">
                    Wilayah :
                    </p>
                </div>
                <div className="col-12">
                    <p>{wilayah}</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <p className="col-form-label">
                    Alamat :
                    </p>
                </div>
                <div className="col-12">
                    <p>{alamat}</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <p className="col-form-label">
                    RT / RW :
                    </p>
                </div>
                <div className="col-12">
                    <p>{rtRw}</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <p className="col-form-label">
                    Relawan :
                    </p>
                </div>
                <div className="col-12">
                    <p>{relawan}</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <p className="col-form-label">
                    Tps :
                    </p>
                </div>
                <div className="col-12">
                    <p>{tps}</p>
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
        </div>
      </div>
    </div>
  </div>

    </div>
    );
}
 
export default Voter;
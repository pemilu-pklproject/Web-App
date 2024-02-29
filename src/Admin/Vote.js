import { useState, useEffect } from 'react';
import useFetch from "../useFetch";

const Vote = () => {
    const {data:pemilihan} = useFetch('http://localhost:8080/si-pemilu/api/v1/kandidat/suara/all.json');
    console.log(pemilihan);
    let i = 1;
    return ( 
    <div>
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                <div className="card-header pb-0">
                    <h6>Tabel Hasil Pemilihan</h6>
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
                                Kandidat
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Jabatan
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Wilayah / Dapil
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Total Suara
                                </th>
                                {/* <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Detail
                                </th> */}
                            </tr>
                            </thead>
                            <tbody>
                            {pemilihan && pemilihan.map((p) => (
                            <tr>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>{i++}</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{p.nama}</p>
                                    <p className="text-xs font-weight-bold mb-0">{p.nik}</p>
                                    <p className="text-xs font-weight-bold mb-0">{p.email}</p>
                                    <p className="text-xs font-weight-bold mb-0">{p.jenis_kelamin}</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{p.no_urut}</p>
                                    <p className="text-xs font-weight-bold mb-0">{p.jbtn.jabatan}</p>
                                    <p className="text-xs font-weight-bold mb-0">{p.partai}</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">{p.wilayah.nama}</p>
                                    <p className="text-xs font-weight-bold mb-0">{p.kandidat_dapil && "" + p.kandidat_dapil.nama_dapil}</p>
                                </td>
                                <td className="align-middle">
                                    <p className="text-xs font-weight-bold mb-0">{p.kandidat_total[0] ? p.kandidat_total[0].total_suara : "0"}</p>
                                </td>
                                {/* <td className="align-middle">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal">
                                        <i class="fas fa-list-alt"></i>
                                    </button>
                                </td> */}
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
            Detail Data Pemilihan
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
                    <label htmlFor="kandidat" className="col-form-label">
                    Kandidat :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="kandidat"
                    value="Bambang"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Saksi :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="staticEmail"
                    value="Jono"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="notps" className="col-form-label">
                    Nomor TPS :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="notps"
                    value="002"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Dapil TPS :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="staticEmail"
                    value="dapil"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Total Suara:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="staticEmail"
                    value="200"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Dokumen :
                    </label>
                </div>
                <div className="col-12">
                    <img src="../assets/img/team-2.jpg" alt="" width="200"/>
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
 
export default Vote;
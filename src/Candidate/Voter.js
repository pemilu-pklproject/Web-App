const Voter = () => {
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
                                Data Pemilihan
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Detail
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>1</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">Roni</p>
                                    <p className="text-xs text-secondary mb-0">1278823823820</p>
                                    <p className="text-xs text-secondary mb-0">Laki-Laki</p>
                                    <p className="text-xs text-secondary mb-0">081388001390</p>
                                    <p className="text-xs text-secondary mb-0">roni@gmail.com</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">Joni</p>
                                    <p className="text-xs text-secondary mb-0">Kota Medan</p>
                                    <p className="text-xs text-secondary mb-0">ACEH</p>
                                </td>
                                <td className="align-middle">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal">
                                        <i class="fas fa-list-alt"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>2</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">Riko</p>
                                    <p className="text-xs text-secondary mb-0">1278823023820</p>
                                    <p className="text-xs text-secondary mb-0">Laki-Laki</p>
                                    <p className="text-xs text-secondary mb-0">0813729272947</p>
                                    <p className="text-xs text-secondary mb-0">roki@gmail.com</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">Joni</p>
                                    <p className="text-xs text-secondary mb-0">Kota Medan</p>
                                    <p className="text-xs text-secondary mb-0">ACEH</p>
                                </td>
                                <td className="align-middle">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal">
                                        <i class="fas fa-list-alt"></i>
                                    </button>
                                </td>
                            </tr>
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
                    <label htmlFor="nama" className="col-form-label">
                    Nama :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="nama"
                    value="Boni"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="nik" className="col-form-label">
                    Nomor Induk Kependudukan :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="nik"
                    value="1278232030029"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="jeniskelamin" className="col-form-label">
                    Jenis Kelamin :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="jeniskelamin"
                    value="Laki-Laki"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="nohp" className="col-form-label">
                    Nomor Hp :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="nohp"
                    value="0813131980800"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="email" className="col-form-label">
                    Email :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="email"
                    value="boni@gmail.com"
                    />
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
                    readOnly
                    className="form-control-plaintext p-2"
                    id="alamat"
                    value="Jalan Kenangan No.12, Kota Medan, Sumatera Utara, 20091"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="nama" className="col-form-label">
                    RT / RW :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="nama"
                    value="002 / 000"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="relawan" className="col-form-label">
                    Relawan :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="relawan"
                    value="Joni"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="tps" className="col-form-label">
                    Tps :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="tps"
                    value="Tps 002"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="wilayah" className="col-form-label">
                    Wilayah :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    readOnly
                    className="form-control-plaintext p-2"
                    id="wilayah"
                    value="ACEH "
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
        </div>
      </div>
    </div>
  </div>

    </div>
    );
}
 
export default Voter;
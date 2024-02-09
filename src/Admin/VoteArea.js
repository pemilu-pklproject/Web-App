const VoteArea = () => {
    return ( 
        
        <div>
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                <div className="card-header pb-0">
                    <h6>Tabel Dapil</h6>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#createModal">
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
                                Data Dapil
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Wilayah Dapil
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Aksi
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>1</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">1101</p>
                                    <p className="text-xs text-secondary mb-0">DPR RI</p>
                                    <p className="text-xs text-secondary mb-0">ACEH I</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">1101</p>
                                    <p className="text-xs text-secondary mb-0">Kabupaten/Kota</p>
                                    <p className="text-xs text-secondary mb-0">ACEH SELATAN</p>
                                </td>
                                <td className="align-middle">
                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal">
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                        <i class="far fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>1</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">1101</p>
                                    <p className="text-xs text-secondary mb-0">DPR RI</p>
                                    <p className="text-xs text-secondary mb-0">ACEH I</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">1102</p>
                                    <p className="text-xs text-secondary mb-0">Kabupaten/Kota</p>
                                    <p className="text-xs text-secondary mb-0">ACEH TENGGARA</p>
                                </td>
                                <td className="align-middle">
                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal">
                                        <i class="fas fa-pencil-alt"></i>
                                    </button>
                                    &nbsp;
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                        <i class="far fa-trash-alt"></i>
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
            Tambah Data Dapil
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
                    <label htmlFor="kodedapil" className="col-form-label">
                    Kode Dapil:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="kodedapil"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="jenisdapil" className="col-form-label">
                    Jenis Dapil:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="jenisdapil"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="namadapil" className="col-form-label">
                    Nama Dapil:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="namadapil"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="kodewilayah" className="col-form-label">
                    Kode Wilayah:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="kodewilayah"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="jeniskelamin" className="col-form-label">
                    Tingkatan Wilayah :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="jeniskelamin">
                        <option selected value="kabupaten/kota">Kabupaten/Kota</option>
                        <option value="provinsi">Provinsi</option>
                        <option value="kecamatan">Kecamatan</option>
                        <option value="kelurahan/desa">Kelurahan/Desa</option>
                    </select>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="namawilayah" className="col-form-label">
                    Nama Wilayah:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="namawilayah"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
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
          <button type="button" className="btn btn-success">
            Simpan Data Dapil
          </button>
        </div>
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
            Ubah Data Dapil
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
                    <label htmlFor="kodedapil" className="col-form-label">
                    Kode Dapil:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="kodedapil"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="1101"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="jenisdapil" className="col-form-label">
                    Jenis Dapil:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="jenisdapil"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="DPR DRI"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="namadapil" className="col-form-label">
                    Nama Dapil:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="namadapil"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="ACEH I"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="kodewilayah" className="col-form-label">
                    Kode Wilayah:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="kodewilayah"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="1101"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="jeniskelamin" className="col-form-label">
                    Tingkatan Wilayah :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="jeniskelamin">
                        <option selected value="kabupaten/kota">Kabupaten/Kota</option>
                        <option value="provinsi">Provinsi</option>
                        <option value="kecamatan">Kecamatan</option>
                        <option value="kelurahan/desa">Kelurahan/Desa</option>
                    </select>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="namawilayah" className="col-form-label">
                    Nama Wilayah:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="namawilayah"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="ACEH SELATAN"
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
          <button type="button" className="btn btn-warning">
            Simpan Perubahan
          </button>
        </div>
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
            Yakin Ingin Hapus Dapil Ini?
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
                    <label htmlFor="kodedapil" className="col-form-label">
                    Kode Dapil:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="kodedapil"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="1101"
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="jenisdapil" className="col-form-label">
                    Jenis Dapil:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="jenisdapil"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="DPR DRI"
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="namadapil" className="col-form-label">
                    Nama Dapil:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="namadapil"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="ACEH I"
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="kodewilayah" className="col-form-label">
                    Kode Wilayah:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="kodewilayah"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="1101"
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="jeniskelamin" className="col-form-label">
                    Tingkatan Wilayah :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="jeniskelamin" disabled>
                        <option selected value="kabupaten/kota">Kabupaten/Kota</option>
                        <option value="provinsi">Provinsi</option>
                        <option value="kecamatan">Kecamatan</option>
                        <option value="kelurahan/desa">Kelurahan/Desa</option>
                    </select>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-12">
                    <label htmlFor="namawilayah" className="col-form-label">
                    Nama Wilayah:
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="namawilayah"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="ACEH SELATAN"
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
          <button type="button" className="btn btn-danger">
            Hapus Dapil
          </button>
        </div>
      </div>
    </div>
  </div>

    </div>

     );
}
 
export default VoteArea;
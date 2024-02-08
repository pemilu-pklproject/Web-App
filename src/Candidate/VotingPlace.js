const VotingPlace = () => {
    return ( 

        <div>
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                <div className="card-header pb-0">
                    <h6>Tabel TPS</h6>
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
                                Nomor
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Daerah Pilih
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
                                    <p className="text-xs font-weight-bold mb-0">002</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">Jakarta</p>
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
                                    <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>2</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">003</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">Jakarta</p>
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
                                    <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>3</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">003</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">Jakarta</p>
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
            Tambah Data TPS
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
                    <label htmlFor="nomor" className="col-form-label">
                    Nomor :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nomor"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Daerah Pilih :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="dapil">
                        <option selected value="jakarta">Jakarta</option>
                        <option value="medan">Medan</option>
                    </select>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Saksi :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="dapil">
                        <option selected value="joni">Joni</option>
                        <option value="jono">Jono</option>
                    </select>
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
            Simpan Data Kandidat
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
            Ubah Data Kandidat
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
                    <label htmlFor="nomor" className="col-form-label">
                    Nomor :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nomor"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="002"
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Daerah Pilih :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="dapil">
                        <option selected value="jakarta">Jakarta</option>
                        <option value="medan">Medan</option>
                    </select>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Saksi :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="dapil">
                        <option selected value="joni">Joni</option>
                        <option value="jono">Jono</option>
                    </select>
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
            Yakin Ingin Hapus Kandidat Ini?
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
                    <label htmlFor="nomor" className="col-form-label">
                    Nomor :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nomor"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="002"
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Daerah Pilih :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="dapil" disabled>
                        <option selected value="jakarta">Jakarta</option>
                        <option value="medan">Medan</option>
                    </select>
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="dapil" className="col-form-label">
                    Saksi :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="dapil" disabled>
                        <option selected value="joni">Joni</option>
                        <option value="jono">Jono</option>
                    </select>
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
            Hapus Kandidat
          </button>
        </div>
      </div>
    </div>
  </div>

        </div>

    );
}
 
export default VotingPlace;
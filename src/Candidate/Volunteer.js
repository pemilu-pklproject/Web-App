const Volunteer = () => {
    return ( 
        <div>
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                <div className="card-header pb-0">
                    <h6>Tabel Relawan</h6>
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
                                Data Diri
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Role
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Data Login
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
                                    <p className="text-xs font-weight-bold mb-0">Joni</p>
                                    <p className="text-xs text-secondary mb-0">1272929382939</p>
                                    <p className="text-xs text-secondary mb-0">Laki-Laki</p>
                                    <p className="text-xs text-secondary mb-0">081377309908</p>
                                </td>
                                <td>
                                    <p className="text-xs text-secondary mb-0">Relawan</p>
                                    <p className="text-xs text-secondary mb-0">Saksi</p>
                                </td>
                                <td>
                                    <p className="text-xs text-secondary mb-0">joniasasd@gmail.com</p>
                                    <p className="text-xs text-secondary mb-0">joni</p>
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
                                    <p className="text-xs font-weight-bold mb-0">Jono</p>
                                    <p className="text-xs text-secondary mb-0">1272928892939</p>
                                    <p className="text-xs text-secondary mb-0">Laki-Laki</p>
                                    <p className="text-xs text-secondary mb-0">081377309990</p>
                                </td>
                                <td>
                                    <p className="text-xs text-secondary mb-0">Saksi</p>
                                </td>
                                <td>
                                    <p className="text-xs text-secondary mb-0">jonoasasd@gmail.com</p>
                                    <p className="text-xs text-secondary mb-0">jono</p>
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
            Tambah Data Relawan
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
                    id="nama"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
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
                    <select class="form-select" aria-label="Default select example" id="jeniskelamin">
                        <option selected value="l">Laki-Laki</option>
                        <option value="p">Perempuan</option>
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
                    aria-describedby="passwordHelpInline"
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
                    aria-describedby="passwordHelpInline"
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
                    aria-describedby="passwordHelpInline"
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
                    aria-describedby="passwordHelpInline"
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="jeniskelamin" className="col-form-label">
                    Role :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="jeniskelamin">
                        <option selected value="r">Relawan</option>
                        <option value="s">Saksi</option>
                        <option value="rs">Relawan Dan Saksi</option>
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
            Simpan Data Relawan
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
            Ubah Data Relawan
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
                    id="nama"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="Joni"
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
                    <select class="form-select" aria-label="Default select example" id="jeniskelamin">
                        <option selected value="l">Laki-Laki</option>
                        <option value="p">Perempuan</option>
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
                    aria-describedby="passwordHelpInline"
                    value="12728322302382"
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
                    aria-describedby="passwordHelpInline"
                    value="0813138193819"
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
                    aria-describedby="passwordHelpInline"
                    value="joni@gmail.com"
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
                    aria-describedby="passwordHelpInline"
                    value="joni"
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="jeniskelamin" className="col-form-label">
                    Role :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="jeniskelamin">
                        <option selected value="r">Relawan</option>
                        <option value="s">Saksi</option>
                        <option value="rs">Relawan Dan Saksi</option>
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
                    <label htmlFor="nama" className="col-form-label">
                    Nama :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="nama"
                    className="form-control"
                    aria-describedby="passwordHelpInline"
                    value="Joni"
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
                    <select class="form-select" aria-label="Default select example" id="jeniskelamin" disabled>
                        <option selected value="l">Laki-Laki</option>
                        <option value="p">Perempuan</option>
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
                    aria-describedby="passwordHelpInline"
                    value="12728322302382"
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
                    aria-describedby="passwordHelpInline"
                    value="0813138193819"
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
                    aria-describedby="passwordHelpInline"
                    value="joni@gmail.com"
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
                    aria-describedby="passwordHelpInline"
                    value="joni"
                    disabled
                    />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-12">
                    <label htmlFor="jeniskelamin" className="col-form-label">
                    Role :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="jeniskelamin" disabled>
                        <option selected value="r">Relawan</option>
                        <option value="s">Saksi</option>
                        <option value="rs">Relawan Dan Saksi</option>
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
            Hapus Relawan
          </button>
        </div>
      </div>
    </div>
  </div>

        </div>
    );
}
 
export default Volunteer;
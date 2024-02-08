const Candidate = () => {
    return ( 
        <div>
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                <div className="card-header pb-0">
                    <h6>Tabel Kandidat</h6>
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
                                Jabatan
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
                                    <p className="text-xs font-weight-bold mb-0">Bambang</p>
                                    <p className="text-xs text-secondary mb-0">1272929382939</p>
                                    <p className="text-xs text-secondary mb-0">Laki-Laki</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">01</p>
                                    <p className="text-xs font-weight-bold mb-0">Gubernur</p>
                                    <p className="text-xs text-secondary mb-0">Partai Hanura</p>
                                    <p className="text-xs text-secondary mb-0">Kota Medan</p>
                                </td>
                                <td>
                                    <p className="text-xs text-secondary mb-0">bambangganteng@gmail.com</p>
                                    <p className="text-xs text-secondary mb-0">bambanggans</p>
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
                                    <p className="text-xs font-weight-bold mb-0">Ilman</p>
                                    <p className="text-xs text-secondary mb-0">1272929380939</p>
                                    <p className="text-xs text-secondary mb-0">Laki-Laki</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">02</p>
                                    <p className="text-xs font-weight-bold mb-0">Gubernur</p>
                                    <p className="text-xs text-secondary mb-0">Partai Demokrat</p>
                                    <p className="text-xs text-secondary mb-0">Kota Medan</p>
                                </td>
                                <td>
                                    <p className="text-xs text-secondary mb-0">ilmangans@gmail.com</p>
                                    <p className="text-xs text-secondary mb-0">ilman</p>
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
                                    <p className="text-xs font-weight-bold mb-0">Junaedi</p>
                                    <p className="text-xs text-secondary mb-0">1288929382939</p>
                                    <p className="text-xs text-secondary mb-0">Laki-Laki</p>
                                </td>
                                <td>
                                    <p className="text-xs font-weight-bold mb-0">03</p>
                                    <p className="text-xs font-weight-bold mb-0">Gubernur</p>
                                    <p className="text-xs text-secondary mb-0">Partai Golkar</p>
                                    <p className="text-xs text-secondary mb-0">Kota Medan</p>
                                </td>
                                <td>
                                    <p className="text-xs text-secondary mb-0">junaedisimalungun@gmail.com</p>
                                    <p className="text-xs text-secondary mb-0">junaedi</p>
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
            Tambah Data Kandidat
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
                    <label htmlFor="jabatan" className="col-form-label">
                    Jabatan :
                    </label>
                </div>
                <div className="col-12">
                    <select class="form-select" aria-label="Default select example" id="jabatan">
                        <option selected value="presiden">Presiden</option>
                        <option value="gubernur">Gubernur</option>
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
                    aria-describedby="passwordHelpInline"
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
                    value="bambang"
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
                    value="bambang@gmail.com"
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
                    value="bambangtest"
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
                    <select class="form-select" aria-label="Default select example" id="jabatan">
                        <option selected value="presiden">Presiden</option>
                        <option value="gubernur">Gubernur</option>
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
                    aria-describedby="passwordHelpInline"
                    value="01"
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
                    aria-describedby="passwordHelpInline"
                    value="Partai Hanura"
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
                    value="bambang"
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
                    value="bambang@gmail.com"
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
                    value="bambangtest"
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
                    <select class="form-select" aria-label="Default select example" id="jabatan" disabled>
                        <option selected value="presiden">Presiden</option>
                        <option value="gubernur">Gubernur</option>
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
                    aria-describedby="passwordHelpInline"
                    value="01"
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
                    aria-describedby="passwordHelpInline"
                    value="Partai Hanura"
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
            Hapus Kandidat
          </button>
        </div>
      </div>
    </div>
  </div>

        </div>

     );
}
 
export default Candidate;
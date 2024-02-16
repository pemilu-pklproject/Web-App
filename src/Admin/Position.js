import { useState } from 'react';
import useFetch from "../useFetch";

const Position = () => {
    const [jabatan, setJabatan] = useState('');
    
    const {data:jbtn} = useFetch('http://localhost:8080/si-pemilu/api/v1/calon-jabatan.json');
    // console.log(jbtn);
    let i = 1;

    const insertModal = () =>{
      setJabatan('');
    }

    const insert = (e) =>{
      e.preventDefault();
      console.log('test');
    }

    return ( 
    <div>
        <div className="row">
            <div className="col-12">
                <div className="card mb-4">
                <div className="card-header pb-0">
                    <h6>Tabel Jabatan</h6>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#createModal"  onClick={insertModal}>
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
                                Jabatan
                                </th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Aksi
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {jbtn && jbtn.map((jbn) => (
                              <tr>
                                  <td>
                                      <p className="text-xs font-weight-bold mb-0" style={{marginLeft:'17px'}}>{i++}</p>
                                  </td>
                                  <td>
                                      <p className="text-xs font-weight-bold mb-0">{jbn.jabatan}</p>
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
            Tambah Data Jabatan
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
                    <label htmlFor="jabatan" className="col-form-label">
                    Jabatan :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="jabatan"
                    className="form-control"
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}
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
            Simpan Data Jabatan
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
            Ubah Data Jabatan
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
                    <label htmlFor="jabatan" className="col-form-label">
                    Jabatan :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="jabatan"
                    className="form-control"
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}
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
            Yakin Ingin Hapus Jabatan Ini?
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
                    <label htmlFor="jabatan" className="col-form-label">
                    Jabatan :
                    </label>
                </div>
                <div className="col-12">
                    <input
                    type="text"
                    id="jabatan"
                    className="form-control"
                    value={jabatan}
                    onChange={(e) => setJabatan(e.target.value)}
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
            Hapus Jabatan
          </button>
        </div>
      </div>
    </div>
  </div>

    </div>
    );
}
 
export default Position;
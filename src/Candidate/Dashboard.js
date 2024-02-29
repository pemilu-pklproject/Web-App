import useFetch from "../useFetch";

const Dashboard = () => {
  const {data:pemilihan} = useFetch('http://localhost:8080/si-pemilu/api/v1/kandidat/suara/all.json');
  
    return ( 
      <div>
        <div className="row">
        {pemilihan && pemilihan.map((p) => (
          <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4 mt-3">
            <div className="card">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-8">
                    <div className="numbers">
                      <p className="text-primary text-sm mb-0 text-uppercase font-weight-bold">{p.nama}</p>
                      <h5 className="font-weight-bolder">
                        {p.kandidat_total[0] ? p.kandidat_total[0].total_suara : "0"}
                      </h5>
                      <p className="mb-0">
                        <span className="text-success text-sm font-weight-bolder">{p.jbtn.jabatan}</span> {p.wilayah.nama}
                      </p>
                      <p className="mb-0">
                        <span className="text-warning text-sm font-weight-bolder">{p.kandidat_dapil && "Dapil " + p.kandidat_dapil.nama_dapil}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
     );
}
 
export default Dashboard;
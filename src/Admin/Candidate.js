import useFetch from "../useFetch";

const Dashboard = () => {
    const idKandidat = 3;
    const {data:pemilihan} = useFetch('http://localhost:8080/si-pemilu/api/v1/tps/hasil/' + idKandidat + '.json');
    console.log(pemilihan)
    return ( 
        <div>
            <div className="row">
            {pemilihan && pemilihan.map((p) => (
                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4 mt-3">
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="row">
                                <div class="col-8">
                                    <div class="numbers">
                                        <p class="text-sm mb-0 text-uppercase font-weight-bold">TPS {p.nomor}</p>
                                        <h5 class="font-weight-bolder">
                                        {p.suara ? p.suara.total : "0"}
                                        </h5>
                                        <p class="text-sm mb-0">
                                        {p.tps_wilayah.nama_provinsi + ', ' + p.tps_wilayah.nama_kabupaten + ', ' + p.tps_wilayah.nama_kecamatan + ', ' + p.tps_wilayah.nama_desa}
                                        </p>
                                        <p class="font-weight-bolder mb-0">
                                        {p.saksi.nama}
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
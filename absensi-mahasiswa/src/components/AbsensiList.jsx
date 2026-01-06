import { useEffect, useState } from "react";
import api from "../api.js";
import AbsensiForm from "./AbsensiForm";

function AbsensiList() {
  const [data, setData] = useState([]);

  const loadData = () => {
    api.get("/absensi")
      .then(res => setData(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <AbsensiForm onSuccess={loadData} />

<div className="mt-4">
  <h4 className="mb-3">Daftar Absensi</h4>

  <div className="table-responsive">
    <table className="table table-striped table-bordered align-middle">
      <thead className="table-dark">
        <tr>
          <th className="text-center">Nama</th>
          <th className="text-center">NIM</th>
          <th className="text-center">Tanggal</th>
          <th className="text-center">Status</th>
          <th className="text-center">Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map(a => (
          <tr key={a.id}>
            <td className="text-center">{a.nama}</td>
            <td className="text-center">{a.nim}</td>
            <td className="text-center">
              {new Date(a.tanggal).toLocaleDateString("id-ID")}
            </td>
            <td className="text-center">
              <span
                className={
                  a.status === "Hadir"
                    ? "badge bg-success"
                    : a.status === "Izin"
                    ? "badge bg-warning text-dark"
                    : "badge bg-danger"
                }
              >
                {a.status}
              </span>
            </td>
            <td className="text-center">
              <button
                className="btn btn-sm btn-danger"
                onClick={() => {
                  api.delete(`/absensi/${a.id}`);
                  loadData();
                }}
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    </>
  );
}

export default AbsensiList;

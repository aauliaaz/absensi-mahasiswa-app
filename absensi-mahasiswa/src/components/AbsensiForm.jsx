import { useState } from "react";
import api from "../api.js";

function AbsensiForm({ onSuccess }) {
  const [form, setForm] = useState({
    nama: "",
    nim: "",
    tanggal: "",
    status: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/absensi", form);
    onSuccess();
    setForm({ nama: "", nim: "", tanggal: "", status: "" });
  };

return (
  <div className="mb-4">
    <h4 className="mb-3">Tambah Absensi</h4>

    <form onSubmit={handleSubmit} className="row g-2">
      <div className="col-md-6">
        <input
          className="form-control"
          name="nama"
          placeholder="Nama Mahasiswa"
          value={form.nama}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-6">
        <input
          className="form-control"
          name="nim"
          placeholder="NIM"
          value={form.nim}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-6">
        <input
          type="date"
          className="form-control"
          name="tanggal"
          value={form.tanggal}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-6">
        <select
          className="form-control"
          name="status"
          value={form.status}
          onChange={handleChange}
          required
        >
          <option value="">Pilih Status</option>
          <option value="Hadir">Hadir</option>
          <option value="Izin">Izin</option>
          <option value="Alpha">Alpha</option>
        </select>
      </div>

      <div className="col-12 text-end">
        <button className="btn btn-success px-4">
          Simpan
        </button>
      </div>
    </form>
  </div>
);

}

export default AbsensiForm;

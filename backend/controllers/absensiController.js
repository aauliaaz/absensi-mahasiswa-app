const db = require('../Config/db');

exports.getAbsensi = (req, res) => {
  db.query("SELECT * FROM absensi", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.addAbsensi = (req, res) => {
  const { nama, nim, tanggal, status } = req.body;
  const sql = "INSERT INTO absensi VALUES (NULL, ?, ?, ?, ?)";
  db.query(sql, [nama, nim, tanggal, status], err => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Data berhasil ditambah" });
  });
};

exports.updateAbsensi = (req, res) => {
  const { id } = req.params;
  const { nama, nim, tanggal, status } = req.body;
  const sql = "UPDATE absensi SET nama=?, nim=?, tanggal=?, status=? WHERE id=?";
  db.query(sql, [nama, nim, tanggal, status, id], err => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Data berhasil diupdate" });
  });
};

exports.deleteAbsensi = (req, res) => {
  db.query("DELETE FROM absensi WHERE id=?", [req.params.id], err => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Data berhasil dihapus" });
  });
};

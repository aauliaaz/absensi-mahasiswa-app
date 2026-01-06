import AbsensiList from "./components/AbsensiList";

function App() {
  return (
    <div className="min-vh-100 py-5">
    <div
      className="card shadow-sm"
      style={{
        maxWidth: "800px",
        marginLeft: "400px",
        marginRight: "200px"
      }}
    >

        <div className="card-body">
          <h3 className="text-center mb-4">
            Aplikasi Absensi Mahasiswa
          </h3>

          <AbsensiList />
        </div>
      </div>
    </div>
  );
}

export default App;

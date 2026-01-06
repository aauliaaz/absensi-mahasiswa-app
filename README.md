# Absensi Mahasiswa App
Aplikasi sederhana untuk mengelola data absensi mahasiswa berbasis web.

<img width="1919" height="1015" alt="image" src="https://github.com/user-attachments/assets/553d1f06-0e19-4184-946a-5c22eeda21e8" />


Project ini menggunakan arsitektur:
- Backend: Node.js + Express.js  
- Frontend: React.js (Vite)  
- Database: MySQL

Repository ini terdiri dari dua folder utama:

### 1. `backend`
Folder ini berisi source code untuk sisi server / API yang dibangun menggunakan Express.js.  
yang menangangi:
- Koneksi ke database MySQL  
- Penyediaan REST API  
- Operasi CRUD absensi mahasiswa
  
### 2. `absensi-mahasiswa` (Frontend)
Folder **absensi-mahasiswa** adalah  digunakan untuk sisi frontend aplikasi.

Frontend dibangun menggunakan:
- React.js  
- Vite sebagai build tool  
- Axios untuk komunikasi dengan backend

---

### Menjalankan Backend
1. Aktifkan MySQL di XAMPP 
2. Masuk ke folder backend:
```bash
cd backend
node app.js
```

### Menjalankan Frontend
1. Buka terminal baru 
2. Masuk ke folder absensi-mahasiswa:
```bash
cd absensi-mahasiswa
npm run dev
```

const db = require("../connection");


class KaryawanModel {
  getAllKaryawan(callback) {
    const sql = `SELECT * FROM karyawan`;
    db.query(sql, callback);
  }

  getKaryawanById(id, callback) {
    const sql = `SELECT * FROM karyawan WHERE id_karyawan = ?`;
    db.query(sql, [id], callback);
  }

  createKaryawan(karyawanData, callback) {
    const { idKaryawan, namaKaryawan, jenisKelamin, tanggalLahir, alamat, nomorTelepon, alamatEmail, departemen, jabatan, tanggalBergabung, gaji, statusKaryawan, nomorRekeningBank } = karyawanData;
    const sql = `INSERT INTO karyawan (id_karyawan, nama_karyawan, jenis_kelamin, tanggal_lahir, alamat, nomor_telepon, alamat_email, departemen, jabatan, tanggal_bergabung, gaji, status_karyawan, nomor_rekening_bank)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [idKaryawan, namaKaryawan, jenisKelamin, tanggalLahir, alamat, nomorTelepon, alamatEmail, departemen, jabatan, tanggalBergabung, gaji, statusKaryawan, nomorRekeningBank], callback);
  }

  updateKaryawan(karyawanData, callback) {
    const { namaKaryawan, jenisKelamin, tanggalLahir, alamat, nomorTelepon, alamatEmail, departemen, jabatan, tanggalBergabung, gaji, statusKaryawan, nomorRekeningBank, idKaryawan } = karyawanData;
    const sql = `UPDATE karyawan SET nama_karyawan = ?, jenis_kelamin = ?, tanggal_lahir = ?, alamat = ?, nomor_telepon = ?, alamat_email = ?, departemen = ?, jabatan = ?, tanggal_bergabung = ?, gaji = ?, status_karyawan = ?, nomor_rekening_bank = ? 
                WHERE id_karyawan = ?`;
    db.query(sql, [ namaKaryawan, jenisKelamin, tanggalLahir, alamat, nomorTelepon, alamatEmail, departemen, jabatan, tanggalBergabung, gaji, statusKaryawan, nomorRekeningBank, idKaryawan ], callback);
  }

  deleteKaryawan(idKaryawan, callback) {
    const sql = `DELETE FROM karyawan WHERE id_karyawan = ?`;
    db.query(sql, [idKaryawan], callback);
  }
}


module.exports = new KaryawanModel();
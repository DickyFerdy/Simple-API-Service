const express = require("express");
const app = express();
const port = 3000;
const db = require("./connection");
const response = require("./response");

app.use(express.json());


app.get("/", (req, res) => {
  response(200, "API v1 ready to go", "SUCCESS", res);
});


app.get("/karyawan", (req, res) => {
  const sql = `SELECT * FROM karyawan`;

  db.query(sql, (error, result) => {
    if (result.length == 0) response(404, "Error", "Data Not Found", res);
    response(200, result, "Get All Data Karyawan", res);
  });
});


app.get("/karyawan/:id", (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM karyawan WHERE id_karyawan = ?`

  db.query(sql, [id], (error, result) => {
    if (result.length == 0) response(404, "Error", "Data Not Found", res);
    response(200, result, "Get Karyawan By id", res);
  })
})


app.post("/karyawan", (req, res) => {
  const {
    idKaryawan,
    namaKaryawan,
    jenisKelamin,
    tanggalLahir,
    alamat,
    nomorTelepon,
    alamatEmail,
    departemen,
    jabatan,
    tanggalBergabung,
    gaji,
    statusKaryawan,
    nomorRekeningBank,
  } = req.body;
  const sql = `INSERT INTO karyawan (id_karyawan, nama_karyawan, jenis_kelamin, tanggal_lahir, alamat, nomor_telepon, alamat_email, departemen, jabatan, tanggal_bergabung, gaji, status_karyawan, nomor_rekening_bank)
              VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [
      idKaryawan,
      namaKaryawan,
      jenisKelamin,
      tanggalLahir,
      alamat,
      nomorTelepon,
      alamatEmail,
      departemen,
      jabatan,
      tanggalBergabung,
      gaji,
      statusKaryawan,
      nomorRekeningBank,
    ],
    (error, result) => {
      if (error) response(500, "Invalid", "Error", res);
      if (result?.affectedRows) {
        const data = {
          isSuccess: result.affectedRows,
        }
        response(201, data, "Data Successfully Added", res);
      }
    }
  );
});


app.put("/karyawan", (req, res) => {
  const {
    namaKaryawan,
    jenisKelamin,
    tanggalLahir,
    alamat,
    nomorTelepon,
    alamatEmail,
    departemen,
    jabatan,
    tanggalBergabung,
    gaji,
    statusKaryawan,
    nomorRekeningBank,
    idKaryawan
  } = req.body;
  const sql = `UPDATE karyawan SET nama_karyawan = ?, jenis_kelamin = ?, tanggal_lahir = ?, alamat = ?, nomor_telepon = ?, alamat_email = ?, departemen = ?, jabatan = ?, tanggal_bergabung = ?, gaji = ?, status_karyawan = ?, nomor_rekening_bank = ? 
              WHERE id_karyawan = ?`;

  db.query(sql,
    [
      namaKaryawan,
      jenisKelamin,
      tanggalLahir,
      alamat,
      nomorTelepon,
      alamatEmail,
      departemen,
      jabatan,
      tanggalBergabung,
      gaji,
      statusKaryawan,
      nomorRekeningBank,
      idKaryawan
    ],
    (error, result) => {
    if (error) response(500, "Invalid", "Error", res);
    if (result?.affectedRows) {
      const data = {
        isSuccess: result.affectedRows,
        message: result.message
      }
      response(200, data, "Data Successfully Updated", res);
    } else {
      response(404, "Invalid", "ID Karyawan Not Found", res);
    }
  });
});


app.delete("/karyawan", (req, res) => {
  const { idKaryawan } = req.body;
  const sql = `DELETE FROM karyawan WHERE id_karyawan = ?`;

  db.query(sql, [idKaryawan], (error, result) => {
    if (error) response(500, "Invalid", "Error", res);
    if (result?.affectedRows) {
      const data = {
        isDeleted: result.affectedRows
      }
      response(200, data, "Data Successfully Deleted", res);
    } else {
      response(404, "Invalid", "ID Karyawan Not Found", res);
    }
  });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

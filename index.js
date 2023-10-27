const express = require('express');
const app = express();
const port = 3000;
const db = require('./connection');
const response = require('./response');
const KaryawanModel = require('./models/karyawan');
const karyawan = require('./models/karyawan');

app.use(express.json());


app.get("/", (req, res) => {
  response(200, "API v1 ready to go", "SUCCESS", res);
});


app.get("/karyawan", (req, res) => {
  KaryawanModel.getAllKaryawan((error, result) => {
    if (error) {
      return response(500, "Error", `Server error: ${error.message}`, res);
    }
    if (result.length == 0) {
      return response(404, "Invalid", "Data Not Found", res);
    } 
    response(200, result, "Get All Data Karyawan", res);
  });
});


app.get("/karyawan/:id", (req, res) => {
  const id = req.params.id;
  KaryawanModel.getKaryawanById(id, (error, result) => {
    if (error) {
      return response(500, "Error", `Server error: ${error.message}`, res);
    }
    if (result.length == 0) {
      return response(404, "Invalid", "Data Not Found", res);
    }
    response(200, result, "Get Karyawan By id", res);
  });
});


app.post("/karyawan", (req, res) => {
  const karyawanData = req.body;
  KaryawanModel.createKaryawan(karyawanData, (error, result) => {
    if (error) {
      return response(500, "Error", `Server error: ${error.message}`, res);
    }
    if (result?.affectedRows) {
      const data = {
        isSuccess: result.affectedRows,
      }
      response(201, data, "Data Successfully Added", res);
    }
  });
});


app.put("/karyawan", (req, res) => {
  const karyawanData = req.body;
  KaryawanModel.updateKaryawan(karyawanData, (error, result) => {
    if (error) {
      return response(500, "Error", `Server error: ${error.message}`, res);
    }
    if (result?.affectedRows) {
      const data = {
        isSuccess: result.affectedRows,
        message: result.message
      }
      response(200, data, "Data Successfully Updated", res);
    } else {
      response(404, "Invalid", "Data Not Found", res);
    }
  });
});


app.delete("/karyawan", (req, res) => {
  const idKaryawan = req.body;
  KaryawanModel.deleteKaryawanById(idKaryawan, (error, result) => {
    if (error) {
      return response(500, "Error", `Server error: ${error.message}`, res);
    }
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

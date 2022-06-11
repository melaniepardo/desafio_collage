// // Paso 1
// const express = require("express");
// const app = express();
// const fs = require("fs");
// app.listen(3000);
// // Paso 2
// app.use(express.static("public"));
// // Paso 3
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/collage.html");
// });
// // Paso 4
// app.delete("/imagenes/:nombre", (req, res) => {
//     const { nombre } = req.params;
//     fs.unlink(`${__dirname}/public/imagenes/${nombre}.jpg`, (err) => {
//         res.send(`Imagen ${nombre} fue eliminada con éxito`);
//     });
// });

// module.exports = "delete"

//1.
const express = require("express");
const app = express();
const expressFileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
//Servidor
app.listen(3000);
//disponibilizar la carpeta public
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//2. y 3.
app.use(
    expressFileUpload({
        limits: { fileSize: 50000000 },
        abortOnLimit: true,
        responseOnLimit:
            "El peso de la foto que intentas subir supera el limite permitido",
    })
);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/formulario.html");
});

//4.
app.post("/imagen", (req, res) => {
    console.log(req.files)
    const { target_file } = req.files;
    const { posicion } = req.body;
    const name = `imagen-${posicion}`;//${target_file.name}
    target_file.mv(`${__dirname}/public/imgs/${name}.jpg`, (err) => {
        res.sendFile(__dirname + "/collage.html");//res.send es solo para enviar texto y el sendFile es para que se visualice como tal ene le navegador
    });
});
app.get("/collage", (req, res) => {
    res.sendFile(__dirname + "/collage.html");
});

//5. Delete
app.get("/deleteImg/:nombre", (req, res) => {
    const { nombre } = req.params;
    fs.unlink(`${__dirname}/public/imgs/${nombre}.jpg`, (err) => {
        res.send(`Imagen ${nombre} fue eliminada con éxito`);
    });
});

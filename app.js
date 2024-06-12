const express = require("express");
const app = express();

const fs = require ('fs')

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send("Hola Express")
})

app.get('/contacto', (req, res) => {
    res.send("Contacto")
})

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
})

app.post('/contact', (req, res) => {
    res.send("Formulario recibido");
})

app.get('/users', (req, res) => {
   // res.sendFile (__dirname + "/data/users.json")
    const buffer = fs.readFileSync(__dirname + "/data/users.json")

    console.log(buffer);

    const array = JSON.parse(buffer);
    console.log(array)

    res.json(array);

});

app.get("/productos/:id", (req,res) => {
    const id = req.params.id;
    res.send(id)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Iniciado - http://localhost:${PORT}`))

// const server = http.createServer((req,res) => {
//     const file = fs.readFileSync(__dirname + "/index.html");
//     res.writeHead(200, {
//         "Content-Type": "text/html; charset=UTF-8)",
//     });
//     res.end(file);
// })

// server.listen(3000, () => console.log(`http://localhost:3000`))
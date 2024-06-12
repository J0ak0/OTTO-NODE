const express = require("express");
const app = express();

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send("Hola Express")
})

app.get('/contacto', (req, res) => {
    res.send("Contacto")
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

// const server = http.createServer((req,res) => {
//     const file = fs.readFileSync(__dirname + "/index.html");
//     res.writeHead(200, {
//         "Content-Type": "text/html; charset=UTF-8)",
//     });
//     res.end(file);
// })

// server.listen(3000, () => console.log(`http://localhost:3000`))
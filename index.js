import express from 'express'; // Importa el módulo express
const app = express();
const PORT = 3000;

app.use(express.json()); // para poder leer JSON en POST y PUT

let usuario = [{nombre: "Ana", edad: "25"}]
let productos=["Mouse", "Teclado", "Monitor"]
let materias=[{nombre: "Matematica"}, {nombre: "Lengua"}]


app.get('/', (req, res) => {
    res.json('Bienvenido a mi servidor!');
  });


  app.get('/saludo', (req, res) => {
  res.json("Hola Mundo!!");
});

app.get('/numero', (req, res) => {
    res.json("42");
  });

app.get('/usuario', (req, res) => {
    return res.status(400).json(usuario);
});

app.get('/productos', (req, res) => {
    return res.status(400).json(productos);
});

app.get('/materias', (req, res) => {
    return res.status(400).json(materias);
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Para probar la API, puedes usar herramientas como Postman.
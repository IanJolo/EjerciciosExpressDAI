import express from 'express'; 
const app = express();
const PORT = 3000;

app.use(express.json()); 

let usuario = [{nombre: "Ana", edad: "25"}]
let productos=["Mouse", "Teclado", "Monitor"]
let materias=[{nombre: "Matematica"}, {nombre: "Lengua"}]
let personas=[];

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor!');
  });


app.get('/saludo', (req, res) => {
  res.send("Hola Mundo!!");
});

app.get('/numero', (req, res) => {
    res.send("42");
  });

app.get('/usuario', (req, res) => {
  res.json(usuario)
});

app.get('/productos', (req, res) => {
   res.json(productos);
});

app.get('/materias', (req, res) => {
    res.status(400).json(materias);
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.post('/personas', (req, res) => {
  const persona = req.body;
  if (!persona) return res.status(400).json({ error: 'Faltan datos!' });
  personas.push(persona);
  res.send(personas)
}  
);

app.get('/personas', (req, res) => {
  res.json(personas)
});

app.delete('/personas/:id', (req,res)=>{
  const id=parseInt(req.params.id);
  personas.splice(id,1)
  res.json(personas)
})
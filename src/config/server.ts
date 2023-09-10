import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from '../adapters/routes/userRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware para procesar JSON
app.use(bodyParser.json());

// Habilita CORS para todas las rutas
app.use(cors());

// Rutas definidas en userRoutes.ts
app.use('/user', userRoutes);

app.listen(port, () => {
  console.log(`Servidor de prueba escuchando en http://localhost:${port}`);
});

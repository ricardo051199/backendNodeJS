import { Request, Response } from 'express';

const users: { username: string; password: string }[] = [];

// Controlador para la ruta de registro de usuario
export const registerUser = (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Debes proporcionar un nombre de usuario y una contraseña.' });
  }

  // Simula el almacenamiento de usuarios
  users.push({ username, password });

  res.status(201).json({ message: 'Usuario registrado con éxito.' });
};

// Controlador para la ruta de inicio de sesión
export const loginUser = (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Credenciales incorrectas.' });
  }

  res.json({ message: 'Inicio de sesión exitoso.' });
};

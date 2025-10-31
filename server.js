const express = require('express');
const path = require('path');
const app = express();
const PORT = 3111;

// Middleware para servir archivos estáticos
// Esto sirve los archivos copiados desde el build de React a la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Define tu(s) ruta(s) de API aquí (si las tienes)
app.get('/api/status', (req, res) => {
  res.json({ message: 'API Status: OK', version: '1.0' });
});

// Ruta Catch-All (CRUCIAL para React Router)
// Para cualquier otra ruta no definida (como /about o /portfolio), 
// se devuelve el index.html de React.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Server Express listening on port ${PORT}`);
  console.log('Serving static files from /public');
});

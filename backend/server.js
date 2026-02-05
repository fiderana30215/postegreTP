const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur backend démarré sur http://localhost:${PORT}`);
  console.log(`📊 Endpoint de test: http://localhost:${PORT}/api/health`);
});
const pool = require('../config/database');

const UserModel = {
  // Récupérer tous les utilisateurs
  getAllUsers: async () => {
    const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
    return result.rows;
  },

  // Récupérer un utilisateur par ID
  getUserById: async (id) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  },

  // Créer un nouvel utilisateur
  createUser: async (name, email) => {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return result.rows[0];
  },

  // Mettre à jour un utilisateur
  updateUser: async (id, name, email) => {
    const result = await pool.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
      [name, email, id]
    );
    return result.rows[0];
  },

  // Supprimer un utilisateur
  deleteUser: async (id) => {
    const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  },

  // Rechercher par email
  getUserByEmail: async (email) => {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  }
};

module.exports = UserModel;
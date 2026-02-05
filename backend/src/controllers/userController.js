const UserModel = require('../models/userModel');

const userController = {
  // GET /api/users
  getAllUsers: async (req, res) => {
    try {
      const users = await UserModel.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error('Erreur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  },

  // GET /api/users/:id
  getUserById: async (req, res) => {
    try {
      const user = await UserModel.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
      res.json(user);
    } catch (error) {
      console.error('Erreur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  },

  // POST /api/users
  createUser: async (req, res) => {
    try {
      const { name, email } = req.body;
      
      // Validation simple
      if (!name || !email) {
        return res.status(400).json({ error: 'Nom et email sont requis' });
      }

      // Vérifier si l'email existe déjà
      const existingUser = await UserModel.getUserByEmail(email);
      if (existingUser) {
        return res.status(409).json({ error: 'Cet email est déjà utilisé' });
      }

      const newUser = await UserModel.createUser(name, email);
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Erreur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  },

  // PUT /api/users/:id
  updateUser: async (req, res) => {
    try {
      const { name, email } = req.body;
      const updatedUser = await UserModel.updateUser(req.params.id, name, email);
      
      if (!updatedUser) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
      
      res.json(updatedUser);
    } catch (error) {
      console.error('Erreur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  },

  // DELETE /api/users/:id
  deleteUser: async (req, res) => {
    try {
      const deletedUser = await UserModel.deleteUser(req.params.id);
      
      if (!deletedUser) {
        return res.status(404).json({ error: 'Utilisateur non trouvé' });
      }
      
      res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
      console.error('Erreur:', error);
      res.status(500).json({ error: 'Erreur serveur' });
    }
  }
};

module.exports = userController;
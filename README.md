# PostgreSQL TP - API REST avec Node.js et PostgreSQL

API REST complète développée avec Node.js, Express et PostgreSQL.

## 📋 Prérequis

- Node.js (version 14 ou supérieure)
- PostgreSQL (version 12 ou supérieure)
- npm ou yarn

## 🚀 Installation

### 1. Cloner le projet

```bash
git clone https://github.com/fiderana30215/postegreTP.git
cd postegreTP
```

### 2. Installer les dépendances backend

```bash
cd backend
npm install
```

### 3. Configurer la base de données PostgreSQL

#### Créer la base de données

```bash
# Se connecter à PostgreSQL
psql -U postgres

# Créer la base de données
CREATE DATABASE postegretp_db;

# Quitter psql
\q
```

#### Exécuter le script SQL

```bash
psql -U postgres -d postegretp_db -f backend/database/init.sql
```

### 4. Configurer les variables d'environnement

```bash
# Copier le fichier .env.example
cp backend/.env.example backend/.env

# Modifier le fichier .env avec vos paramètres
```

### 5. Lancer le serveur

**Mode développement (avec nodemon) :**
```bash
npm run dev
```

**Mode production :**
```bash
npm start
```

Le serveur démarre sur **http://localhost:5000**

## 📚 Documentation de l'API

### Endpoints disponibles

#### Health Check
- **GET** `/api/health` - Vérifier l'état de l'API

**Réponse :**
```json
{
  "status": "OK",
  "message": "API fonctionnelle"
}
```

#### Utilisateurs

- **GET** `/api/users` - Récupérer tous les utilisateurs
- **GET** `/api/users/:id` - Récupérer un utilisateur par ID
- **POST** `/api/users` - Créer un nouvel utilisateur
- **PUT** `/api/users/:id` - Mettre à jour un utilisateur
- **DELETE** `/api/users/:id` - Supprimer un utilisateur

### Exemples de requêtes

#### Récupérer tous les utilisateurs
```bash
curl http://localhost:5000/api/users
```

#### Créer un utilisateur
```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john.doe@example.com"}'
```

#### Mettre à jour un utilisateur
```bash
curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Jane Doe", "email": "jane.doe@example.com"}'
```

#### Supprimer un utilisateur
```bash
curl -X DELETE http://localhost:5000/api/users/1
```

## 🗄️ Structure du projet

```
postegreTP/
├── backend/
│   ├── database/
│   │   └── init.sql          # Script d'initialisation de la base de données
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js   # Configuration de la connexion PostgreSQL
│   │   ├── controllers/
│   │   │   └── userController.js  # Contrôleurs pour les utilisateurs
│   │   ├── models/
│   │   │   └── userModel.js  # Modèle de données utilisateur
│   │   ├── routes/
│   │   │   └── userRoutes.js # Routes de l'API utilisateurs
│   │   └── app.js            # Configuration Express
│   ├── .env                  # Variables d'environnement
│   ├── .env.example          # Exemple de configuration
│   ├── package.json          # Dépendances npm
│   └── server.js             # Point d'entrée de l'application
├── frontend/
└── README.md
```

## 🛠️ Technologies utilisées

- **Node.js** - Environnement d'exécution JavaScript
- **Express** - Framework web pour Node.js
- **PostgreSQL** - Base de données relationnelle
- **pg** - Client PostgreSQL pour Node.js
- **dotenv** - Gestion des variables d'environnement
- **cors** - Middleware pour gérer les CORS
- **nodemon** - Rechargement automatique en développement

## 📝 Schéma de la base de données

### Table `users`

| Colonne | Type | Description |
|---------|------|-------------|
| id | SERIAL | Identifiant unique (clé primaire) |
| name | VARCHAR(255) | Nom de l'utilisateur |
| email | VARCHAR(255) | Email (unique) |
| created_at | TIMESTAMP | Date de création |
| updated_at | TIMESTAMP | Date de dernière modification |

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT

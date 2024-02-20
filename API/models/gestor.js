const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../conexao');

const gestor = sequelize.define('Gestor', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
    },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  // Para não criar a coluna createdAt e updateAt do sequelize e 
  // também para não pluralizar a tabela 
  timestamps: false,
  freezeTableName: true
});

module.exports = gestor;
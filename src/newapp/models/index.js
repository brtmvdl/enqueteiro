const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:'); // Using SQLite for development

const Form = sequelize.define('Form', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  options: {
    type: DataTypes.TEXT, // Store as JSON string
    allowNull: false
  },
  hash: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
});

const Answer = sequelize.define('Answer', {
  answer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ip: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

Form.hasMany(Answer, { foreignKey: 'form_id' });
Answer.belongsTo(Form, { foreignKey: 'form_id' });

module.exports = { sequelize, Form, Answer };

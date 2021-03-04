'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class forum_posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.forum_posts.belongsTo(models.user,{foreignKey: 'email'})
    }
  };
  forum_posts.init({
    email: DataTypes.STRING,
    post: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'forum_posts',
  });
  return forum_posts;
};
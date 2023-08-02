'use strict';

import { Model } from "sequelize";

interface UserCredentialsAttributes {
  userId: string;
  password: string;
}

class UserCredentials extends Model {
  userId!: string;
  password!: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  UserCredentials.init({
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'UserCredentials',
    timestamps: true,
    underscored: true,
    tableName: 'UserCredentials',
  });
  return UserCredentials;
};
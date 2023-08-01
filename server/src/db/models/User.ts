'use strict';

import { Model, UUIDV4 } from 'sequelize';

interface UserAttributes {
  id: number;
  name: string;
  username: string;
  email: string;
  birthDate: Date;
  picture?: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  id!: number;
  name!: string;
  username!: string;
  email!: string;
  birthDate!: Date;
  picture!: string;

  readonly createdAt!: Date
  readonly updatedAt!: Date
}

module.exports = (sequelize: any, DataTypes: any) => {
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: true,
      underscored: true,
      tableName: 'User',
    }
  );

  return User;
};
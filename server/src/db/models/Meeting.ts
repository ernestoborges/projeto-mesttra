'use strict';

import { UUIDV4, Model } from "sequelize";

interface Meeting {
  id: string;
  author: string;
  title: string;
  description: string;
  meetingDate: Date;
}

class Meeting extends Model {
  id!: string
  author!: string
  title!: string
  description!: string
  meetingDate!: Date

  readonly createdAt!: Date
  readonly updatedAt!: Date
}

module.exports = (sequelize: any, DataTypes: any) => {
  
  Meeting.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    meetingDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Meeting',
    timestamps: true,
    underscored: true,
    tableName: 'Meeting',

  });
  return Meeting;
};
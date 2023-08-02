'use strict';

import { UUIDV4, Model } from "sequelize";

interface MeetingComment {
  id: string
  meetingId: string
  author: string
  text: string
  replyTo: string
}

class MeetingComment extends Model {
  id!: string
  meetingId!: string
  author!: string
  text!: string
  replyTo!: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  
  MeetingComment.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    meetingId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    replyTo: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'MeetingComment',
    timestamps: true,
    underscored: true,
    tableName: 'Comment',
  });
  return MeetingComment;
};
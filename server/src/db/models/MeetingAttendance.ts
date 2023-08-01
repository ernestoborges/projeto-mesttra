'use strict';

import { Model, Sequelize } from "sequelize";

interface MeetingAttendance {
  meetingId: string
  userId: string
}

class MeetingAttendance extends Model {
  meetingId!: string
  userId!: string
}

module.exports = (sequelize: any, DataTypes: any) => {
  
  MeetingAttendance.init({
    meetingId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUIDV4,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'MeetingAttendance',
    underscored: true,
    tableName: 'MeetingAttendance',
  });
  return MeetingAttendance;
};
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
      type: DataTypes.UUID,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
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
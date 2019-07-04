const tableName = 'notifications';

module.exports = (sequelize, { STRING, INTEGER, BOOLEAN,DATEONLY }) => {
    const Notification = sequelize.define('Notification', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: INTEGER,
        },
        message:{
            type: STRING,
        },
        message_date: { 
            type: DATEONLY, 
        },
        read_Status: {
            type: BOOLEAN,
        },        
        
    }, { tableName });

    return Notification
};
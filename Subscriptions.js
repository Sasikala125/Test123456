const tableName = 'subscriptions';

module.exports = (sequelize, { STRING, INTEGER, BOOLEAN,DATEONLY }) => {
    const Subscription = sequelize.define('Subscription', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: INTEGER,
        },
        event:{
            type: STRING,
        },
        subscription_Status: {
            type: BOOLEAN,
        },        
        
    }, { tableName });

    return Subscription  
};
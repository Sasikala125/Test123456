const tableName = 'brokerage';

module.exports = (sequelize, { STRING, INTEGER, TEXT, BOOLEAN }) => {
    const Brokerage = sequelize.define('Brokerage', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },       
        brokerage_name: {
            type: STRING,
        },
        street_1: {
            type: STRING,
        },
        street_2: {
            type: STRING,
        },
        city: {
            type: STRING,
        },
        state: {
            type: STRING,
        },
        zip: {
            type: STRING,
        },
        phone: {
            type: STRING,
        },
        email: {
            type: STRING,
        }, 
        brokerage_notes: {
            type: TEXT,
        },  
        picture_url: {
            type: TEXT,
        },  
        is_deleted: {
            type: BOOLEAN,
        },
        // user_id: {
        //     type: INTEGER,
        // },   
        
    }, { tableName });

    return Brokerage
};
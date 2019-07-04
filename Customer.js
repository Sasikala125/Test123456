const tableName = 'customers';

module.exports = (sequelize, { STRING, INTEGER, TEXT ,BOOLEAN}) => {
    const Customer = sequelize.define('Customer', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: STRING,
        },
        last_name:{
            type: STRING,
        },
        marital_status:{
            type:STRING
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
        company: {
            type: STRING,
        },
        customer_notes: {
            type: TEXT,
        },
        picture_url: {
            type: TEXT,
        },
        is_deleted: {
            type: BOOLEAN,
        },
       
    }, { tableName });

    return Customer
};
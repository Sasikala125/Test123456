const tableName = 'escrows';

module.exports = (sequelize, { STRING, INTEGER, BOOLEAN }) => {
    const Escrow = sequelize.define('Escrow', {
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
        is_deleted: {
            type: BOOLEAN,
        },
        
    }, { tableName });

    return Escrow
};
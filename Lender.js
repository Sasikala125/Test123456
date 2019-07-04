const tableName = 'lenders';

module.exports = (sequelize, { STRING, INTEGER }) => {
    const Lenders = sequelize.define('Lenders', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        lender: {
            type: STRING,
        },
        contact_name:{
            type: STRING,
        },
        email: {
            type: STRING,
        },
        phone: {
            type: STRING,
        },
        loan_number: {
            type: STRING,
        },
        
    }, { tableName });

    return Lenders;
};
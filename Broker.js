const tableName = 'brokers';

module.exports = (sequelize, { STRING, INTEGER, TEXT, BOOLEAN }) => {
    const Broker = sequelize.define('Brokers', {
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
        brokerage_id: {
            type: INTEGER,
        },
        escrow_notes: {
            type: TEXT,
        },
        picture_url: {
            type: TEXT,
        },
        is_deleted: {
            type: BOOLEAN,
        },
        about_me: {
            type: TEXT,
        },
        county: {
            type: TEXT,
        },
    }, { tableName });

    return Broker
};
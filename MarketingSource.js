const tableName = 'marketing_sources';

module.exports = (sequelize, { STRING, INTEGER, TEXT, BOOLEAN }) => {
    const MarketingSource = sequelize.define('MarketingSource', {
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
        marketingsource_notes: {
            type: STRING,
        },  
        picture_url: {
            type: TEXT,
        }, 
        is_deleted: {
            type: BOOLEAN,
        },
    }, { tableName });

    return MarketingSource
};
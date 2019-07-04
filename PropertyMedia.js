const tableName = 'propertymedia';

module.exports = (sequelize, { STRING, INTEGER,TEXT, BOOLEAN}) => {
    const PropertyMedia = sequelize.define('PropertyMedia', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        property_id: {
            type: INTEGER,
        },       
        coverimage: {
            type: BOOLEAN,
        },       
        aws_url: {
            type: TEXT,
        },
        
    }, { tableName });

    return PropertyMedia
};
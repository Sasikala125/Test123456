const tableName = 'properties';

module.exports = (sequelize, { STRING, INTEGER, DOUBLE }) => {
    const Property = sequelize.define('Property', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
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
        square_footage: {
            type: INTEGER,
        },
        school_district: {
            type: STRING,
        },
        number_of_bedrooms: {
            type: INTEGER,
        },
        number_of_bathrooms: {
            type: DOUBLE,
        },
        year_built: {
            type: INTEGER,
        },
        lot_size: {
            type: INTEGER,
        },
        county: {
            type: STRING
        },
        optional_county: {
            type: STRING
        }
    }, { tableName });

    return Property
};
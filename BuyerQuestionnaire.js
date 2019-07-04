const tableName = 'buyer_questionnaire';

module.exports = (sequelize, { STRING, INTEGER, DOUBLE,BOOLEAN }) => {
    const BuyerQuestionnaire = sequelize.define('BuyerQuestionnaire', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },        
        homestead: {
            type: BOOLEAN,
        },
        investment: {
            type: BOOLEAN,
        },
        alt_address: {
            type: STRING,
        },
        survey: {
            type: BOOLEAN,
        },
        survey_changes:{
            type:BOOLEAN
        },
        survey_details:{
            type:STRING
        },
        closing: {
            type: BOOLEAN,
        },
        p_o_a: { /*Power of attorney */
            type: BOOLEAN,
        },
        p_o_a_details: {
            type: STRING,
        },
        home_warranty: {
            type: BOOLEAN,
        },
        home_warranty_details: {
            type: STRING,
        },
        hoa_name:{
            type:STRING
        },
        hoa_contact:{
            type:STRING
        },
        hoa_phone:{
            type:STRING
        },
    }, { tableName });

    return BuyerQuestionnaire
};
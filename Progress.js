const tableName = 'progress';

module.exports = (sequelize, { STRING, INTEGER, BOOLEAN }) => {
    const Progress = sequelize.define('Progress', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        contract: {
            type: BOOLEAN
        },
        earnest_payment: {
            type: BOOLEAN
        },
        buyer_info: {
            type: BOOLEAN
        },
        seller_info: {
            type: BOOLEAN
        },
        option_expired: {
            type: BOOLEAN
        },
        title_commitment: {
            type: BOOLEAN
        },
        survey_ordered: {
            type: BOOLEAN
        },
        survey_received: {
            type: BOOLEAN
        },
        resale_cert: {
            type: BOOLEAN
        },
        resale_received: {
            type: BOOLEAN
        },
        home_warranty: {
            type: BOOLEAN
        },
        payoff_received: {
            type: BOOLEAN
        },
        loan_docs: {
            type: BOOLEAN
        },
        closed: {
            type: BOOLEAN
        },
        progress_percent: {
            type: STRING,
        },
    }, { tableName });

    return Progress
};
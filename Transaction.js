const tableName = 'transactions';

module.exports = (sequelize, { STRING, INTEGER, DATEONLY, BOOLEAN, DOUBLE, TEXT }) => {
    const Transaction = sequelize.define('Transaction', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        property_id: {
            type: INTEGER,
        },
        buyer_id: {
            type: INTEGER,
        },
        seller_id: {
            type: INTEGER,
        },
        listing_agent_id: {
            type: INTEGER,
        },
        buyers_agent_id: {
            type: INTEGER,
        },
        marketing_source_id: {
            type: INTEGER,
        },
        sales_rep_id: {
            type: INTEGER,
        },
        gf: {
            type: STRING,
        },
        sale_price: {
            type: INTEGER,
        },
        loan_amount: {
            type: INTEGER
        },
        earnest_amount:{
            type:DOUBLE
        },
        funding_date:{
            type:DATEONLY
        },
        SoB_id: {
            type: INTEGER
        },
        BSA_id: {
            type: INTEGER
        },
        listing_agent_commission: {
            type: INTEGER,
        },
        buyers_agent_commission: {
            type: INTEGER,
        },
        closing_date: {
            type: DATEONLY,
        },
        option_date: {
            type: DATEONLY,
        },
        earnest_date: {
            type: DATEONLY
        },
        hoa_resale_cert: {
            type: STRING
        },
        survey_date: {
            type: DATEONLY
        },
        status: {
            type: BOOLEAN,
        },
        mark_for_deletion: {
            type: BOOLEAN,
        },
        transaction_notes: {
            type: TEXT,
        },
        transaction_type:{
            type:STRING
        }
    }, { tableName });


    return Transaction
};
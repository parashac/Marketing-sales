const express = require('express');
const router = express.Router();
const Sale = require('../models/sale');

/// posting method in db ///
router.post('/', function(req, res){
    const agent_name =req.body.agent_name;
    const amount_sold =req.body.amount_sold;
    const sales_count = req.body.sales_count;

    if (!agent_name || !amount_sold || !sales_count)///required all fields ///
    {
        return res.send('please provide all fields');
    }

/// posting new saless
    const sale =new Sale({
        agent_name : agent_name,
        amount_sold : amount_sold,
        sales_count : sales_count 
    });

/// saving into table
    sale.save(function(err){
        if(err){
            res.send('error in saving');
        }
        else{
            res.send('added successfully');
        }
    });

});

module.exports = router;
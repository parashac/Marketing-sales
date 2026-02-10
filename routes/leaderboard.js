const express = require('express');
const router = express.Router();
const Sale = require('../models/sale');

router.get('/', function(req, res){
    Sale.aggregate([
        {
            $group:{
                user_id : '$agent_name',
                total_sales_amount : { $sum: '$amount_sold'},
                total_sales_count : { $sum: '$sales_count'}
            }
        },
        { $sort: {total_sales_amount: -1 }} ///sorting in descending order
    ], function(err, leaderboard) 
    {
        var rank = 1;
        var previous_Amount = null;

        for (var i = 0; i < leaderboard.length; i++)
             {
                if (previous_Amount !== null && leaderboard[i].total_sales_amount < previous_Amount) 
                    {
                    rank = i + 1;
                    }//checks rank on comparing with sales_amount
        leaderboard[i].rank = rank;
        leaderboard[i].agent_name = leaderboard[i].user_id;
        delete leaderboard[i].user_id;
        previous_Amount = leaderboard[i].total_sales_amount;
        }

        res.send(leaderboard);//this sends final leaderboard
    }
    );
});

module.exports = router;
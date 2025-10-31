const express = require('express');
const router = express.Router();
const Log = require('../models/logModel');

router.get('/logs', async (req, res) => {
    try {
        const logs = await Log.find({})
        console.log(logs)
        res.json(logs)
    }
    
    catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

module.exports = router;
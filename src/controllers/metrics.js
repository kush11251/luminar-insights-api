const express = require('express');
const router = express.Router();
const metricsModel = require('../models/metrics');
router.get('/', async (req, res) => {
    try {
        const metrics = await metricsModel.getMetrics();
        res.json(metrics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching metrics' });
    }
});
module.exports = router;
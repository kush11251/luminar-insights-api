const mongoose = require('mongoose');
const metricsSchema = new mongoose.Schema({
    name: String,
    value: Number
});
const Metrics = mongoose.model('Metrics', metricsSchema);
module.exports = {
    getMetrics: async () => {
        return await Metrics.find();
    }
};
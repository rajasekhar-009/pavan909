const express = require('express');
const app = express();
const port = 3000;

// Simulating the performance data for 5G in multi-cloud environments
const performanceData = {
    latency: 1, // in milliseconds
    bandwidth: 10, // in Gbps
};

const trafficOptimizationInsights = {
    insights: "5G enables faster, more efficient data processing across distributed cloud systems, reducing bottlenecks and improving real-time decision making."
};

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// API endpoint for performance data
app.get('/api/performance', (req, res) => {
    res.json(performanceData);
});

// API endpoint for traffic optimization insights
app.get('/api/traffic-optimization', (req, res) => {
    res.json(trafficOptimizationInsights);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

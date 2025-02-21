document.addEventListener("DOMContentLoaded", function () {
    // Fetching performance data from the back-end (example API endpoint)
    fetch('/api/performance')
        .then(response => response.json())
        .then(data => {
            // Update latency and bandwidth on the page
            document.getElementById('latency-value').innerText = `${data.latency} ms`;
            document.getElementById('bandwidth-value').innerText = `${data.bandwidth} Gbps`;
        })
        .catch(err => console.error("Error fetching performance data:", err));

    // Fetch traffic optimization insights
    fetch('/api/traffic-optimization')
        .then(response => response.json())
        .then(data => {
            document.getElementById('traffic-info').innerText = data.insights;
        })
        .catch(err => console.error("Error fetching traffic optimization data:", err));
});

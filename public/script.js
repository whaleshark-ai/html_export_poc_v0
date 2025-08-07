// Chart.js configuration and data
const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Revenue',
            data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 35000, 32000, 40000, 38000, 45000],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        },
        {
            label: 'Orders',
            data: [800, 1200, 1000, 1600, 1400, 2000, 1800, 2200, 2000, 2500, 2300, 2800],
            borderColor: '#764ba2',
            backgroundColor: 'rgba(118, 75, 162, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }
    ]
};

const chartConfig = {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        size: 12,
                        weight: '600'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#667eea',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: true
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                ticks: {
                    font: {
                        size: 12
                    },
                    callback: function(value) {
                        if (this.chart.data.datasets[0].data.includes(value)) {
                            return '$' + value.toLocaleString();
                        }
                        return value.toLocaleString();
                    }
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'index'
        }
    }
};

// Initialize Chart.js
let salesChart;
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    salesChart = new Chart(ctx, chartConfig);
});

// Export functionality
document.getElementById('exportBtn').addEventListener('click', async function() {
    const button = this;
    const originalText = button.innerHTML;
    
    // Show loading state
    button.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="animate-spin">
            <path d="M21 12a9 9 0 11-6.219-8.56"></path>
        </svg>
        Exporting...
    `;
    button.disabled = true;
    
    try {
        const card = document.getElementById('exportCard');
        
        // Configure export options
        const options = {
            quality: 1.0,
            width: card.offsetWidth,
            height: card.offsetHeight,
            style: {
                transform: 'scale(1)',
                transformOrigin: 'top left',
                width: card.offsetWidth + 'px',
                height: card.offsetHeight + 'px'
            }
        };
        
        // Generate image
        const dataUrl = await htmlToImage.toPng(card, options);
        
        // Create download link
        const link = document.createElement('a');
        link.download = 'sales-analytics-dashboard.png';
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success feedback
        button.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5"></path>
            </svg>
            Exported!
        `;
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
        
    } catch (error) {
        console.error('Export failed:', error);
        
        // Show error feedback
        button.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"></path>
            </svg>
            Failed
        `;
        
        // Reset button after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.disabled = false;
        }, 2000);
    }
});

// Add CSS for loading animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    .animate-spin {
        animation: spin 1s linear infinite;
    }
`;
document.head.appendChild(style); 
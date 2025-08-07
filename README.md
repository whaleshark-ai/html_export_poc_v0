# Chart Card with PNG Export

A beautiful dashboard card featuring Chart.js diagrams and PNG export functionality using html-to-image.

## Features

- 📊 **Interactive Chart.js Diagram**: Line chart showing revenue and orders data
- 📈 **Statistics Cards**: Display key metrics with percentage changes
- 🎨 **Modern UI**: Clean, responsive design with gradient backgrounds
- 📤 **PNG Export**: Export the entire card as a high-quality PNG image
- 📱 **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- **Node.js** - Server runtime
- **Express** - Web server framework
- **Chart.js** - Interactive charts and graphs
- **html-to-image** - Convert HTML elements to PNG images
- **HTML5/CSS3** - Modern styling and layout

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

1. **View the Dashboard**: The card displays sales analytics with revenue and orders data
2. **Interact with the Chart**: Hover over data points to see detailed information
3. **Export as PNG**: Click the "Export PNG" button in the top-right corner to download the card as an image

## Project Structure

```
├── package.json          # Project dependencies and scripts
├── server.js            # Express server setup
├── public/
│   ├── index.html       # Main HTML file
│   ├── styles.css       # CSS styles
│   └── script.js        # JavaScript with Chart.js and export logic
└── README.md           # This file
```

## Customization

### Chart Data
Edit the `chartData` object in `public/script.js` to modify the chart data:

```javascript
const chartData = {
    labels: ['Jan', 'Feb', 'Mar', ...],
    datasets: [
        {
            label: 'Revenue',
            data: [12000, 19000, ...],
            // ... other properties
        }
    ]
};
```

### Statistics
Update the statistics in `public/index.html`:

```html
<div class="stat-item">
    <div class="stat-value">$45,231</div>
    <div class="stat-label">Total Revenue</div>
    <div class="stat-change positive">+20.1%</div>
</div>
```

### Styling
Modify `public/styles.css` to change colors, layout, and appearance.

## Export Features

- **High Quality**: Exports at full resolution with 1.0 quality
- **Loading States**: Visual feedback during export process
- **Error Handling**: Graceful error handling with user feedback
- **Automatic Download**: Downloads the PNG file automatically

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

Note: The html-to-image library works best in modern browsers with good canvas support. 
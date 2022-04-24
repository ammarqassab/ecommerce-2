import React from 'react';
// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';

// const labels = ['Item 1', 'Item 2', 'Item 3'];
// const data = {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1
//     }]
// };
// const ctx = document.getElementById('myChart');
// const chart = new Chart(ctx, {
//     type: 'line',
//     data: data,
//     options: {
//         onClick: (e) => {
//         const canvasPosition = getRelativePosition(e, chart);

//         // Substitute the appropriate scale IDs
//         const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
//         const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
//         }
//     }
// });

export default function ChartLine() {

    return (
        <div className='card hover-shadow transparent margin padding animate-top' >
            {/* <canvas id="myChart" width="400" height="400"></canvas> */}
            Chart Line
        </div>
    );
}

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

import type { Student } from './Screen1';

interface LineChartProps {
    students: Student[];
}

const LineChart = ({ students }: LineChartProps) => {
    const data = {
        labels: students.map((s) => s.name),
        datasets: [
            {
                label: '국어',
                data: students.map((s) => s.kor),
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.1)',
                fill: false,
                tension: 0.3,
            },
            {
                label: '영어',
                data: students.map((s) => s.eng),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                fill: false,
                tension: 0.3,
            },
            {
                label: '수학',
                data: students.map((s) => s.math),
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.1)',
                fill: false,
                tension: 0.3,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: '점수 변화 추이 (선형)',
            },
            legend: {
                position: 'top' as const,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                suggestedMax: 100,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LineChart;

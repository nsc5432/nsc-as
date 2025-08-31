import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import type { Student } from './Screen1';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    students: Student[];
    calcAvg: (s: Student) => number;
}

const BarChart = ({ students, calcAvg }: BarChartProps) => {
    const data = {
        labels: students.map((s) => s.name),
        datasets: [
            {
                label: '국어',
                data: students.map((s) => s.kor),
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
            },
            {
                label: '영어',
                data: students.map((s) => s.eng),
                backgroundColor: 'rgba(255, 99, 132, 0.7)',
            },
            {
                label: '수학',
                data: students.map((s) => s.math),
                backgroundColor: 'rgba(255, 206, 86, 0.7)',
            },
            {
                label: '평균',
                data: students.map((s) => calcAvg(s)),
                backgroundColor: 'rgba(255, 205, 86, 0.7)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: '과목별 점수 비교 (막대형)',
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

    return <Bar data={data} options={options} />;
};

export default BarChart;

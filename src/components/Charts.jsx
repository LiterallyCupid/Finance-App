import {
    Chart as ChartJS,
    LineElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

function Charts({ transactions }) {
    const income = transactions
        .filter(t => t.type === "income")
        .reduce((s, t) => s + t.amount, 0);
    const expense = transactions
        .filter(t => t.type === "expense")
        .reduce((s, t) => s + t.amount, 0);

    const lineData = {
        labels: transactions.map((_, i) => `T${i + 1}`),
        datasets: [
            {
                Label: "Amount",
                data: transactions.map(t => t.amount),
                borderColor: "#5b7cfa",
                tension: 0.4
            }
        ]
    };

    const donutData = {
        labels: ["Income", "Expense"],
        datasets: [
            {
                data: [income, expense],
                backgroundColor: ["#2ecc71", "#e74c3c"]
            }
        ]
    }

    return (
        <div className='charts'>
            <div className='chart-card'>
                <h3>Trends</h3>
                <Line data={lineData} />
            </div>
            <div className='chart-card'>
                <h3>Income vs Expenses</h3>
                <Doughnut data={donutData} />
            </div>
        </div>
    )
}
export default Charts;
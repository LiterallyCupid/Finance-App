import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function CategoryChart({ transactions }) {
    const expenseMap = {};

    transactions
        .filter(t => t.type === "expense")
        .forEach(t => {
            if (!expenseMap[t.categoryLabel]) {
                expenseMap[t.categoryLabel] = {
                    total: 0,
                    color: t.categoryColor
                };
            }
            expenseMap[t.categoryLabel].total += t.amount;
        });

    const labels = Object.keys(expenseMap);
    const data = labels.map(l => expenseMap[l].total);
    const colors = labels.map(l => expenseMap[l].color);

    if (labels.length === 0) {
        return <p style={{ color: "#888" }}>No expense data</p>;
    }

    return (
        <div className="chart-card">
            <h3>Expenses by Category</h3>
            <Doughnut
                data={{
                    labels,
                    datasets: [
                        {
                            data,
                            backgroundColor: colors
                        }
                    ]
                }}
            />
        </div>
    );
}

export default CategoryChart;

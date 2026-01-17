function Summary({ income, expense, balance }) {
    return (
        <div className="summary">
            <h2>Summary</h2>
            <div className="card income">
                <p>Income</p>
                <h3>₹{income}</h3>
            </div>
            <div className="card expense">
                <p>Expense</p>
                <h3>₹{expense}</h3>
            </div>
            <div className="card balance">
                <p>Balance</p>
                <h3><strong>₹{balance}</strong></h3>
            </div>
        </div>
    )
}
export default Summary
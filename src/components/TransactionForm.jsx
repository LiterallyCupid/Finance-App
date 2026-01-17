import { CATEGORIES } from "../data/categories"

function TransactionForm({
    type,
    setType,
    categoryId,
    setCategoryId,
    amount,
    setAmount,
    onSubmit,
    isEditing
}) {
    function handleTypeChange(e) {
        setType(e.target.value)
        setCategoryId("") // Reset category
    }
    return (
        <div className="transaction-form">
            <select value={type} onChange={handleTypeChange}>
                <option value="">Select Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
            </select>
            <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} disabled={!type}>
                <option value="">Select Category</option>
                {type &&
                    CATEGORIES[type].map(cat => (
                        <option key={cat.id} value={cat.id}>
                            {cat.label}
                        </option>
                    ))}
            </select>

            <input type="number " placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={onSubmit}>
                {isEditing ? "Update" : "Add"}
            </button>
        </div>
    )
}

export default TransactionForm
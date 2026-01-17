import { useState, useEffect } from "react";
import { CATEGORIES } from "./data/categories";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Charts from "./components/Charts";
import CategoryChart from "./components/CategoryChart";


function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions")
    return saved ? JSON.parse(saved) : []
  })

  const [type, setType] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [amount, setAmount] = useState("")
  const [editIndex, setEditIndex] = useState(null)

  useEffect(() => {
    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    )
  }, [transactions])

  function handlesubmit() {
    if (!type || !amount || !categoryId) {
      alert("Fill all the fields")
      return
    }

    const selectedCategory = CATEGORIES[type].find(
      c => c.id === categoryId
    );

    const transaction = {
      type,
      categoryId,
      categoryLabel: selectedCategory.label,
      categoryIcon: selectedCategory.icon,
      categoryColor: selectedCategory.color,
      amount: Number(amount),
    }

    if (editIndex === null) {
      setTransactions([...transactions, transaction])
    } else {
      setTransactions(
        transactions.map((t, i) =>
          i === editIndex ? transaction : t
        )
      )
      setEditIndex(null)
    }

    setType("")
    setCategoryId("")
    setAmount("")
  }

  function handleEdit(index) {
    const t = transactions[index]
    setType(t.type)
    setCategoryId(t.categoryId)
    setAmount(t.amount)
    setEditIndex(index)
  }
  function handleDelete(index) {
    setTransactions(
      transactions.filter((_, i) => i !== index)
    )
  }
  const totalIncome = transactions.filter(t => t.type === "income").reduce((s, t) => s + t.amount, 0)
  const totalExpense = transactions.filter(t => t.type === "expense").reduce((s, t) => s + t.amount, 0)
  const balance = totalIncome - totalExpense

  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main">
        <TopBar />
        <h1>Dashboard</h1>
        <div className="dashboard">
          <Summary
            income={totalIncome}
            expense={totalExpense}
            balance={balance}
          />

          <div className="grid">
            <div className="grid-left">
              <TransactionForm
                type={type}
                setType={setType}
                categoryId={categoryId}
                setCategoryId={setCategoryId}
                amount={amount}
                setAmount={setAmount}
                onSubmit={handlesubmit}
                isEditing={editIndex !== null}
              />
              <TransactionList
                transactions={transactions}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
            <div className="grid-right">
              <div className="placeholder-card">
                Monthly Overview(Coming Soon)
              </div>
              <Charts transactions={transactions} />
              <CategoryChart transactions={transactions} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
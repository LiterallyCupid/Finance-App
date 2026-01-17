import {
  FaUtensils,
  FaHome,
  FaCar,
  FaShoppingCart,
  FaBolt,
  FaBriefcase,
  FaGift,
  FaChartLine,
} from "react-icons/fa";

export const CATEGORIES = {
  income: [
    { id: "salary", label: "Salary", icon: "FaBriefcase", color: "#2ecc71" },
    { id: "bonus", label: "Bonus", icon: "FaGift", color: "#1abc9c" },
    { id: "returns", label: "Returns", icon: "FaChartLine", color: "#16a085" },
  ],
  expense: [
    { id: "food", label: "Food", icon: "FaUtensils", color: "#e67e22" },
    { id: "rent", label: "Rent", icon: "FaHome", color: "#3498db" },
    { id: "travel", label: "Travel", icon: "FaCar", color: "#9b59b6" },
    {
      id: "shopping",
      label: "Shopping",
      icon: "FaShoppingCart",
      color: "#e84393",
    },
    { id: "bills", label: "Bills", icon: "FaBolt", color: "#f1c40f" },
  ],
};

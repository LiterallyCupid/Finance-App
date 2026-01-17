import { FiEdit2, FiTrash2 } from "react-icons/fi";
import {
    FaUtensils,
    FaHome,
    FaCar,
    FaShoppingCart,
    FaBolt,
    FaBriefcase,
    FaGift,
    FaChartLine
} from "react-icons/fa";

const ICON_MAP = {
    FaUtensils,
    FaHome,
    FaCar,
    FaShoppingCart,
    FaBolt,
    FaBriefcase,
    FaGift,
    FaChartLine
};

function TransactionList({ transactions, onEdit, onDelete }) {
    return (
        <ul className="transaction-list">
            {transactions.map((t, index) => {
                const Icon = ICON_MAP[t.categoryIcon];

                return (
                    <li key={index} className="transaction-item">
                        <div className="transaction-info">
                            <span
                                className="icon"
                                style={{ color: t.categoryColor }}
                            >
                                {Icon && <Icon />}
                            </span>
                            <span>{t.categoryLabel}</span>
                        </div>

                        <div className="transaction-actions">
                            <button className="edit-btn" onClick={() => onEdit(index)}>
                                <FiEdit2 />
                            </button>
                            <button className="delete-btn" onClick={() => onDelete(index)}>
                                <FiTrash2 />
                            </button>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default TransactionList;

import { FiBell, FiUser } from "react-icons/fi"
function TopBar() {
    return (
        <header className="topbar">
            <div className="search-box">
                <input placeholder="Search" />
            </div>

            <div className="top-actions">
                <button className="icon-btn"><FiBell /></button>
                <button className="icon-btn"><FiUser /></button>
            </div>
        </header>
    )
}
export default TopBar;


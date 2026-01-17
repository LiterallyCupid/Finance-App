function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="profile">
                <div className="avatar">R</div>
                <div>
                    <p className="name">Ram</p>
                    <span className="role">Student</span>
                </div>
            </div>

            <nav className="nav">
                <a className="active">Dashboard</a>
                <a>Wallet</a>
                <a>Transactions</a>
                <a>Analytics</a>
            </nav>

            <div className="bottom">
                <a>Settings</a>
                <a>Logout</a>
            </div>
        </aside>
    )
}
export default Sidebar
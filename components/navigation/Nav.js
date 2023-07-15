
const Nav = ({ handleInputChange, query }) => {
    return (
        <nav>
            <div className="nav-container">
                <input
                    className="search-input"
                    type="text"
                    onChange={handleInputChange}
                    value={query}
                    placeholder="نام محصول ..."
                />
            </div>
        </nav>
    );
};

export default Nav;
import './Search.css'

const Search = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search for courses</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Enter course (e.g. COMP_SCI 212-0)"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default Search;
const SearchBar = ({ searchTerm, setSearchTerm }) => (
    <div className="text-right mb-8 font-nexa">
        <input
            type="text"
            placeholder="Search artisans..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-xl px-4 py-1.5 md:py-2 w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-[var(--text-hover-clr)]"
        />
    </div>
);

export default SearchBar;

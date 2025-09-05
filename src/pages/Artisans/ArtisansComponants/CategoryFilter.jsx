const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => (
    <div className="flex justify-center mb-6">
        <select
            value={selectedCategory || ""}
            onChange={(e) => setSelectedCategory(e.target.value || null)}
            className="border border-[var(--text-hover-clr)] rounded px-4 py-1.5 md:py-2"
        >
            <option value="">All Categories</option>
            {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                    {cat.name}
                </option>
            ))}
        </select>
    </div>
);

export default CategoryFilter;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { artisans, categories } from "./ArtisansComponants/ArtisansData";
import SearchBar from "./ArtisansComponants/SearchBar";
import ArtisanGrid from "./ArtisansComponants/ArtisanGrid";

const Artisans = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const filteredArtisans = artisans
        .filter((a) =>
            selectedCategory ? a.categoryId === Number(selectedCategory) : true
        )
        .filter((a) =>
            a.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div className="bg-[#fef6eb] px-4 md:px-8 lg:px-16 xl:px-24 py-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-left mb-4 font-cormorant text-[var(--text-hover-clr)]">Meet Our Artisans</h1>
            <p className="text-left text-gray-600 mb-8 font-nexa max-w-xl text-sm md:text-md">Discover talented artisans—look through categories or easily find someone by searching their name.</p>

            <div className="mb-4 text-right font-nexa">
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value || "")}className="border border-[var(--text-hover-clr)] rounded-xl px-4 py-1.5 md:py-2">
                <option value="">All Categories</option>{categories.map((category) => (<option key={category.id} value={category.id}> {category.name} </option>))}</select>
            </div>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ArtisanGrid artisans={filteredArtisans} navigate={navigate} />
        </div>
    );
};

export default Artisans;

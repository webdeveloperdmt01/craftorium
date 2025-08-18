import { useState, useRef, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, User, } from "lucide-react";
import { FaChevronDown } from "react-icons/fa";
import logo from "@/assets/images/ct-logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [isSubShopOpen, setIsSubShopOpen] = useState(false);
  const shopRef = useRef(null);
  const subShopRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        shopRef.current &&
        !shopRef.current.contains(e.target) &&
        subShopRef.current &&
        !subShopRef.current.contains(e.target)
      ) {
        setIsShopOpen(false);
        setIsSubShopOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="bg-[#fef6eb] relative">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-4 md:px-8 lg:px-8 xl:px-24 py-1">
        <div className="flex items-center justify-between w-full lg:w-auto">
          <img src={logo} alt="Logo" className="h-20 w-auto" />
          <button
            className="lg:hidden text-[var(--text-clr)]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:space-x-6 xl:space-x-12 text-md lg:text-lg xl:text-xl font-semibold text-[var(--text-clr)] mt-4 lg:mt-0 space-y-2`}
        >
          <a href="/" className="hover:text-[var(--text-hover-clr)]">
            Home
          </a>
          <div ref={shopRef} className="relative group">
            <button
              onClick={() => setIsShopOpen(!isShopOpen)}
              className="flex items-center hover:text-[var(--text-hover-clr)]"
            >
              Shop <FaChevronDown size={16} className="ml-1" />
            </button>
            {isShopOpen && (
              <div
                ref={subShopRef}
                className="lg:absolute top-full mt-2 bg-white border rounded-lg shadow-lg w-48 p-2 z-50"
              >
                <button
                  onClick={() => setIsSubShopOpen(!isSubShopOpen)}
                  className="flex justify-between items-center w-full px-2 py-1 hover:bg-gray-100 rounded"
                >
                  Clothing
                  <FaChevronDown size={14} />
                </button>
                {isSubShopOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <a
                      href="/"
                      className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                    >
                      Men
                    </a>
                    <a
                      href="/"
                      className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                    >
                      Women
                    </a>
                    <a
                      href="/"
                      className="block px-2 py-1 text-sm hover:bg-gray-100 rounded"
                    >
                      Kids
                    </a>
                  </div>
                )}
                <a
                  href="/"
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                >
                  Accessories
                </a>
                <a
                  href="/"
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                >
                  Home Decor
                </a>
              </div>
            )}
          </div>
          <a href="/" className="hover:text-[var(--text-hover-clr)]">
            Blog
          </a>
          <a href="/" className="hover:text-[var(--text-hover-clr)]">
            About
          </a>
          <a href="/" className="hover:text-[var(--text-hover-clr)]">
            Artisans
          </a>
          <a href="/" className="hover:text-[var(--text-hover-clr)]">
            Contact
          </a>
        </nav>
        <div
          className={`${
            isOpen ? "flex mt-4" : "hidden"
          } lg:flex items-center space-x-4 mb-4`}
        >
          <div className="flex items-center border-2 border-[var(--text-hover-clr)] rounded-full px-5 py-1 w-full lg:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-transparent text-sm flex-1"
            />
            <Search className="w-5 h-5 font-bold text-[var(--text-hover-clr)]" />
          </div>
          <ShoppingCart className="w-6 h-6 text-[var(--text-clr)] cursor-pointer" />
          <User className="w-6 h-6 text-[var(--text-clr)] cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

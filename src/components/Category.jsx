import React, { useRef, useEffect, useState } from "react";
import Flex from "./Flex";
import Container from "./Container";
import Heading from "./Heading";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaUser } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { IoCart } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductData from "../../ProductData"; // Assuming this contains your product list
import Image from "./Image"; // Assuming Image component is available

const Category = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const categoryButtonRef = useRef(null);
  const categoryDropRef = useRef(null);
  const userButtonRef = useRef(null);
  const userDropRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchDropRef = useRef(null);

  const handleCategoryDrop = () => {
    setIsCategoryOpen((prev) => !prev);
    setIsUserOpen(false);
    setIsSearchOpen(false);
  };

  const handleUserDrop = () => {
    setIsUserOpen((prev) => !prev);
    setIsCategoryOpen(false);
    setIsSearchOpen(false);
  };

  const handleSearchFocus = () => {
    setIsSearchOpen(true);
    setIsCategoryOpen(false);
    setIsUserOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoryDropRef.current &&
        !categoryDropRef.current.contains(event.target) &&
        categoryButtonRef.current &&
        !categoryButtonRef.current.contains(event.target)
      ) {
        setIsCategoryOpen(false);
      }

      if (
        userDropRef.current &&
        !userDropRef.current.contains(event.target) &&
        userButtonRef.current &&
        !userButtonRef.current.contains(event.target)
      ) {
        setIsUserOpen(false);
      }

      if (
        searchDropRef.current &&
        !searchDropRef.current.contains(event.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 🛒 Get total cart quantity from Redux state
  const cartItems = useSelector((state) => state.carts.carts);
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  // 🔎 Filter products based on search input
  const filteredProducts = ProductData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-5 border-b bg-categoryColor border-b-categoryBorderColor">
      <Container>
        <Flex>
          {/* 🔥 Shop by Category */}
          <div className="relative w-3/12">
            <button ref={categoryButtonRef} onClick={handleCategoryDrop}>
              <Flex className="pt-5">
                <HiOutlineBars3BottomLeft className="pr-2 text-[25px]" />
                <Heading as="h3" text="Shop by Category" className="text-sm font-dm hover:font-semibold" />
              </Flex>
            </button>

            {/* 🛍 Category Dropdown */}
            {isCategoryOpen && (
              <div ref={categoryDropRef} className="absolute left-0 w-56 bg-white shadow-lg rounded-lg mt-2 z-50">
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-black text-white p-4 pb-6 rounded-lg"
                >
                  {["Accessories", "Furniture", "Electronics", "Clothes", "Bags"].map((category) => (
                    <li
                      key={category}
                      className="px-4 py-2 border-b border-gray-400 hover:border-gray-300 cursor-pointer hover:font-bold"
                    >
                      {category}
                    </li>
                  ))}
                </motion.ul>
              </div>
            )}
          </div>

          {/* 🔎 Search Bar */}
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search Products"
              ref={searchInputRef}
              className="w-full py-4 pl-4 pr-10 border rounded"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={handleSearchFocus}
            />
            <FaSearch className="absolute text-2xl top-4 right-3 text-gray-500" />

            {/* 🔍 Search Results Dropdown */}
            {isSearchOpen && search && (
              <div ref={searchDropRef} className="absolute z-50 w-full bg-white shadow-lg rounded-lg mt-1">
<Link to='/product-desciption'>
<motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                      <div key={item.id} className="flex items-center p-2 border-b last:border-none">
                        <Image imgSrc={item.imgSrc} className="w-10 h-10 mr-2" />
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <div className="flex text-sm text-gray-600">
                            <span>${item.price}</span>
                            <span className="ml-2">{item.color}</span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="p-2 text-gray-500">No products found.</p>
                  )}
                </motion.div>
</Link>
              </div>
            )}
          </div>

          {/* 👤 User & 🛒 Cart */}
          <div className="relative w-3/12 pt-5">
            <Flex className="justify-end">
              {/* 👤 User Dropdown */}
              <button ref={userButtonRef} onClick={handleUserDrop}>
                <Flex className="pr-5 text-base">
                  <FaUser />
                  <GoTriangleDown />
                </Flex>
              </button>

              {/* 🛒 Cart */}
              <Link to="/cart" className="relative">
                <IoCart className="text-xl" />
                {totalCartQuantity > 0 && (
                  <Heading
                    as="h3"
                    text={totalCartQuantity.toString()}
                    className="absolute w-4 h-4 px-1 text-xs text-white bg-black rounded-lg right-[0.6px] top-3"
                  />
                )}
              </Link>
            </Flex>

            {/* 👤 User Dropdown Menu */}
            {isUserOpen && (
              <div ref={userDropRef} className="absolute right-0 w-40 bg-white shadow-lg rounded-lg mt-2 z-50">
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-black text-white p-4 pb-6 rounded-lg"
                >
                  {["Login", "Sign Up", "Profile"].map((item, index) => (
                    <Link key={index} to={`/${item.toLowerCase().replace(" ", "-")}`}>
                      <li className="px-4 py-2 border-b border-gray-400 hover:border-gray-300 cursor-pointer hover:font-bold">
                        {item}
                      </li>
                    </Link>
                  ))}
                </motion.ul>
              </div>
            )}
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Category;

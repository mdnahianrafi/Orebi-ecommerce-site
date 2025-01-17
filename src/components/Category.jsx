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

const Category = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const categoryButtonRef = useRef(null);
  const categoryDropRef = useRef(null);
  const userButtonRef = useRef(null);
  const userDropRef = useRef(null);

  const handleCategoryDrop = () => {
    setIsCategoryOpen((prev) => !prev);
    setIsUserOpen(false);
  };

  const handleUserDrop = () => {
    setIsUserOpen((prev) => !prev);
    setIsCategoryOpen(false);
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
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Get the total cart quantity from Redux state
  const cartItems = useSelector((state) => state.carts.carts); // Access the carts array
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0); // Calculate total items

  return (
    <div className="py-5 border-b-[1px] bg-categoryColor border-b-categoryBorderColor">
      <Container>
        <Flex>
          <div className="relative w-3/12">
            <button ref={categoryButtonRef} onClick={handleCategoryDrop}>
              <Flex className="pt-5">
                <HiOutlineBars3BottomLeft className=" pr-2 text-[25px]" />
                <Heading
                  as="h3"
                  text="Shop by Category"
                  className="text-sm duration-300 font-dm hover:font-semibold hover:ease-in-out"
                />
              </Flex>
            </button>
            <div className="absolute left-0 z-10 w-8/12 bg-white rounded-md shadow-lg">
              {isCategoryOpen && (
                <div ref={categoryDropRef}>
                  <motion.ul
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-1 z-50 bg-black w-auto text-[#767676] h-auto p-4 pb-6 rounded-lg "
                  >
                    <li className="px-4 py-1 text-white font-dm duration-300 border-b-[1px] border-b-gray-400 hover:border-b-gray-400 cursor-pointer hover:border-b-[2px] hover:font-bold">
                      Accessories
                    </li>
                    <li className="px-4 py-1 text-white font-dm duration-300 border-b-[1px] hover:border-b-gray-400 cursor-pointer border-b-gray-400 hover:border-b-[2px] hover:font-bold">
                      Furniture
                    </li>
                    <li className="px-4 py-1 text-white duration-300 font-dm border-b-[1px] hover:border-b-gray-400 cursor-pointer border-b-gray-400 hover:border-b-[2px] hover:font-bold">
                      Electronics
                    </li>
                    <li className="px-4 py-1 text-white font-dm duration-300 border-b-[1px] hover:border-b-gray-400 cursor-pointer border-b-gray-400 hover:border-b-[2px] hover:font-bold">
                      Clothes
                    </li>
                    <li className="px-4 py-1 text-white font-dm duration-300 border-b-[1px] hover:border-b-gray-400 cursor-pointer border-b-gray-400 hover:border-b-[2px] hover:font-bold">
                      Bags
                    </li>
                  </motion.ul>
                </div>
              )}
            </div>
          </div>
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full py-4 pl-4 pr-5 "
            />
            <button>
              <FaSearch className="absolute text-2xl top-4 right-2" />
            </button>
          </div>
          <div className="relative w-3/12 pt-5">
            <Flex className="justify-end">
              <button ref={userButtonRef} onClick={handleUserDrop}>
                <Flex className="pr-5 text-base">
                  <FaUser />
                  <GoTriangleDown />
                </Flex>
              </button>

              <div className="relative">
                <Link to="/cart">
                  <div>
                    <IoCart className="text-xl" />
                    <Heading
                      as="h3"
                      text={totalCartQuantity.toString()} // Display total cart quantity
                      className="absolute w-4 h-4 px-1 text-xs text-white bg-black rounded-lg right-[0.6px] top-3"
                    />
                  </div>
                </Link>
              </div>
            </Flex>

            <div className="absolute right-0 z-10 bg-white rounded-md shadow-lg w-44">
              {isUserOpen && (
                <div ref={userDropRef}>
                  <motion.ul
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute z-50 w-auto h-auto p-5 pb-6 bg-black rounded-lg text top-1"
                  >
                    <Link to="/login">
                      <li className="text-white font-dm px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:font-bold duration-300 cursor-pointer hover:bg-white hover:text-black">
                        Login
                      </li>
                    </Link>
                    <Link to="/signup">
                      <li className="text-white font-dm px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:font-bold duration-300 cursor-pointer hover:bg-white hover:text-black">
                        Sign Up
                      </li>
                    </Link>
                    <Link to="/my-account">
                      <li className="text-white font-dm px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-black hover:font-bold duration-300 cursor-pointer hover:bg-white hover:text-black">
                        Profile
                      </li>
                    </Link>
                  </motion.ul>
                </div>
              )}
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Category;

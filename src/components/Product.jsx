import React from 'react';
import Image from './Image';
import Badge from './Badge';
import Flex from './Flex';
import Heading from './Heading';
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/addToCartSlice';

const Product = ({ id, imgSrc, name, price, color, className }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const productToAdd = {
      id, // The unique product ID, passed as a prop
      name,
      price,
      quantity: 1, // Start with a quantity of 1
    };
    dispatch(addToCart(productToAdd)); // Dispatch the action with the product data
  };

  return (
    <div className={`relative sm:w-[250px] md:w-[250px] xl:w-[350px] p-4 mt-2 group opacity-95 hover:opacity-100 ${className} `}>
      <Link to='/product-description'><Image imgSrc={imgSrc} /></Link>
      <Badge badgeName="New" className="absolute top-[30px] left-[30px]" />
      <Link to='/product-description'>
        <Flex className={"mt-[30px] mb-[22px] justify-between"}>
          <Heading as='h3' text={name} className='text-sm font-bold md:text-base font-dm ' />
          <Heading
            as="h3"
            className="text-sm leading-7 text-productTextColor"
            text={`$${price}`} // Display price as a dollar amount
          />
        </Flex>
      </Link>

      <Heading
        as="h3"
        className="text-base leading-7 text-productTextColor"
        text={color}
      />
      {/* Wishlist, Compare, Add to Cart - Hidden by Default */}
      <Flex className="absolute right-0 flex-col hidden w-full p-4 bg-white bottom-32 group-hover:flex">
        <a href="#">
          <Flex className="justify-end">
            <Heading
              as="h3"
              className="pb-5 text-base text-productTextColor hover:text-black"
              text="Add To Wishlist"
            />
            <FaHeart className="font-[16px] m-1" />
          </Flex>
        </a>

        <a href="#">
          <Flex className="justify-end">
            <Heading
              as="h3"
              className="pb-5 text-base leading-7 text-productTextColor hover:text-black"
              text="Compare"
            />
            <TfiReload className="font-[16px] m-1" />
          </Flex>
        </a>

        <button onClick={handleAddToCart}>
          <Flex className="justify-end">
            <Heading
              as="h3"
              className="text-base leading-7 text-productTextColor hover:text-black"
              text="Add To Cart"
            />
            <FaShoppingCart className="font-[16px] m-1" />
          </Flex>
        </button>
      </Flex>
    </div>
  );
};

export default Product;

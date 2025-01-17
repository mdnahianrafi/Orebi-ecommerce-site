import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Image from '../components/Image'
import smallglasses from '../assets/images/small sunglasses.png'
import QuantityBox from "../components/QuantityBox";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Container>
        <Heading
          as="h3"
          text="Cart"
          className="pt-32 pb-8 text-3xl font-bold md:text-3xl xl:text-4xl lg:text-5xl font-dm"
        />
        <Flex>
          <Heading
            as="h3"
            text="Home"
            className="text-sm md:text-base font-dm text-menuText "
          />
          <MdKeyboardArrowRight className="mx-2 mt-[2px] text-xl text-black" />
          <Heading
            as="h3"
            text="Cart"
            className="text-sm md:text-base font-dm text-menuText "
          />
        </Flex>

        <Flex className="mt-28 md:mt-[140px] pt-10 md:pt-8  bg-categoryColor justify-between px-8 md:px-32 pb-4">
          <Heading
            as="h3"
            text="Product"
            className="text-sm font-semibold md:text-base font-dm"
          />
          <Heading
            as="h3"
            text="Price"
            className=" text-sm md:text-base font-dm font-semibold ]"
          />
          <Heading
            as="h3"
            text="Quantity"
            className="text-sm font-semibold md:text-base font-dm"
          />
          <Heading
            as="h3"
            text="Total"
            className="text-sm font-semibold md:text-base font-dm"
          />
        </Flex>

        <div className="border-[1px] py-7 border-b-gray-100">
            <Flex className='justify-between lg:pr-36'>
               <div className="flex">
               <ImCross className="mt-4 mr-2 text-xs md:mt-10 md:mr-8 md:text-base" />
             <Image imgSrc={smallglasses} imgAlt={'smallglasses.png'} className='h-auto w-11 md:w-full md:h-full'/>
             <Heading
            as="h3"
            text="Product Name"
            className="mt-4 ml-2 text-xs font-semibold md:text-base font-dm md:mt-10"
          />
                </div> 
               <div className="">
             <Heading
            as="h3"
            text="$44.00"
            className="mt-4 ml-2 text-sm font-semibold md:text-xl font-dm md:pt-4"
          />
                </div> 
               <div className="mt-2 md:pt-4">
<QuantityBox/>
                </div> 
                <div className="">
             <Heading
            as="h3"
            text="$44.00"
            className="mt-4 ml-2 text-sm font-semibold md:text-xl font-dm md:pt-4"
          />
                </div> 
            </Flex>
        </div>
        <div className="py-5 border-[1px] border-gray-100">
      
<Flex className='justify-between px-5'>
  <div className="flex">
  <select
            id="dropdown"
            className="border-[1px] font-dm text-menuText pl-1 pr-[60px] py-1 md:pl-2 md:py-2 xl:py-4 md:pr-[100px] xl:pr-[172px]"
          >
            <option value="" disabled selected hidden className="">
              <Heading as='h3' text='SIZE ' className='text-sm md:text-base text-menuText font-dm'/>
            </option>
            <option value="option1">S</option>
            <option value="option2">M</option>
            <option value="option3">L</option>
            <option value="option3">XL</option>
            <option value="option3">XXL</option>
          </select>
          <Heading as='h3' text='Apply coupon ' className='pt-2 pl-5 text-xs font-bold md:text-sm font-dm'/>
  </div>
  <div>
  <Heading as='h3' text='Update cart' className='pt-2 pl-5 text-xs font-bold md:text-sm font-dm'/>
  </div>
</Flex>
        </div>

       <div className="text-right pt-14">
       <Heading as='h3' text='Cart Totals' className='pt-2 pl-5 text-sm font-bold md:text-xl font-dm sm:text-base'/>
       </div>
<div className="flex justify-end py-7 md:py-[30px]">
<table >
    <tr>
      <th className="border-[1px] border-gray-100 pl-3 md:pl-4 py-2 md:py-3  pr-[50px] md:pr-[234px]">
      <Heading as='h3' text='Subtotal' className='pt-2 pl-1 text-sm font-bold md:pl-5 md:text-base font-dm'/> 
      </th>
      <td className="border-[1px] border-gray-100 pl-3 md:pl-4 py-2 md:py-3  pr-[50px] md:pr-[234px]">
      <Heading as='h3' text='389.00 $' className='pt-2 pl-1 text-sm md:pl-5 md:text-base font-dm text-menuText'/> 
      </td>
 
    </tr>
    <tr>
    <th className="border-[1px] border-gray-100 pl-1 md:pl-4 py-2 md:py-3  pr-[50px] md:pr-[234px]">
      <Heading as='h3' text='Total' className='pt-2 pl-5 text-sm font-bold md:text-base font-dm'/> 
      </th>
    <th className="border-[1px] border-gray-100 pl-1 md:pl-4 py-2 md:py-3  pr-[50px] md:pr-[234px]">
      <Heading as='h3' text='389.99 $' className='pt-2 pl-1 text-sm md:pl-5 md:text-base font-dm'/> 
      </th>

    </tr>


</table>
</div>
                {/* Checkout Button */}
<Link to='/checkout'>
<div className="pb-[51px] md:pb-36  border-b-2 pt-8 md:pt-6 border-b-gray-200 flex justify-end  ">
          <button className="border-[2px] bg-black border-black  text-white hover:bg-transparent hover:text-black hover:ease-in-out duration-300 w-full sm:w-auto block  xl:px-7">
            <Heading
              as="h3"
              text="Proceed to Checkout"
              className="px-12 py-5 text-base font-bold md:text-lg font-dm"
            />
          </button>
          </div>
</Link>
      </Container>
    </>
  );
};

export default Cart;

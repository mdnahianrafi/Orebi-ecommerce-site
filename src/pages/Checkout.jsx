import React, { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Flex from "../components/Flex";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText(!showText);
  };
  return (
    <>
      <Container>
        <Heading
          as="h3"
          text="Checkout"
          className="pt-32 pb-8 text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl font-dm"
        />
        <Flex>
          <Heading
            as="h3"
            text="Home"
            className="text-sm sm:text-base font-dm text-menuText "
          />
          <MdKeyboardArrowRight className="mx-2 mt-[2px] text-xl text-black" />
          <Heading
            as="h3"
            text="Checkout"
            className="text-sm sm:text-base font-dm text-menuText "
          />
        </Flex>
        <Heading
          as="h3"
          text={
            <>
              <span className="text-menuText">Have a coupon? </span>
              <span className="">Click here to enter your code </span>
            </>
          }
          className="pt-24 md:pt-28 [b-10 md:pb-12 text-sm md:text-base font-dm  lg:pr-[645px] xl:pr-[662px]  2xl:pr-[759px]"
        />

        <div>
          <Heading
            as="h3"
            text="Billing Details"
            className="pt-32 pb-8 text-xl font-bold md:pb-14 md:text-3xl xl:text-4xl lg:text-5xl font-dm"
          />
          <Flex className="gap-x-8 md:gap-x-9">
            <div className="w-1/2 md:w-full">
              <Heading
                as="h3"
                text="First Name *"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
              <input
                type="text"
                required
                placeholder="First Name"
                className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
              />
            </div>
            <div className="w-1/2 md:w-full">
              <Heading
                as="h3"
                text="Last Name *"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
              />
            </div>
          </Flex>

          <div>
            <form
              action=""
              className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none"
            >
              <label for="country">
                <Heading
                  as="h3"
                  text="Country"
                  className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
                />
              </label>
              <select
                id="country"
                name="country"
                className="w-2/3 text-sm md:w-full focus:outline-none md:text-base text-menuText"
              >
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="in">India</option>
              </select>
            </form>
          </div>

          <form
            action=""
            className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none"
          >
            <label for="region">
              <Heading
                as="h3"
                text="Region / State"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
            </label>
            <select
              id="region"
              name="region"
              required
              className="w-2/3 text-sm md:w-full focus:outline-none md:text-base text-menuText"
            >
              <option value="">Select a region </option>
              <option value="ny">New York</option>
              <option value="ca">California</option>
              <option value="tx">Texas</option>
              <option value="on">Ontario</option>
            </select>
          </form>

          <div className="">
            <Heading
              as="h3"
              text="Street Address *"
              className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
            />
            <input
              type="text"
              required
              placeholder="House number and street name"
              className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
            <input
              type="text"
              required
              placeholder="Apartment, suite, unit etc. (optional)"
              className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
          <div className="">
            <Heading
              as="h3"
              text="Town/City *"
              className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
            />
            <input
              type="text"
              required
              placeholder="Town/City"
              className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
          <div className="">
            <Heading
              as="h3"
              text="County (optional)"
              className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
            />
            <input
              type="text"
              required
              placeholder="Country"
              className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
          <div className="">
            <Heading
              as="h3"
              text="Post Code *"
              className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
            />
            <input
              type="text"
              placeholder="Post Code"
              required
              className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
          <div className="">
            <Heading
              as="h3"
              text="Phone *"
              className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
            />
            <input
              type="text"
              required
              placeholder="Phone"
              className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
          <div className="">
            <Heading
              as="h3"
              text="Email Address *"
              className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
        </div>
        <div>
          <Heading
            as="h3"
            text="Additional Information"
            className="pt-32 pb-8 text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl font-dm"
          />

          <div>
            <Heading
              as="h3"
              text="Other Notes (optional)"
              className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
            />
            <input
              type="text"
              placeholder="Notes about your order, e.g. special notes for delivery."
              required
              className="w-full pt-4 pb-10 text-base border-b-2 md:pb-16 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
        </div>

        <div>
          <Heading
            as="h3"
            text="Your Order"
            className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
          />
          <div className="py-10 md:py-14">
            <table>
              <tr>
                <th className="border-[1px] border-gray-100 pl-3 md:pl-4 py-2 md:py-3  pr-[100px] md:pr-[234px]">
                  <Heading
                    as="h3"
                    text="Product"
                    className="pt-2 pl-5 text-sm font-bold md:text-base font-dm"
                  />
                </th>
                <th className="border-[1px] border-gray-100 pl-3 md:pl-4 py-2 md:py-3  pr-[100px] md:pr-[234px]">
                  <Heading
                    as="h3"
                    text="Total"
                    className="pt-2 pl-5 text-sm md:text-base font-dm text-menuText"
                  />
                </th>
              </tr>

              <tr>
                <th className="border-[1px] border-gray-100 pl-3 md:pl-4 py-2 md:py-3  pr-[100px] md:pr-[234px]">
                  <Heading
                    as="h3"
                    text="Product name x 1"
                    className="pt-2 pl-5 text-sm font-bold md:text-base font-dm"
                  />
                </th>
                <td className="border-[1px] border-gray-100 pl-3 md:pl-4 py-2 md:py-3  pr-[100px] md:pr-[234px]">
                  <Heading
                    as="h3"
                    text="389.99 $"
                    className="pt-2 pl-5 text-sm md:text-base font-dm"
                  />
                </td>
              </tr>
              <tr>
                <th className="border-[1px] border-gray-100 pl-3 md:pl-4 py-2 md:py-3  pr-[100px] md:pr-[234px]">
                  <Heading
                    as="h3"
                    text="Subtotal"
                    className="pt-2 pl-2 text-sm font-bold md:text-base font-dm"
                  />
                </th>
                <td className="border-[1px] border-gray-100 pl-3 md:pl-4 py-2 md:py-3  pr-[100px] md:pr-[234px]">
                  <Heading
                    as="h3"
                    text="389.99 $"
                    className="pt-2 pl-5 text-sm md:text-base font-dm"
                  />
                </td>
              </tr>
              <tr>
                <th className="border-[1px] border-gray-100 pl-3 md:pl-4 py-2 md:py-3  pr-[100px] md:pr-[234px]">
                  <Heading
                    as="h3"
                    text="Total"
                    className="pt-2 pl-5 text-sm font-bold md:text-base font-dm"
                  />
                </th>
                <td className="border-[1px] border-gray-100 pl-3 md:pl-4 py-2 md:py-3  pr-[100px] md:pr-[234px]">
                  <Heading
                    as="h3"
                    text="389.99 $"
                    className="pt-2 pl-5 text-sm md:text-base font-dm"
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="mt-16 border-[1px] border-gray-100 py-[30px]">
          <div className="flex pl-14">
            <button onClick={handleClick}>
              <input type="radio" className="" />
            </button>
            <Heading
              as="h3"
              text="Bank 1"
              className="pl-1 text-base font-bold md:text-xl font-dm"
            />
          </div>
      {/* Conditional Text */}
      {showText && (
<Heading as='h3' text='Pay via Bank; you can pay with your credit card if you don’t have a Bank account.' className='w-11/12 px-5 pt-12 pb-4 mt-1 ml-1 bg-gray-100 rounded popup text-menuText'/>
      )}
          <div className="flex mt-8 pl-14">
            <input type="radio" />
            <Heading
              as="h3"
              text="Bank 2"
              className="pl-1 text-base font-bold md:text-xl font-dm text-menuText"
            />

          </div>
          <Heading
              as="h3"
              text="Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."
              className="pl-14 text-base font-bold pt-[30px] md:text-xl font-dm text-menuText"
            />
        </div>


        <div className="pb-[51px] md:pb-[71px]  border-b-2 pt-10 md:pt-8 border-b-gray-200 ">
<Link to='/*'>
<button className="border-[2px] border-black bg-black text-white hover:bg-transparent hover:text-black hover:ease-in-out duration-300 w-full sm:w-auto block  xl:px-7">
            <Heading
              as="h3"
              text="Proceed to Bank"
              className="px-12 py-5 text-base font-bold sm:text-lg font-dm"
            />
          </button>
</Link>
        </div>
      </Container>
    </>
  );
};

export default Checkout;

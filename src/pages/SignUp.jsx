import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import { MdKeyboardArrowRight } from "react-icons/md";
const SignUp = () => {
  return (
    <>

      <Container>
      <Heading
        as="h3"
        text="Sign Up"
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
            text="Sign Up"
            className="text-sm sm:text-base font-dm text-menuText "
          />
        </Flex>

        <Heading
          as="h3"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
          className="pt-24 md:pt-28 pb-12 text-xs md:text-base font-dm text-menuText lg:pr-[645px] xl:pr-[662px] border-b-[2px] border-b-gray-300 2xl:pr-[759px]"
        />

        <div>
          <Heading
            as="h3"
            text="Your Personal Details"
            className="pt-32 pb-8 text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl font-dm"
          />
          <Flex className="gap-x-[36px]">
            <div className="w-1/2 md:w-full">
              <Heading
                as="h3"
                text="First Name"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
              <input
                type="text"
                placeholder="First Name"
                className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
              />
            </div>
            <div className="w-1/2 md:w-full">
              <Heading
                as="h3"
                text="Last Name"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
              />
            </div>
          </Flex>
          <Flex className="mt-8 gap-x-[36px]  pb-[70px] border-b-2 border-b-gray-200">
            <div className="w-1/2 md:w-full">
              <Heading
                as="h3"
                text="Email Address"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
              <input
                type="email"
                placeholder="company@domain.com"
                className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
              />
            </div>
            <div className="w-1/2 md:w-full">
              <Heading
                as="h3"
                text="Telephone Number"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{10}"
                placeholder="Enter your phone number"
                required
                className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
              />
            </div>
          </Flex>
        </div>
        <div>
          <Heading
            as="h3"
            text="New Customer"
            className="pt-32 pb-8 text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl font-dm"
          />
          <Flex className="gap-x-[36px]">
            <div className="w-1/2 md:w-full">
              <Heading
                as="h3"
                text="Address"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
              <input
                type="text"
                placeholder="4279 Zboncak Port Suite 6212"
                className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
              />
            </div>
            <div className="w-1/2 md:w-full">
              <Heading
                as="h3"
                text="Address 2"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
              <input
                type="text"
                placeholder="-----"
                className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
              />
            </div>
          </Flex>
          <Flex className="mt-8 gap-x-[36px]  pb-[70px] ">
            <div className="w-1/2 md:w-full">
              <Heading
                as="h3"
                text="City"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
              <input
                type="email"
                placeholder="Your City"
                className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
              />
            </div>
            <div className="w-1/2 md:w-full">
              <Heading
                as="h3"
                text="Postcode"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
              <input
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{10}"
                placeholder="00056"
                required
                className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
              />
            </div>
          </Flex>
          <Flex className='gap-x-[36px]'>
            <div className="w-1/2">
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
                <select id="country" name="country" required className="w-2/3 text-sm focus:outline-none md:text-base text-menuText">
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="in">India</option>
                </select>
              </form>
            </div>
            <div className="w-1/2">

            <form action="" className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none">
            <label for="region">
            <Heading
                    as="h3"
                    text="Region / State"
                    className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
                  />
            </label>
        <select id="region" name="region" required className="w-2/3 text-sm focus:outline-none md:text-base text-menuText">
            <option value="">Select a region      </option>
            <option value="ny">New York</option>
            <option value="ca">California</option>
            <option value="tx">Texas</option>
            <option value="on">Ontario</option>
        </select>
            </form>

            </div>
          </Flex>
        </div>
        <div>
        <Heading
            as="h3"
            text="New Customer"
            className="pt-32 pb-8 text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl font-dm"
          />
          <Flex className="gap-x-[36px] pb-[71px] border-b-2 border-b-gray-200">
            <div className="w-1/2 md:w-full">
              <Heading
                as="h3"
                text="Password"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
              />
            </div>
            <div className="w-1/2 md:w-full">
              <Heading
                as="h3"
                text="Repeat Password"
                className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
              />
              <input
                type="password"
                placeholder="Repeat password"
                className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
              />
            </div>
          </Flex>

          <div>
            <Flex className='gap-x-[14px] pt-16'>
                <input type="checkbox"    id="toggle"  className="p-1 text-transparent bg-gray-400 border-b-4 border-b-gray-500 "/>
                <Heading as='h3' text="I have read and agree to the Privacy Policy" className='font-dm text-menuText '/>
            </Flex>
            <Flex className='gap-x-[32px] py-7'>
  <div>
  <Heading as='h3' text="Subscribe Newsletter" className='font-dm text-menuText '/>
  </div>
  <div className="flex gap-x-[14px]">
  <Heading as='h3' text="Yes" className='font-dm text-menuText '/>
  <input type="checkbox"  className="p-1 text-transparent bg-gray-400 border-b-4 border-b-gray-500 "/>
  
  </div>
  <div className="flex gap-x-[14px]">
  <Heading as='h3' text="No" className='font-dm text-menuText '/>
  <input type="checkbox"  className="p-1 text-transparent bg-black border-b-4 border-b-gray-500"/>
  
  </div>
            </Flex>
          </div>
        </div>
                {/* Login Button */}
                <div
                 className="pb-[51px] md:pb-36  border-b-2 pt-8 md:pt-6 border-b-gray-200 ">
          <button
          type="submit"
          className="border-[2px] bg-black border-black  text-white hover:bg-transparent hover:text-black hover:ease-in-out duration-300 w-full sm:w-auto block  xl:px-7">
            <Heading
              as="h3"
              text="Login"
              className="px-12 py-5 text-base font-bold md:text-lg font-dm"
            />
          </button>
          </div>


      </Container>
    </>
  );
};

export default SignUp;

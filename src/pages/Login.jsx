import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Flex from "../components/Flex";
import { MdKeyboardArrowRight } from "react-icons/md";
const Login = () => {
  return (
    <>
      <Container>
        <Heading
          as="h3"
          text="Login"
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
            text="Login"
            className="text-sm sm:text-base font-dm text-menuText "
          />
        </Flex>

        <Heading
          as="h3"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
          className="pt-24 md:pt-28 pb-12 text-xs md:text-base font-dm text-menuText lg:pr-[645px] xl:pr-[645px] border-b-[2px] border-b-gray-300"
        />

        <Heading
          as="h3"
          text="Returning Customer"
          className="pt-24 pb-8 text-xl font-bold md:pt-32 md:text-3xl xl:text-4xl lg:text-5xl font-dm"
        />
        <Flex className={"gap-x-[36px]"}>
          <div className="w-1/2 md:w-full">
            <Heading
              as="h3"
              text="Email Address"
              className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
            />
            <input
              type="email" required
              placeholder="Your email here"
              className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
          <div className="w-1/2 md:w-full">
            <Heading
              as="h3"
              text="Password"
              className="py-3 text-lg font-bold leading-10 md:text-xl font-dm"
            />
            <input
              type="Password" required
              placeholder="password"
              className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
        </Flex>
        {/* Login Button */}
        <div className="pb-[51px] md:pb-[71px]  border-b-2 pt-10 md:pt-8 border-b-gray-200 ">
          <button className="border-[2px] border-black bg-black text-white hover:bg-transparent hover:text-black hover:ease-in-out duration-300 w-full sm:w-auto block  xl:px-7">
            <Heading
              as="h3"
              text="Login"
              className="px-12 py-5 text-base font-bold sm:text-lg font-dm"
            />
          </button>
        </div>
        <Heading
          as="h3"
          text="New Customer"
          className="pt-20 text-xl font-bold md:pt-32 md:text-3xl xl:text-4xl lg:text-5xl font-dm"
        />

        <Heading
          as="h3"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the."
          className="pt-14 md:pt-12 pb-12 text-xs md:text-base font-dm text-menuText md:pr-[645px] "
        />

        <div className="pb-[90px] md:pb-[138px]  border-b-2 pt-8 md:pt-6 border-b-gray-200 ">
          <button className="border-[2px] border-black bg-black text-white hover:bg-transparent hover:text-black hover:ease-in-out duration-300 w-full sm:w-auto block  xl:px-7">
            <Heading
              as="h3"
              text="Continue"
              className="px-12 py-5 text-base font-bold sm:text-lg font-dm"  
            />
          </button>
        </div>
      </Container>
    </>
  );
};

export default Login;

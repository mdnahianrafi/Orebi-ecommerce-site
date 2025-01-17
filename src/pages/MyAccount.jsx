import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Heading from "../components/Heading";
import { MdKeyboardArrowRight } from "react-icons/md";
const MyAccount = () => {
  return (
    <>
      <Container>
        <Heading
          as="h3"
          text="My Account"
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
            text="My account"
            className="text-sm sm:text-base font-dm text-menuText "
          />
        </Flex>

        <Flex className="pt-32 pb-[120px] md:pt-28 md:pb-[140px]">
          <div className="w-1/3">
            <Heading
              as="h3"
              text="Dashboard"
              className="w-1/2 text-sm duration-300 border-b-2 md:text-base font-dm text-menuText hover:font-bold hover:text-black pb-7 border-b-gray-200 hover:ease-in-out"
            />
            <Heading
              as="h3"
              text="Others"
              className="w-1/2 pt-8 text-sm duration-300 border-b-2 md:text-base font-dm text-menuText hover:font-bold hover:text-black pb-7 border-b-gray-200 hover:ease-in-out"
            />
            <Heading
              as="h3"
              text="Downloads"
              className="w-1/2 pt-8 text-sm duration-300 border-b-2 md:text-base font-dm text-menuText hover:font-bold hover:text-black pb-7 border-b-gray-200 hover:ease-in-out"
            />
            <Heading
              as="h3"
              text="Address"
              className="w-1/2 pt-8 text-sm duration-300 border-b-2 md:text-base font-dm text-menuText hover:font-bold hover:text-black pb-7 border-b-gray-200 hover:ease-in-out"
            />
            <Heading
              as="h3"
              text="Account Details"
              className="w-1/2 pt-8 text-sm duration-300 border-b-2 md:text-base font-dm text-menuText hover:font-bold hover:text-black pb-7 border-b-gray-200 hover:ease-in-out"
            />
            <Heading
              as="h3"
              text="Logout"
              className="w-1/2 pt-8 text-sm duration-300 border-b-2 md:text-base font-dm text-menuText hover:font-bold hover:text-black pb-7 border-b-gray-200 hover:ease-in-out"
            />
          </div>
          <div className="w-2/3">
            <Heading
              as="h3"
              text={
                <>
                  <span className="text-menuText">Hello</span>{" "}
                  <span className="text-black">admin</span> (
                  <span className="text-menuText">not</span>{" "}
                  <span className="text-black">admin</span>
                  <span className="text-menuText">?</span>{" "}
                  <span className="text-black">Log out</span>)
                </>
              }
              className="font-dm"
            />


<Heading
  as="h3"
  text={
    <>
    <span className="text-menuText">From your account dashboard you can view your</span> {" "}
      <span className="text-black">recent orders,</span>{" "}
      <span className="text-menuText">manage your</span> {" "}
      <span className="text-black">shipping and billing address </span>
      <span className="text-menuText">, and</span> {" "}
      <span className="text-black">edit your password and account details. </span>
    </>
  }
  className="pt-12 leading-8 font-dm"
/>
          </div>
          
        </Flex>
      </Container>
    </>
  );
};

export default MyAccount;

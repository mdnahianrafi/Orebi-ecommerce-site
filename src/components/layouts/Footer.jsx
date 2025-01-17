import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Heading from '../Heading';
import Image from '../Image';
import FooterLogo from '../../assets/images/footer logo.png';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Footers Part Start */}
      <div className="bg-footerBg">
        <Container className="max-w-headerContainer py-[53px]">
          <Flex className="justify-between gap-x-[13px]">
            <div className="w-[20%]">
              <Heading as="h3" text="MENU" className="text-sm font-bold md:text-base font-dm" />
              <Heading as="h3" text="Home" className="text-xs md:text-sm font-dm text-footerTextColor pt-7" />
              <Heading as="h3" text="Shop" className="pt-4 text-xs md:text-sm font-dm text-footerTextColor" />
              <Heading as="h3" text="About" className="pt-4 text-xs md:text-sm font-dm text-footerTextColor" />
              <Heading as="h3" text="Contact" className="pt-4 text-xs md:text-sm font-dm text-footerTextColor" />
              <Heading as="h3" text="Journal" className="pt-4 text-xs md:text-sm font-dm text-footerTextColor" />
            </div>
            <div className="w-[20%]">
              <Heading as="h3" text="SHOP" className="text-xs font-bold md:text-base font-dm" />
              <Heading as="h3" text="Category 1" className="text-sm md:text-sm font-dm text-footerTextColor pt-7" />
              <Heading as="h3" text="Category 2" className="pt-4 text-xs md:text-sm font-dm text-footerTextColor" />
              <Heading as="h3" text="Category 3" className="pt-4 text-xs md:text-sm font-dm text-footerTextColor" />
              <Heading as="h3" text="Category 4" className="pt-4 text-xs md:text-sm font-dm text-footerTextColor" />
              <Heading as="h3" text="Category 5" className="pt-4 text-xs md:text-sm font-dm text-footerTextColor" />
            </div>
            <div className="w-[30%]">
              <Heading as="h3" text="HELP" className="text-sm md:text-base font-sm bold font-dm" />
              <Heading as="h3" text="Privacy Policy" className="text-xs md:text-sm font-dm text-footerTextColor pt-7" />
              <Heading as="h3" text="Terms & Conditions" className="pt-4 text-xs md:text-sm font-dm text-footerTextColor" />
              <Heading as="h3" text="Special E-shop" className="pt-4 text-xs md:text-sm font-dm text-footerTextColor" />
              <Heading as="h3" text="Shipping" className="pt-4 text-xs md:text-sm font-dm text-footerTextColor" />
              <Heading as="h3" text="Secure Payments" className="pt-4 text-xs md:text-sm font-dm text-footerTextColor" />
            </div>
            <div className="w-[50%]">
              <Heading as="h3" text="(052) 611-5711 company@domain.com" className="pr-[98px] text-sm font-bold font-dm" />
              <Heading as="h3" text="575 Crescent Ave. Quakertown, PA 18951" className="text-xs md:text-base font-dm text-footerTextColor pt-7" />
            </div>
            <div className="w-[40%] ">
              <Flex className=" md:justify-center">
                <Image imgSrc={FooterLogo} imgAlt="footer logo.png" className='sm:hidden md:block' />
              </Flex>
            </div>
          </Flex>
          <Flex className="justify-between mt-12">
            <Flex>
              <FaFacebookF className="mr-4 text-sm md:text-base" />
              <FaLinkedinIn className="mr-4 text-sm md:text-base" />
              <FaInstagram className=" text-base md;text-base" />
            </Flex>
            <Heading as="h3" text="2020 Orebi Minimal eCommerce Figma Template by Adveits" className="text-xs md:text-base font-dm text-footerTextColor" />
          </Flex>
        </Container>
      </div>
      {/* Footers Part End */}
    </>
  );
};

export default Footer;

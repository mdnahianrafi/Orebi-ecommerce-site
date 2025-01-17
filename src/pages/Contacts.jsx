import React from 'react';
import Container from '../components/Container';
import Flex from '../components/Flex';
import Heading from '../components/Heading';
import { MdKeyboardArrowRight } from "react-icons/md";

const Contacts = () => {
  return (
    <>
      <Container className={''}>
        {/* Title section with default text alignment */}
        <Heading 
          as="h3" 
          text="Contacts" 
          className="pt-32 pb-8 text-3xl font-bold sm:text-3xl md:text-4xl lg:text-5xl font-dm"
        />
        
        {/* Breadcrumb */}
        <Flex className="justify-start">
          <Heading 
            as="h3" 
            text="Home" 
            className="text-sm sm:text-base font-dm text-menuText "
          />
          <MdKeyboardArrowRight className="mx-2 mt-[2px] text-xl text-black" />
          <Heading 
            as="h3" 
            text="Contacts" 
            className="text-sm sm:text-base font-dm text-menuText"
          />
        </Flex>

        {/* Form Title */}
        <Heading 
          as="h3" 
          text="Fill up a Form" 
          className="pt-32 text-3xl font-bold pb-9 sm:text-3xl md:text-4xl lg:text-5xl font-dm"
        />

        {/* Form Inputs */}
        <div className="w-full space-y-6 sm:flex-row sm:space-y-0">
          <div className="w-full sm:w-1/2">
            <Heading 
              as="h3" 
              text="Name" 
              className="py-3 text-lg font-bold leading-10 sm:text-xl font-dm"
            />
            <input
              type="text"
              placeholder="Your name here"
              className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
          
          <div className="w-full sm:w-1/2">
            <Heading 
              as="h3" 
              text="Email" 
              className="py-3 text-lg font-bold leading-10 sm:text-xl font-dm"
            />
            <input
              type="email"
              placeholder="Your mail here"
              className="w-full py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
            />
          </div>
        </div>

        <div className="w-full mt-6">
          <Heading 
            as="h3" 
            text="Message" 
            className="py-3 text-lg font-bold leading-10 sm:text-xl font-dm"
          />
          <input
            type="text"
            placeholder="Your message here"
            className="w-1/2 py-4 text-base border-b-2 border-b-gray-200 focus:outline-none text-menuText"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-7">
          <button className="border-[2px] border-black bg-black text-white hover:bg-transparent hover:text-black hover:ease-in-out duration-300 w-full sm:w-auto block  xl:px-7" >
            <Heading 
              as="h3" 
              text="Post" 
              className="px-12 py-5 text-base font-bold sm:text-lg font-dm"
            />
          </button>
        </div>

        {/* Google Map Section */}
        <div className="w-full h-[572px] sm:w-full my-36">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1577200971633!2d90.3800082259169!3d23.7417544673211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1735131203190!5m2!1sen!2sbd"
            width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </>
  );
}

export default Contacts;

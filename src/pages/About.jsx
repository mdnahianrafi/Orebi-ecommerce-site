import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { MdKeyboardArrowRight } from "react-icons/md";
import Heading from "../components/Heading";
import Image from "../components/Image";
import BigSpeaker from '../assets/images/speaker Image_with_button_1.png';
import BigBasket from '../assets/images/laundrey basket Image_with_button_2.png';

const About = () => {
  return (
    <>
      <Container>
      <Heading
            as="h3"
            text="Home"
            className="pt-32 pb-8 text-2xl font-bold md:text-4xl font-dm"
          />
        <Flex>
          <Heading
            as="h3"
            text="Home"
            className="text-base font-dm text-menuText"
          />
          <MdKeyboardArrowRight className="mx-2 mt-[2px] text-xl text-black" />
          <Heading
            as="h3"
            text="About"
            className="text-base font-dm text-menuText"
          />
        </Flex>

        <Flex className={'pt-32 gap-x-11'}>
          <Image imgSrc={BigSpeaker} imgAlt={'speaker Image_with_button_1.png'}/>
          <Image imgSrc={BigBasket} imgAlt={'laundrey basket Image_with_button_2.png'}/>
        </Flex>
        <Heading
            as="h3"
            text="Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style."
            className="py-32 text-2xl md:text-4xl font-dm  leading-[52px]  "
          />

          <Flex className={'pb-32'}>
            <div className="w-1/3 pr-7">
            <Heading
            as="h3"
            text="Our Vision"
            className="py-[18px] text-xl md:text-2xl font-dm font-bold leading-[52px]  "
          />
            <Heading
            as="h3"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book."
            className="text-xs leading-5 md:leading-9 md:text-sm font-dm text-menuText"
          />
            </div>
            <div className="w-1/3 pr-7">
            <Heading
            as="h3"
            text="Our Story"
            className="py-[18px] text-xl md:text-2xl font-dm font-bold leading-[52px]  "
          />
            <Heading
            as="h3"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
            className="text-xs leading-5 md:text-sm md:leading-9 font-dm text-menuText"
          />
            </div>
            <div className="w-1/3">
            <Heading
            as="h3"
            text="Our Brands"
            className="py-[18px] text-xl md:text-2xl md:leading-9  font-dm font-bold leading-[52px]  "
          />
            <Heading
            as="h3"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
            className="text-xs leading-5 md:text-sm font-dm md:leading-9 text-menuText"
          />
            </div>

          </Flex>
      </Container>
    </>
  );
};

export default About;

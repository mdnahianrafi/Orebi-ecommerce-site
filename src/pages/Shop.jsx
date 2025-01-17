import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Pagination from "../components/Pagination";
import { MdKeyboardArrowRight } from "react-icons/md";
import Heading from "../components/Heading";
import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa";
import { VscTriangleUp } from "react-icons/vsc";
const Shop = () => {
  return (
    <div className="py-[235px]">
      <Container>
        <div>
          <Heading
            as="h3"
            text="Products"
            className="text-2xl font-bold md:3xl lg:4xl xl:text-5xl font-dm "
          />
          <Flex className={" pt-7"}>
            <Heading
              as="h3"
              text="Home"
              className="text-xs font-bold font-dm text-menuText"
            />
            <MdKeyboardArrowRight className="mx-2 text-xl text-black " />
            <Heading
              as="h3"
              text="Products"
              className="text-xs font-bold font-dm text-menuText"
            />
          </Flex>
        </div>
        <Flex className={"pt-[130px]"}>
          <div className="w-3/12 md:pr-10">
          <div>
            <Heading as ='h3' text="Shop by category" className='text-base font-bold md:text-xl font-dm'/>
          </div>
          <div className="py-5 border-b-[1px] flex justify-between">
            <Heading as ='h3' text="Category 1" className='text-sm md:text-base text-menuText font-dm '/>
            <FaPlus  className="pt-2 text-xl text-menuText"/>
          </div>
          <div className="py-5 border-b-[1px] flex justify-between">
            <Heading as ='h3' text="Category 2" className='text-sm md:text-base text-menuText font-dm '/>
           
          </div>
          <div className="py-5 border-b-[1px] flex justify-between">
            <Heading as ='h3' text="Category 3" className='text-sm md:text-base text-menuText font-dm '/>
            <FaPlus  className="pt-2 text-xl text-menuText"/>
          </div>
          <div className="py-5 border-b-[1px] flex justify-between">
            <Heading as ='h3' text="Category 4" className='text-sm md:text-base text-menuText font-dm '/>
           
          </div>
          <div className="py-5 border-b-[1px] flex justify-between">
            <Heading as ='h3' text="Category 5" className='text-sm md:text-base text-menuText font-dm '/>
            <FaPlus  className="pt-2 text-xl text-menuText"/>
          </div>
          <div className="flex justify-between pb-10 pt-14">
            <Heading as ='h3' text="Shop by color" className='text-sm font-bold md:text-base xl:text-xl font-dm '/>
            <VscTriangleUp className="mt-[6px] text-sm md:text-xl " />
          </div>
          <div className="py-5 border-b-[1px] flex">
            <div className="w-3 h-3 mt-[5px] mr-2 bg-black rounded-full"></div>
            <Heading as ='h3' text="Color 1" className='text-sm md:text-base text-menuText font-dm '/>
           
          </div>
          <div className="py-5 border-b-[1px] flex">
            <div className="w-3 h-3 mt-[5px] mr-2 bg-red-400 rounded-full"></div>
            <Heading as ='h3' text="Color 2" className='text-sm md:text-base text-menuText font-dm '/>
           
          </div>
          <div className="py-5 border-b-[1px] flex">
            <div className="w-3 h-3 mt-[5px] mr-2 bg-lime-400 rounded-full"></div>
            <Heading as ='h3' text="Color 3" className='text-sm md:text-base text-menuText font-dm '/>
           
          </div>
          <div className="py-5 border-b-[1px] flex">
            <div className="w-3 h-3 mt-[5px] mr-2 bg-gray-400 rounded-full"></div>
            <Heading as ='h3' text="Color 4" className='text-sm md:text-base text-menuText font-dm '/>
           
          </div>
          <div className="py-5 border-b-[1px] flex">
            <div className="w-3 h-3 mt-[5px] mr-2 bg-green-400 rounded-full"></div>
            <Heading as ='h3' text="Color 5" className='text-sm md:text-base text-menuText font-dm '/>
           
          </div>

          <div className="flex justify-between pb-10 pt-14">
            <Heading as ='h3' text="Shop by brand" className='text-base font-bold md:text-xl font-dm '/>
            <VscTriangleUp className="mt-[6px] text-xl " />
          </div>
          <div className="py-5 border-b-[1px] flex">
          
            <Heading as ='h3' text="Brand 1" className='text-sm md:text-base text-menuText font-dm '/>
           
          </div>
          <div className="py-5 border-b-[1px] flex">
          
            <Heading as ='h3' text="Brand 2" className='text-sm md:text-base text-menuText font-dm '/>
           
          </div>
          <div className="py-5 border-b-[1px] flex">
          
            <Heading as ='h3' text="Brand 3" className='text-sm md:text-base text-menuText font-dm '/>
           
          </div>
          <div className="py-5 border-b-[1px] flex">
          
            <Heading as ='h3' text="Brand 4" className='text-sm md:text-base text-menuText font-dm '/>
           
          </div>
          <div className="py-5 border-b-[1px] flex">
          
            <Heading as ='h3' text="Brand 5" className='text-sm md:text-base text-menuText font-dm '/>
           
          </div>
          <div className="flex justify-between pb-10 pt-14">
            <Heading as ='h3' text="Shop by Price" className='text-base font-bold md:text-xl font-dm '/>
          </div>


          <div className="py-5 border-b-[1px] flex">
          
          <Heading as ='h3' text="$0.00-$9.99" className='text-sm md:text-base text-menuText font-dm '/>
         
        </div>
          <div className="py-5 border-b-[1px] flex">
          
          <Heading as ='h3' text="$10.00-$19.99" className='text-sm md:text-base text-menuText font-dm '/>
         
        </div>
          <div className="py-5 border-b-[1px] flex">
          
          <Heading as ='h3' text="$20.00-$29.99" className='text-sm md:text-base text-menuText font-dm '/>
         
        </div>
          <div className="py-5 border-b-[1px] flex">
          
          <Heading as ='h3' text="$30.00-$39.99" className='text-sm md:text-base text-menuText font-dm '/>
         
        </div>
          <div className="py-5 border-b-[1px] flex">
          
          <Heading as ='h3' text="$40.00-$69.99" className='text-sm md:text-base text-menuText font-dm '/>
         
        </div>
          </div>
          <div className="w-9/12">
            <Flex className='pb-14'>
              <div >
                <MdWindow className="p-2 mr-4 text-3xl text-white bg-black md:text-4xl" />
              </div>
              <div className="">
                <TfiMenuAlt className="p-2 text-3xl md:text-4xl border-[1px] mr-5 md:mr-1" />
              </div>
              <div className=" ms-auto">
                <label for="dropdown" className="pt-1 pr-1 text-menuText">
               Sort by:
         
                </label>
                <select
                  id="dropdown"
                  className="border-[1px] font-dm text-menuText md:pl-2 md:pr-[60px] md:py-1"
                >
                  <option value="" disabled selected hidden>
                    Featured
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>

              <div className="md:ms-10">
                <label
                  for="numberDropdown"
                  className="md:pr-1 text-menuText font-dm"
                >
                  Show :
                </label>
                <select
                  id="numberDropdown"
                  className="border-[1px] font-dm text-menuText md:py-1"
                >
                  <option value="" disabled selected hidden>
                    number
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
            </Flex>
            <Pagination itemsPerPage={9} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;

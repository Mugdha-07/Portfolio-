
import Container from './Container'
import Flex from './Flex'
import {  FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitter, } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";


import Mugdha from "../assets/mugdha roy.jpg"

import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <>
      <section className=' lg:py-[200px] py-[50px] bg-[#FFF9E3] animate-slideIn px-2 mt-3'>
        
        <Container>
          <Flex className="justify-around flex-wrap items-center">

          <div className="lg:w-[45%]   ">
              <div className="  ">

                <img className="  lg:rounded-[20px]  w-full  rounded-full shadow-2xl shadow-stone-950  " src={Mugdha} alt="" />
              </div>
            </div>

            <div className="lg:w-[55%] w-full ">
              <div className=" lg:ml-14  ">

                <h5 className='lg:text-[28px] text-[24px] font-serif  font-bold  ml-[20px]  '>- I am .</h5>
                <h1 className='lg:text-[56px] text-[28px] font-serif  font-bold  ml-[20px] '> MUGDHA ROY</h1>
                <div className=" flex items-center  ml-[20px]">
                  <h4 className='lg:text-[32px] text-[24px] font-serif  font-semibold  text-[#3BB9FF]  '> Full Stack Developer With </h4>
                <ReactTyped  className='lg:text-[32px] text-[24px] font-serif  font-semibold  ml-[25px] text-[#3BB9FF] '    strings={[" React Js.","Javascript.","Tailwind." ,"Webflow."]} typeSpeed={200} backSpeed={150} loop={true} />
                </div>
                 
                
                <p className='font-serif lg:text-[22px] font-medium   lg:w-full w-[90%] lg:mt-[20px] ml-[20px] '> I am MUGDHA ROY .Full Stack Developer  focused on crafting clean & user-friendly experiences , i am passionate about building excellent software that improves the loves of those around me. </p>
                <div className="flex lg:gap-x-10 gap-x-5 pt-[70px] ml-5 ">
                  <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://www.facebook.com/mugdho.roy.750" target='blank'><FaFacebookSquare /></a>
                  <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="" target='blank'><FaLinkedin /></a>
                  <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="https://github.com/Mugdha-07" target='blank'><FaGithubSquare /></a>
                  <a className='py-4 px-4 bg-[#3BB9FF] rounded-full text-[32px] text-[#000] p-[14px]' href="" target='blank'><FaTwitter /></a>



                </div>
                

              </div>
              <div className="mt-12 lg:ml-20 ml-5">
               
                <div className=" relative  flex justify-between lg:w-[30%] w-[60%] items-center py-4 px-4 border-2 border-[#3BB9FF] rounded-full cursor-pointer duration-300 ease-in-out hover:text-white after:absolute after:contain-[''] after:top-0 after:left-0 after:h-full after:w-[30%] after:rounded-full after:bg-[#3BB9FF] after:duration-300 after:ease-in-out after:hover:w-full  ">
                  <IoIosContact className='text-[36px] z-50 text-white'/>
                  <a href="Contacts" className='font-serif text-[18px] font-medium  z-50'>Contacts</a>
                  <h3 ></h3>
                </div>
              </div>
            </div>
            {/* <div className="w-full">
              <iframe className='w-[80%] aspect-video ...' src={DD} frameborder="0"></iframe>
            </div> */}
           
          </Flex>
        </Container>
      </section>
    </>
  )
}

export default Banner
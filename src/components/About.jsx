import { useRef, useEffect, useState } from 'react';
import MenorAB from '../assets/MenorAB.jpg'

const About = () => {
const sectionRefs = useRef([]);
 const [showMore, setShowMore] = useState(false);
  const [buttonText, setButtonText] = useState('Read More');

  const handleClick = () => {
    setShowMore(!showMore);
    setButtonText(showMore ? 'Read More' : 'Read Less');
  }

  const setSectionRef = (index, ref) => {
  sectionRefs.current[index] = ref;
};
useEffect(() => {
  const handleScroll = () => {
    sectionRefs.current.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 100;
      const height = sec.offsetHeight;
      if (top >= offset && top < offset + height) {
        sec.classList.add('show-animate');
      } else {
        sec.classList.remove('show-animate');
      }
    });
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <section id='about' ref={(ref) => setSectionRef(1, ref)} className='about flex justify-center items-center flex-col  bg-rgba(15, 10, 10, 0.973) pb-24 text-white '>
        <h2 className='text-[3rem] mb-8 text-center top-[100px] font-bold relative'>About <span className='text-[#0bdfee]'>Me</span><span className='animated scroll' style={{ '--1': '1' }}></span></h2>
        <div className='relative w-[25rem] h-[25rem] rounded-[50%] flex top-[60px] justify-center items-center'>
           <img className='w-[45%] rounded-[50%] border-[.2rem] border-[#12dae0]' src={MenorAB} alt="Menor" />
           <span className='circle-spin'></span>
           <span className='animated scroll' style={{ '--1': '2' }}></span>
        </div>
        <div className='text-center'>
            <h3 className='text-[2.6rem] top-[60px] relative inline-block'>Frontend Developer! <span className='animated scroll' style={{ '--1': '3' }}></span></h3>
            <p className= {`text ${showMore ? 'show-more text-[1.6rem] top-[60px] mt-8 ml-10 mr-10 mb-12 relative' : 'text text-[1.6rem] top-[60px] mt-8 ml-10 mr-10 mb-12 relative'}`}>
                My name is Menoralem Bekalu, I'm a website developer. I was born in Debre Markos, where I also attended elementary and high school. At Addis Ababa University, 
                I completed my first degree in information system. I currently work in website development. I am a person who works hard is energetic,<span className='dots'> ....</span><span className='moreText hidden'>self-driven, dependable, 
                and responsible at work as well. a good team player that can adjust to any challenging situations. I can work well both independently and in a team environment 
                while being constrained by time. My personal attitude is based on expanding my professional knowledge and developing new skills. I have the fundamental abilities 
                needed in my industry, such as proficiency in Microsoft Office, system administration, and providing customer service in a professional setting. I also have a 
                sincere and compassionate character, as well as a professional and ambitious approach. My skill set also includes problem-solving and communication. I now have 
                a stronger understanding of fundamental computer abilities because to my experience engaging with computer systems.</span>
                <span className='animated scroll' style={{ '--1': '4' }}></span>
            </p>
            <div className='btn-box btn inline-block top-[60px] w-[15rem] relative' onClick={handleClick}>
                <a href="#about">{buttonText}</a>
                <span className='animated scroll' style={{ '--1': '5' }}></span>
            </div>
        </div>
    </section>
  )
}

export default About



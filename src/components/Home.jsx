
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import { useRef, useEffect } from "react";
import menor2 from '../assets/menor2.mp4'
import MENORALEM_BEKALU_RESUME from '../assets/MENORALEM_BEKALU_RESUME.pdf'
const Home = () => {
  const sectionRefs = useRef([]);
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
        sec.classList.add('show-animated');
      } else {
        sec.classList.remove('show-animated');
      }
    });
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <section id='home' ref={(ref) => setSectionRef(0, ref)} className= 'home show-animated min-h-screen pl-6 pr-8 flex items-center'>
       <video autoPlay loop muted className="h-full w-full object-cover absolute inset-0 z-0 -w-[px]">
        <source src={menor2} type="video/mp4" />
      </video>
        <div className="relative z-10 home-content max-w-5xl">
            <h1 className="text-[4.5rem] font-bold leading-[1.3] text-white relative inline-block">Hi, I'm <span>Menoralem Bekalu</span><span className='animated' style={{ '--1': '2' }}></span></h1>
            <div className="relative w-[29rem]">
                <h3 className="text-animate">Website Developer</h3>
                <span className='animated' style={{ '--1': '3' }}></span>
            </div>
            <p className="text-white relative">Hello! My name is Menoralem bekalu and I'm a website developer, specializing in front-end developer. I'm passionate about creating Creating user-friendly and responsive websites that look great on all devices Optimizing website performance to ensure fast page load times. and always strive to deliver high-quality work that meets my clients needs. Please take a look at my portfolio to see some examples of my work, and feel free to get in touch if you have any questions or would like to discuss a potential project.
            <span className='animated' style={{ '--1': '4' }}></span>
            </p>
            <div className="btn-box relative flex gap-20 h-20 w-112">
                <a href="#skills" className="child">Hire Me</a>
                <a href="#contact" className="child">Let's Talk</a>
                <a href={MENORALEM_BEKALU_RESUME}>Download CV</a>
                <span className='animated' style={{ '--1': '5' }}></span>
            </div>
        </div>
        <div className='social absolute w-44 bottom-6 flex justify-between'>
          <a href=""><FaFacebookF /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaLinkedinIn /></a>
          <span className='animated' style={{ '--1': '6' }}></span>
        </div>
        <div className='home-videoHover'></div>
        <span className='animated home-video' style={{ '--1': '7' }}></span>
    </section>
  )
}

export default Home


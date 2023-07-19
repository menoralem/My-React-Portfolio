import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
    window.addEventListener('scroll', changeBackground);
  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div className="container mx-auto flex justify-between items-left mt-3">
        <a href='#home' className="logo text-[2.5rem] font-bold relative">MENOR<span className='text-[#0bdfee] hover:text-white'> AB.</span><span className='animated' style={{ '--1': '1' }}></span></a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden md:flex space-x-10 relative text-[1.7rem]">
          <a href="#home" >Home</a>
          <a href="#about">About</a>
          <a href="#education" >Education</a>
          <a href="#skills" >Skills</a>
          <a href="#contact" >Contact</a>
          <span className='animated' style={{ '--1': '2' }}></span>
        </div>
      </div>
      {isOpen && (
        <div className={`responsive-nav md:hidden absolute top-full w-full p-[1rem 4%] bg-gray-800 max-w-[768px] ${isOpen ? 'is-active' : 'text-[1.7rem]'}`}>
          <a href="#home" className="block text-[2rem] m-[3rem] py-2" onClick={handleNavClick}>Home</a>
          <a href="#about" className="block text-[2rem] m-[3rem] py-2" onClick={handleNavClick}>About</a>
          <a href="#education" className="block text-[2rem] m-[3rem] py-2" onClick={handleNavClick}>Education</a>
          <a href="#skills" className="block text-[2rem] m-[3rem] py-2" onClick={handleNavClick}>Skills</a>
          <a href="#contact" className="block text-[2rem] m-[3rem] py-2" onClick={handleNavClick}>Contact</a>
         <span className='active-nav'></span>
        </div> 
      )}
    </nav>
  );
}

export default Navbar;
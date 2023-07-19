import { BiUpArrowAlt } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer className='footer flex justify-between items-center flex-wrap p-[2rem 9%] bg-black text-white ml-[10%] mr-[10%]'>
        <div className='footer-text text-[1.6rem]'>
            <p>Copyright &copy; 2023 by Menor | All Rights Reserved</p>
        </div>
        <div className="footer-iconTop inline-flex justify-center items-center p-[.8rem] bg-[#0bdfee] rounded-[.6rem]">
           <a href="#home"><BiUpArrowAlt className='text-[2.4rem] text-black duration-[.5s] hover:text-[#0bdfee]' /></a> 
        </div>
    </footer>
  )
}

export default Footer


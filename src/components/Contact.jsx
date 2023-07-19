import { useRef, useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const sectionRefs = useRef([]);
    const [formData, setFormData] = useState({
      User_Name: '',
      User_Email: '',
      Phone_No: '',
      Subject: '',
      Message: ''
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
     try {
    toast.success('Message sent successfully!');
    } catch(error) {
    toast.error( `Message is not sent! please try again`);
    }
    emailjs.sendForm('Menor_AB9230', 'template_4wwslbs', form.current, 'ueCY8UGCPkWcPv8Bm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setFormData({
      User_Name: '',
      User_Email: '',
      Phone_No: '',
      Subject: '',
      Message: ''
    });
  };
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
    <section id="contact" ref={(ref) => setSectionRef(4, ref)} className="contact min-h-[auto] pb-28 text-white">
       <ToastContainer />
        <h2 className="text-[3rem] mb-8 text-center font-bold relative inline-block translate-x-[-50%] left-[50%] top-[60px]">Contact <span className="text-[#0bdfee]">Me</span><span className='animated scroll' style={{ '--1': '1' }}></span></h2>
        <form ref={form} onSubmit={sendEmail} method="post" className="max-w-[70rem] ml-[20%] mr-[20%] text-center ">
            <div className="input-box">
                <div className="input-field">
                    <input type="text" id="User_Name" value={formData.User_Name} onChange={handleInputChange} placeholder="Full Name" name="User_Name" required/>
                    <span className="focus"></span>
                </div>
                <div className="input-field">
                    <input type="email" id="User_Email" value={formData.User_Email} onChange={handleInputChange} placeholder="Email Address" name="User_Email" required/>
                    <span className="focus"></span>
                </div>
                <span className='animated scroll' style={{ '--1': '3' }}></span>
            </div>
            <div className="input-box">
                <div className="input-field">
                    <input type="number" id="Phone_No" value={formData.Phone_No} onChange={handleInputChange} placeholder="Phone Number" name="Phone_No" required/>
                    <span className="focus"></span>
                </div>
                <div className="input-field">
                    <input type="text" id="Subject" value={formData.Subject} onChange={handleInputChange} placeholder="Email Subject" name="Subject" required/>
                    <span className="focus"></span>
                </div>
                <span className='animated scroll' style={{ '--1': '5' }}></span>
            </div>
            <div className="textarea-filed">
                 <textarea name="Message" id="Message" value={formData.Message} onChange={handleInputChange} cols="20" rows="5" placeholder="Your Message"></textarea>
                 <span className="focus"></span>
                 <span className='animated scroll' style={{ '--1': '7' }}></span>
            </div>
            <div className="btn-box btns">
                <button type="submit" className="btn">Submit<span className='animated scroll' style={{ '--1': '9' }}></span></button>
            </div>
        </form>
    </section>
  )
}

export default Contact
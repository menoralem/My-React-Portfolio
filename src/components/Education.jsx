import { useRef, useEffect } from "react";

const Education = () => {
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
    <section id="education" ref={(ref) => setSectionRef(2, ref)} className="education text-white flex justify-center items-center flex-col min-h-[auto] pb-[5rem]">
        <h2 className="text-[3rem] top-[60px] mb-8 text-center font-bold relative">My <span className='text-[#0bdfee]'>Journey</span><span className='animated scroll' style={{ '--1': '1' }}></span></h2>
        <div className="education-row flex-wrap gap-20 flex ml-[10%] mr-[10%]">
            <div className="education-column">
                <h3 className="title top-[25px]">Education<span className='animated scroll' style={{ '--1': '2' }}></span></h3>
                <div className="education-box top-[10px]">
                    <div className="eduction-content">
                        <div className="content">
                            <div className="year"> 2013 - 2017</div>
                            <h3>High school - Debremarkos</h3>
                            <p>At Debre Markos Teklehaymanot High School and Dbza Preparatory School, I completed my high school in the field of natural sciences. 
                               I have had countless opportunities to grow and learn since I left high school. The ICT abilities I have acquired, in my opinion, 
                               will be beneficial for both my future academic and professional activities.</p>
                        </div>
                    </div>

                    <div className="eduction-content">
                        <div className="content">
                            <div className="year"> 2018 - 2017</div>
                            <h3>Bachelor Degree - Addis Ababa University</h3>
                            <p>I completed my BSc degree in Information Science at Addis Ababa University. During my time at university, I came away with good skills 
                               that will be useful for my future career. Among these skills, for example, website development is mentioned more and I have also 
                               developed other skills.</p>
                        </div>
                    </div>
                    <span className='animated scroll' style={{ '--1': '3' }}></span>
                </div>
             </div>
                   <div className="education-column">
                       <h3 className="title top-[25px]">Experince<span className='animated scroll' style={{ '--1': '5' }}></span></h3>
                         <div className="education-box top-[10px]">
                           <div className="eduction-content">
                             <div className="content">
                               <div className="year"> 2023 - Present</div>
                               <h3>Website Developer - DAN energy R&D company</h3>
                               <p>I am currently working as a website developer at DAN energy R&D company. In this role, I am responsible for the front-end development
                                 of various websites in this company, Through this work, I have gained valuable experience.</p>
                             </div>
                          </div>
                          <span className='animated scroll' style={{ '--1': '6' }}></span>
                    </div>
                </div>
       </div>
    </section>
  )
}

export default Education
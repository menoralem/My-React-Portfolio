import { useRef, useEffect } from "react";

const Skills = () => {
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
    <section id="skills" ref={(ref) => setSectionRef(3, ref)} className="skills min-h-[auto] pb-28 bg-black text-white">
        <h2 className="text-[3rem] top-[105px] mb-8 text-center font-bold relative inline-block translate-y-[-50%] left-[42%]">My <span className="text-[#0bdfee]">Skills</span><span className='animated scroll' style={{ '--1': '1' }}></span></h2>
        <div className="skills-row ml-[10%] mr-[10%]">
            <div className="skills-column">
                <h3 className="title top-[40px]">Coding Skills<span className='animated scroll' style={{ '--1': '2' }}></span></h3>
                <div className="skills-box top-[40px]">
                    <div className="skills-content">
                        <div className="progress">
                            <h3>HTML <span>90%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>CSS <span>70%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Javascript <span>50%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>React JS <span>70%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Node JS <span>40%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Mongo DB <span>40%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                    </div>
                    <span className='animated scroll' style={{ '--1': '3' }}></span>
                </div>
            </div>

            <div className="skills-column">
                <h3 className="title top-[40px]">Professional Skills <span className='animated scroll' style={{ '--1': '5' }}></span></h3>
                <div className="skills-box top-[40px]">
                    <div className="skills-content">
                        <div className="progress">
                            <h3>Website Development <span>75%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>website Design <span>50%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Graphics Design <span>40%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Customer service <span>60%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Sales <span>40%</span></h3>
                            <div className="bar"><span></span></div>
                        </div>
                    </div>
                    <span className='animated scroll' style={{ '--1': '6' }}></span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
import { useEffect, useRef, useState } from 'react'
import './App.css';

function App() {

  const [scrollY, setScrollY] = useState(0);
  const [show, setShow] = useState(true);
  const [bgColor, setBgColor] = useState('none')
  const [fontcolor, setFontColor] = useState('white')
  const preScrollY = useRef(0)
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(()=>{
    console.log('myref', preScrollY.current);
    console.log('myscrolly', scrollY);
  
    if(scrollY == 0){
      setShow(true)
      setFontColor('white')
      setBgColor('none')
    }else if(scrollY != 0 && (preScrollY.current > scrollY)){
      setShow(true)
      setBgColor('white')
      setFontColor('black')
    }else if(scrollY > 0 && (preScrollY.current <= scrollY)){
      setShow(false)
    }

    preScrollY.current = scrollY
  }, [scrollY])

  const clickToSection1 = () => {
    section1Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const clickToSection2 = () => {
    section2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const clickToSection3 = () => {
    section3Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    
      {show && <div className='my-header' style={{background:bgColor}}>
        <div className='my-container' style={{color: fontcolor}}>
          <h1 style={{cursor:'pointer'}}>Logo</h1>
          <div className='my-menu' style={{color: fontcolor}}>
            <h1 onClick={clickToSection1} style={{cursor:'pointer'}}>Home</h1>
            <h1 onClick={clickToSection2} style={{cursor:'pointer'}}>News</h1>
            <h1 onClick={clickToSection3} style={{cursor:'pointer'}}>Contact</h1>
          </div>
        </div>
      </div>}
      <div ref={section1Ref} className='section1'>
        <p style={{color:'white'}}>Home</p>
      </div>
      <div ref={section2Ref} className='section2'>
        <p style={{color:'white'}}>News</p>
      </div>
      <div ref={section3Ref} className='section3'>
        <p style={{color:'white'}}>Contact</p>
      </div>

    </>
  )
}

export default App

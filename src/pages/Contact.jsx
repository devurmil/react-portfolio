import Pagewrapper from '../helper/Pagewrapper'
import ContactGlass from '../components/Contact/ContactGlass'
import BlurText from "../styles/BlurText";
import ContactSocials from '../components/Contact/Contactsocials'
import DarkVeil from '../components/shared/DarkVeil';


function Contact() {
  return (
    <>
      <Pagewrapper>
        {/* Background: Positioned absolutely */}
        <div style={{
          position: 'fixed', 
          top: '0', 
          left: '0', 
          width: '100%', 
          height: '100vh', 
          zIndex: 0,
        }}>
          <DarkVeil />
        </div>
        
        {/* Main content: Ensure it appears above the background */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <section className="pt-15">
            <BlurText
              text="You Finally Came!"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-7xl text-white justify-center"
            />
            <div className="text-center">
              <p className="mt-9 text-2xl opacity-70 text-gray-300">How you Doing?</p>
            </div>
          </section>
          
          {/* Content that stays above the background */}
          <ContactGlass />
          <ContactSocials />
        </div>
      </Pagewrapper>
    </>
  )
}

export default Contact
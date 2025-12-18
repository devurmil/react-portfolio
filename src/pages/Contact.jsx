import Pagewrapper from '../helper/Pagewrapper'
import ContactGlass from '../components/Contact/ContactGlass'
import BlurText from "../styles/BlurText";
import ContactSocials from '../components/Contact/Contactsocials'

function Contact() {
  return (
    <>
    <Pagewrapper>
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
      <ContactGlass />
      <ContactSocials />
    </Pagewrapper>
    </>
  )
}

export default Contact
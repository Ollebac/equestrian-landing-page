import '../scss/Footer/footer.scss';
// import "../scss/About/about.scss";
import '../scss/fonts.scss';

const Footer = () => {
  return (
    <section className='footer_section_background' id='coaches'>
      <div className='footer_section_container'>
        <div className='footer_column footer1'>
          <img src='./site-logo/site-logo.svg' alt='Site Logo' className='footer_site_icon' />
          <div className='column1_lower'>
            <div className='social_links_container'>
              <a href='https://instagram.com' target='blank'>
                <img src='./icons/icon-instagram.svg' alt='Instagram Icon' className='icon_link' />
              </a>
              <a href='https://facebook.com' target='blank'>
                <img src='./icons/icon-facebook.svg' alt='Facebook Icon' className='icon_link' />
              </a>
              <a href='https://twitter.com' target='blank'>
                <img src='./icons/icon-twitter.svg' alt='Twitter Icon' className='icon_link' />
              </a>
              <a href='https://www.youtube.com' target='blank'>
                <img src='./icons/icon-youtube.svg' alt='YouTube Icon' className='icon_link' />
              </a>
            </div>
            <p className='copyright'>C 2023 Equestrian Club of Canada</p>
          </div>
        </div>
        <span className='footer_break'></span>
        <div className='footer_column footer2'>
          <a href='#programs' className='footer_link general_text'>
            Programs
          </a>
          <a href='#about' className='footer_link general_text'>
            About Us
          </a>
          <a href='#coaches' className='footer_link general_text'>
            Coaches
          </a>
          <a href='#reviews' className='footer_link general_text'>
            Reviews
          </a>
          <a href='#faq' className='footer_link general_text'>
            Questions
          </a>
        </div>
        <div className='footer_column footer3'>
          <form action='' className='email_form' id='email_form'>
            <h3 className='subscribe_title headerSmall'>
              Subscribe to the newsletter and get 5% discount on your first training
            </h3>
            <div className='input_email'>
              <label htmlFor='email' className='form_label'></label>
              <input
                type='email'
                id='form_input_email'
                placeholder='Your Email Address'
                name='email'
                className='general_text'
                required
              />
            </div>
            <div className='email_form_btn_container'>
              <button type='submit' className='sign_up_btn general_text' id='sign_up_btn'>
                Join us
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import '../scss/Contact/contact.scss';

const Contact = () => {
  return (
    <section className='contact_section_container'>
      <div className='contact_container'>
        <div className='contact_left_container'>
          <h3 className='contact_title headerLarge'>
            Contact <br className='line_break' />
            directly
          </h3>
          <div className='contact_info'>
            <div className='contact_line'>
              <img src='./icons/icon-phone.svg' alt='Phone Icon' className='icon_link' />
              <a href='tel:+19731234567' className='contact_text general_text'>
                +1 973-123-4567
              </a>
            </div>
            <div className='contact_line'>
              <img src='./icons/icon-location.svg' alt='Location Icon' className='icon_link' />
              <a
                href='https://www.google.com/maps/place/North+Jersey+Equestrian+Center/@40.9749325,-74.2880308,16.25z/data=!4m6!3m5!1s0x89c3034003842e3b:0x14a9a24dec19918f!8m2!3d40.9757957!4d-74.2869949!16s%2Fg%2F1xgzcqjc'
                className='contact_text general_text'
              >
                Carlson Place, Wayne NJ
              </a>
            </div>
            <div className='contact_line'>
              <img src='./icons/icon-email.svg' alt='Email Icon' className='icon_link' />
              <a href='mailto:info@equestrianclubofcanada.ca' className='contact_text general_text'>
                info@equestrianclubofcanada.ca
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='contact_right_container'>
        <img src='./images/map-location.svg' alt='Map Location' className='contact_map' />
      </div>
    </section>
  );
};

export default Contact;

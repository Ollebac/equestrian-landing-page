import '../scss/About/about.scss';
import '../scss/fonts.scss';

import { useEffect } from 'react';

const playVideo = () => {
  const button = document.getElementById('about_us_video_button');
  button!.style.display = 'none';
  // button?.setAttribute("display", "none");

  const iframe = document.getElementById('iframe_horse_video');
  iframe?.setAttribute('src', iframe.getAttribute('src') + '&autoplay=1');
};

export const About = () => {
  useEffect(() => {}, []);
  return (
    <section className='about_us_background' id='about'>
      <div className='about_us_content_container'>
        <h2 className='about_us_title headerLarge'>About us</h2>
        <h3 className='about_us_title_description sub_title'>
          Join us today and experience the joys of horseback riding!
        </h3>

        <div className='about_us_video_container'>
          <iframe
            src='https://player.vimeo.com/video/469005678?h=5b3aa9c308&controls=1'
            className='iframe_horse_video'
            id='iframe_horse_video'
            width='1500'
            height={400}
            allow='autoplay; fullscreen; picture-in-picture'
          ></iframe>
          <button onClick={playVideo} className='about_us_video_button' id='about_us_video_button'>
            <img src='/icons/icon-play-button.png' alt='Play Button' className='play_button' />
          </button>
          <div className='iframe_horse_video_bottom'> </div>
        </div>
        <div className='about_us_cards_container'>
          <div className='about_us_card'>
            <img src='/icons/icon-heart.svg' className='about_us_icon' />
            <h3 className='about_us_card_title headerSmall'>Developing a strong bond with the horse</h3>
            <p className='about_us_card_description general_text'>
              Participating in an equestrian club provides riders with the opportunity to form a strong and trusting
              bond with their horse. This bond is formed through regular training, riding, and socializing with the
              horse, which can be a rewarding experience.
            </p>
          </div>
          <div className='about_us_card'>
            <img src='/icons/icon-checkmark.svg' className='about_us_icon' />
            <h3 className='about_us_card_title headerSmall'>Learning new skills</h3>
            <p className='about_us_card_description general_text'>
              Equestrian clubs offer riders the chance to learn a variety of skills and techniques, including dressage,
              show jumping and cross-country riding. Riders can also learn about horse care, nutrition, and other forms
              of horsemanship.
            </p>
          </div>
          <div className='about_us_card'>
            <img src='/icons/icon-people.svg' className='about_us_icon' />
            <h3 className='about_us_card_title headerSmall'>Networking and camaraderie</h3>
            <p className='about_us_card_description general_text'>
              Joining an equestrian club provides members with a great opportunity to meet other riders, exchange ideas,
              and make new friends. Many clubs also host events and competitions which can be a great way to meet people
              and develop new skills.
            </p>
          </div>
        </div>
        <div className='subscribe_container_cards'>
          <div className='subscribe_card_left'>
            <form
              action=''
              // onSubmit={(e) => submitForm(e)}
              className='email_form'
              id='email_form'
            >
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
          <img src='/images/horse-subscribe.jpg' alt='Horse Image' className='subscribe_card_right' />
        </div>
      </div>
    </section>
  );
};

export default About;

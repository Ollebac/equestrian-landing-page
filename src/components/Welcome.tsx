import '../scss/Welcome/welcome.scss';

const Welcome = () => {
  return (
    <>
      <div className='welcome_section_container' id='home'>
        <div className='welcome_content_container'>
          <div className='welcome_content'>
            <p className='welcome_intro'>Welcome to</p>
            <div className='welcome_title_container'>
              <h1 className='welcome_title_1'>Equestrian&nbsp;</h1>
              <h1 className='welcome_title_2'>club</h1>
            </div>
            <p className='welcome_text'>
              We offer a variety of resources for horse enthusiasts of all levels, from beginner to advanced.
            </p>
            <div className='welcome_button_container'>
              <a href='#join_us' className='join_us_btn'>
                Join us
              </a>
            </div>
          </div>
          <div className='more_horses_outer_container'>
            <div className='more_horses_inner_container'>
              <img src='./welcome/horse-profile-1.jpg' className='horse_profile_img' alt='Small Horse Image v1' />
              <img src='./welcome/horse-profile-2.jpg' className='horse_profile_img' alt='Small Horse Image v2' />
              <img src='./welcome/horse-profile-3.jpg' className='horse_profile_img' alt='Small Horse Image v3' />
            </div>
            <p className='more_horses_text'>More than 20 horses for different levels of riders.</p>
          </div>
        </div>
        <div className='welcome_image_container'>
          <img src='./welcome/background-farm.jpg' alt='farmhouse-background' className='welcome_img' />
          <img src='./welcome/horse-overlay.png' alt='horse image' className='horse_overlay' />
        </div>
      </div>
    </>
  );
};

export default Welcome;

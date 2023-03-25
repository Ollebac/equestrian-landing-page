import "../scss/Welcome/welcome.scss";
import "../scss/Welcome/fonts.scss";

const Welcome = () => {
  return (
    <>
      <div className="welcome_container">
        <div className="welcome_content_container">
          <div className="welcome_content">
            <p className="welcome_intro">Welcome to</p>
            <div className="welcome_title_container">
              <h1 className="welcome_title_1">Equestrian&nbsp;</h1>
              <h1 className="welcome_title_2">club</h1>
            </div>
            <p className="welcome_text">
              We offer a variety of resources for horse enthusiasts of all
              levels, from beginner to advanced.
            </p>
            <div className="welcome_button_container">
              <a href="#join_us" className="welcome_button">
                Join us
              </a>
            </div>
          </div>
          <div className="more_horses_outer_container">
            <div className="more_horses_inner_container">
              <img
                src="/horse-profile-1.jpg"
                className="horse_profile_img"
                alt="Horse 1 Image"
              />
              <img
                src="/horse-profile-2.jpg"
                className="horse_profile_img"
                alt="Horse 1 Image"
              />
              <img
                src="/horse-profile-3.jpg"
                className="horse_profile_img"
                alt="Horse 1 Image"
              />
            </div>
            <p className="more_horses_text">
              More than 20 horses for different levels of riders.
            </p>
          </div>
        </div>
        <div className="welcome_image_container">
          <img
            src="/background-farm.jpg"
            alt="farmhouse-background"
            className="welcome_img"
          />
          <img
            src="/horse-v3.png"
            alt="horse image"
            className="horse_overlay"
          />
        </div>
      </div>
    </>
  );
};

export default Welcome;

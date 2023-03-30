import "../scss/Programs/programs.scss";
import "../scss/Programs/fonts.scss";
import "../scss/fonts.scss";

import { navigatePrograms } from "../functions/navigate_programs";

import { useEffect, useState } from "react";
import { setFormValues } from "../functions/setFormValues";
import { submitForm } from "../functions/submitForm";

import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";

const DescriptionJumping = (
  <>
    Show jumping is a part of a group of English riding equestrian events that
    also includes eventing, hunters, and equitation. Jumping classes are
    commonly seen at horse show throughout the world, including the Olympics.
    Sometimes shows are limited exclusively to jumpers. Courses are often
    colorful and at times, quiote creatively designed.
  </>
);
const DescriptionDressage = (
  <>
    Dressage is a competitive equestrian sport that involves training horses to
    perform a series of movements and maneuvers in a precise and controlled
    manner. The objective of dressage is to develop the horse's natural athletic
    ability, balance, and grace, as well as to improve its obedience and
    responsiveness to the rider's commands.
  </>
);
const DescriptionRiding = (
  <>
    Horse riding is an activity where a person rides on the back of a horse. It
    can be done for various reasons, such as leisure, sport, or transportation.
    Horse rides can take place in a variety of settings, such as trails, arenas,
    or fields. Depending on the level of experience and skill of the rider,
    different styles of riding can be practiced, including English or Western
    riding.
  </>
);
const DescriptionPhotoshoot = (
  <>
    A photography session that focuses on capturing images of horses in various
    poses and settings. These photoshoots can be done for a variety of purposes,
    such as to showcase a horse's beauty, to capture special moments with a
    beloved animal, or to create promotional materials for businesses related to
    the equine industry.
  </>
);

const Programs = () => {
  useEffect(() => {
    navigatePrograms();
    (
      document.getElementById("form_input_date")! as HTMLInputElement
    ).valueAsDate = new Date();
  }, []);

  const [country, setCountry] = useState<any>();

  return (
    <>
      <section className="programs_background" id="programs">
        <h2 className="programs_title headerLarge">Our programs</h2>
        <div className="programs_container">
          <ul className="programs_menu">
            <li className="programs_menu_item programs_menu_active headerMedium">
              Jumping
            </li>
            <li className="program_mobile program_mobile_active general_text">
              {DescriptionJumping}
            </li>
            <li className="programs_menu_item headerMedium">Dressage</li>
            <li className="program_mobile general_text">
              {DescriptionDressage}
            </li>
            <li className="programs_menu_item headerMedium">Horse rides</li>
            <li className="program_mobile general_text">{DescriptionRiding}</li>
            <li className="programs_menu_item headerMedium">Photoshoot</li>
            <li className="program_mobile general_text">
              {DescriptionPhotoshoot}
            </li>
          </ul>

          {/* Signup Form */}
          <div className="programs_container_desktop_right">
            <div className="sign_up_container" id="join_us">
              <h1 className="sign_up_header">Sign up for training</h1>
              <p className="sign_up_text">
                Select the program and date of the lesson.
              </p>
              <form
                action=""
                onSubmit={(e) => submitForm(e)}
                className="sign_up_form"
                id="sign_up_form"
              >
                <div className="input_container">
                  <label htmlFor="first_name" className="form_label">
                    <b>First Name</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    id="form_input_name"
                    name="first_name"
                    required
                  />
                </div>
                <div className="input_container">
                  <label htmlFor="email" className="form_label">
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    id="form_input_email"
                    placeholder="Your Email Address"
                    name="email"
                    required
                  />
                </div>

                <PhoneInput
                  initialValueFormat="national"
                  international
                  countryCallingCodeEditable={false}
                  value={country}
                  onChange={setCountry}
                  defaultCountry="US"
                  required
                  id="form_input_phone"
                />

                <div className="input_container">
                  <label htmlFor="program" className="form_label">
                    Our program
                  </label>
                  <select
                    id="form_input_program"
                    onChange={() => {
                      setFormValues(0);
                    }}
                    name="program"
                    required
                  >
                    <option value="">Select</option>
                    <option value="jumping">Jumping</option>
                    <option value="dressage">Dressage</option>
                    <option value="horse rides">Horse rides</option>
                    <option value="photoshoot">Photoshoot</option>
                  </select>
                </div>
                <div className="date_and_price_container">
                  <img
                    src="/icon-person.svg"
                    width={50}
                    className="input_form_icon_person"
                  />
                  <div className="input_quantity_container">
                    <button
                      className="quantity_button"
                      onClick={() => {
                        setFormValues(-1);
                      }}
                    >
                      -
                    </button>
                    <input
                      className="input_quantity"
                      id="form_input_quantity"
                      type="number"
                      value={1}
                      name="quantity"
                      size={2}
                      min={1}
                      max={20}
                      required
                    />
                    <button
                      className="quantity_button"
                      onClick={() => {
                        setFormValues(1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="input_date_container ">
                    <label htmlFor="date"></label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="date_input"
                      id="form_input_date"
                    />
                  </div>
                  <p className="form_price" id="form_input_price">
                    0
                  </p>
                </div>
                <div className="accept_submit_container">
                  <input
                    type="checkbox"
                    className="accept_box"
                    name="accept"
                    required
                  />
                  <p className="sign_up_text accept_terms_text">
                    I accept the Terms and Conditions and the
                    <a href="#">Privacy Policy</a>.
                  </p>
                  <div className="sign_up_btn_container">
                    <button
                      type="submit"
                      className="sign_up_btn general_text"
                      id="sign_up_btn"
                    >
                      Join us
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <ul>
              <li className="program_desktop program_desktop_active general_text">
                {DescriptionJumping}
              </li>
              <li className="program_desktop general_text">
                {DescriptionDressage}
              </li>
              <li className="program_desktop general_text">
                {DescriptionRiding}
              </li>
              <li className="program_desktop general_text">
                {DescriptionPhotoshoot}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;

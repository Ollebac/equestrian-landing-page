import { useEffect, useState } from "react";
import "../scss/programs.scss";
import { navigatePrograms } from "../functions/navigate_programs";
import { setFormValues } from "../functions/getFormPrice";

import PhoneInput, {
  isValidPhoneNumber,
  getCountryCallingCode,
} from "react-phone-number-input";

const Programs = () => {
  useEffect(() => {
    navigatePrograms();
  }, []);

  const [country, setCountry] = useState<any>();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(30);

  return (
    <>
      <section className="programs_background" id="programs">
        <h2 className="programs_title">Our programs</h2>
        <div className="programs_container">
          <ul className="programs_menu">
            <li className="programs_menu_item programs_menu_active">Jumping</li>
            <p className="program_content program_content_active">
              Show jumping is a part of a group of English riding equestrian
              events that also includes eventing, hunters, and equitation.
              Jumping classes are commonly seen at horse show throughout the
              world, including the Olympics. Sometimes shows are limited
              exclusively to jumpers. Courses are often colorful and at times,
              quiote creatively designed.
            </p>
            <li className="programs_menu_item">Dressage</li>
            <p className="program_content">
              Show jumping is a part of a group of English riding equestrian
              events that also includes eventing, hunters, and equitation.
              Jumping classes are commonly seen at horse show throughout the
              world, including the Olympics. Sometimes shows are limited
              exclusively to jumpers. Courses are often colorful and at times,
              quiote creatively designed.
            </p>
            <li className="programs_menu_item">Horse rides</li>
            <p className="program_content">
              Show jumping is a part of a group of English riding equestrian
              events that also includes eventing, hunters, and equitation.
              Jumping classes are commonly seen at horse show throughout the
              world, including the Olympics. Sometimes shows are limited
              exclusively to jumpers. Courses are often colorful and at times,
              quiote creatively designed.
            </p>
            <li className="programs_menu_item">Photoshoot</li>
            <p className="program_content">
              Show jumping is a part of a group of English riding equestrian
              events that also includes eventing, hunters, and equitation.
              Jumping classes are commonly seen at horse show throughout the
              world, including the Olympics. Sometimes shows are limited
              exclusively to jumpers. Courses are often colorful and at times,
              quiote creatively designed.
            </p>
          </ul>
        </div>
        <div className="sign_up_container">
          <h1 className="sign_up_header">Sign up for training</h1>
          <p className="sign_up_text">
            Select the program and date of the lesson.
          </p>
          <form action="/signup" className="sign_up_form" id="sign_up_form">
            <div className="input_container">
              <label htmlFor="first_name" className="form_label">
                <b>First Name</b>
              </label>
              <input
                type="text"
                placeholder="Your First Name"
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
                placeholder="Your Email Address"
                name="email"
                required
              />
            </div>

            <PhoneInput
              placeholder="8023456789"
              value={country}
              onChange={setCountry}
              defaultCountry="US"
            />

            <div className="input_container">
              <label htmlFor="program" className="form_label">
                Our program
              </label>
              <select id="select_program" name="program">
                <option value="select">Select</option>
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
                  id="input_quantity"
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
                />
              </div>
              <p className="form_price" id="form_price">
                {price}
              </p>
            </div>
            {/* <label>
                <input type="checkbox" checked={false} name="remember" />{" "}
                Remember me
              </label>

              <p>
                By creating an account you agree to our{" "}
                <a href="#">Terms & Privacy</a>.
              </p> */}

            {/* <div className="clearfix">
                <button type="button" className="cancelbtn">
                  Cancel
                </button>
                <button type="submit" className="signupbtn">
                  Sign Up
                </button>
              </div> */}
          </form>
        </div>
      </section>
    </>
  );
};

export default Programs;

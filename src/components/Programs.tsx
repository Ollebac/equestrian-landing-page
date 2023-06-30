import '../scss/Programs/programs.scss';

import { useEffect, useState, FC } from 'react';
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input';

type styleObject = {
  style: string;
  description: string;
};

const styleDescriptions: Array<styleObject> = [
  {
    style: 'Jumping',
    description:
      'Show jumping is a part of a group of English riding equestrian events that also includes eventing, hunters, and equitation. Jumping classes are commonly seen at horse show throughout the world, including the Olympics. Sometimes shows are limited exclusively to jumpers. Courses are often colorful and at times, quite creatively designed.',
  },
  {
    style: 'Dressage',
    description:
      "Dressage is a competitive equestrian sport that involves training horses to perform a series of movements and maneuvers in a precise and controlled manner. The objective of dressage is to develop the horse's natural athletic ability, balance, and grace, as well as to improve its obedience and responsiveness to the rider's commands.",
  },
  {
    style: 'Riding',
    description:
      'Horse riding is an activity where a person rides on the back of a horse. It can be done for various reasons, such as leisure, sport, or transportation. Horse rides can take place in a variety of settings, such as trails, arenas, or fields. Depending on the level of experience and skill of the rider, different styles of riding can be practiced, including English or Western riding.',
  },
  {
    style: 'Photoshoot',
    description:
      "A photography session that focuses on capturing images of horses in various poses and settings. These photoshoots can be done for a variety of purposes, such as to showcase a horse's beauty, to capture special moments with a beloved animal, or to create promotional materials for businesses related to the equine industry.",
  },
];

type FormDataType = {
  name: string;
  email: string;
  phone: any;
  program: string;
  quantity: number;
  date: string;
  price: number;
};

const Programs = () => {
  const today = new Date();
  const day = today.getDate();
  let month;
  const year = today.getFullYear();

  if (today.getMonth() < 10) {
    month = '0' + today.getMonth().toString();
  } else {
    month = today.getDate();
  }

  const [descriptionActive, setDescriptionActive] = useState<Number>(0);

  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: '',
    program: '',
    quantity: 1,
    date: `${year}-${month}-${day}`,
    price: 0,
  });

  const setLessonQuantity = (num: any) => {
    if (typeof num === 'string') {
      if (Number(num) < 1) {
        setFormData((prev) => ({
          ...prev,
          quantity: 1,
        }));
      } else if (Number(num) > 20) {
        setFormData((prev) => ({
          ...prev,
          quantity: 20,
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          quantity: Number(num),
        }));
      }
    } else {
      const newQuantity = formData.quantity + Number(num);
      if (newQuantity < 1 || newQuantity > 20) {
        return;
      } else {
        setFormData((prev) => ({
          ...prev,
          quantity: newQuantity,
        }));
      }
    }
  };

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isPossiblePhoneNumber(formData.phone)) {
      e.preventDefault();
      alert('Please enter a valid phone number');
      return false;
    }

    alert(`The following info has been submitted:
      Name: ${formData.name}
      Email: ${formData.email}
  
      Selected Program: ${formData.program}
      Number of Participants: ${formData.quantity}
      Date Selected: ${formData.date}
  
      Total Price: ${formData.price}
    `);

    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
      quantity: 1,
      date: '',
      price: 0,
    });

    document.getElementById('checkbox')?.click();
  };

  useEffect(() => {
    let programPrice = 0;
    switch (formData.program) {
      case '':
        programPrice = 0;
        break;
      case 'jumping':
        programPrice = 30;
        break;
      case 'dressage':
        programPrice = 40;
        break;
      case 'horse rides':
        programPrice = 20;
        break;
      case 'photoshoot':
        programPrice = 25;
        break;
    }
    setFormData((prev) => ({
      ...prev,
      price: programPrice * formData.quantity,
    }));
  }, [formData.program, formData.quantity]);

  return (
    <>
      <section className='programs_section_background' id='programs'>
        <h2 className='programs_section_title headerLarge'>Our programs</h2>
        <div className='programs_container'>
          <ul className='programs_menu'>
            <li
              className={`programs_menu_item ${descriptionActive === 0 ? 'programs_menu_active' : ''}`}
              onClick={() => {
                setDescriptionActive(0);
              }}
            >
              Jumping
            </li>
            <li className={`program_description_mobile ${descriptionActive === 0 ? 'program_mobile_active' : ''}`}>
              <p>{styleDescriptions[0].description}</p>
            </li>
            <li
              className={`programs_menu_item ${descriptionActive === 1 ? 'programs_menu_active' : ''}`}
              onClick={() => {
                setDescriptionActive(1);
              }}
            >
              Dressage
            </li>
            <li className={`program_description_mobile ${descriptionActive === 1 ? 'program_mobile_active' : ''}`}>
              <p>{styleDescriptions[1].description}</p>
            </li>
            <li
              className={`programs_menu_item ${descriptionActive === 2 ? 'programs_menu_active' : ''}`}
              onClick={() => {
                setDescriptionActive(2);
              }}
            >
              Horse rides
            </li>
            <li className={`program_description_mobile ${descriptionActive === 2 ? 'program_mobile_active' : ''}`}>
              <p>{styleDescriptions[2].description}</p>
            </li>
            <li
              className={`programs_menu_item ${descriptionActive === 3 ? 'programs_menu_active' : ''}`}
              onClick={() => {
                setDescriptionActive(3);
              }}
            >
              Photoshoot
            </li>
            <li className={`program_description_mobile ${descriptionActive === 3 ? 'program_mobile_active' : ''}`}>
              <p>{styleDescriptions[3].description}</p>
            </li>
          </ul>

          <div className='programs_container_right'>
            {/* Program Descriptions - Desktop */}
            <ul>
              {styleDescriptions.map((program, index: number) => (
                <li
                  className={`program_description_desktop ${
                    descriptionActive === index ? 'program_desktop_active' : ''
                  }`}
                >
                  {styleDescriptions[index].description}
                </li>
              ))}
            </ul>

            {/* Signup Form */}
            <div className='sign_up_container' id='join_us'>
              <h1 className='sign_up_header'>Sign up for training</h1>
              <p className='sign_up_text'>Select the program and date of the lesson.</p>
              <form action='' onSubmit={(e) => submitForm(e)} className='sign_up_form' id='sign_up_form'>
                {/* Name Input */}
                <div className='input_container'>
                  <input
                    type='text'
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    value={formData.name}
                    id='form_input_name'
                    name='first_name'
                    required
                  />
                  <div className={formData.name === '' ? 'input_label' : 'input_label_shift'}>First Name</div>
                </div>
                {/* Email Input */}
                <div className={`input_container`}>
                  <input
                    type='email'
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    value={formData.email}
                    id='form_input_email'
                    name='email'
                    required
                  />
                  <div className={formData.email === '' ? 'input_label' : 'input_label_shift'}>Email Address</div>
                </div>
                {/* Phone Input */}
                <PhoneInput
                  initialValueFormat='national'
                  international
                  countryCallingCodeEditable={false}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData((prev) => ({
                      ...prev,
                      phone: e!,
                    }));
                  }}
                  defaultCountry='US'
                  required
                />

                {/* Select Program */}
                <div className='input_container'>
                  <select
                    id='form_input_program'
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        program: e.target.value,
                      }));
                    }}
                    value={formData.program}
                    name='program'
                    required
                  >
                    <option value=''>Select a Program</option>
                    <option value='jumping'>Jumping</option>
                    <option value='dressage'>Dressage</option>
                    <option value='horse rides'>Horse rides</option>
                    <option value='photoshoot'>Photoshoot</option>
                  </select>
                </div>

                {/* Date and Price */}
                <div className='date_and_price_container'>
                  <img src='./icons/icon-person.svg' width={40} className='input_form_icon_person' />
                  <div className='input_quantity_container'>
                    <button
                      className='quantity_button'
                      onClick={() => {
                        setLessonQuantity(-1);
                      }}
                    >
                      -
                    </button>
                    <input
                      type='Number'
                      name='quantity'
                      className='input_quantity'
                      value={formData.quantity}
                      size={2}
                      min={1}
                      max={20}
                      required
                      onChange={(e) => {
                        setLessonQuantity(e.target.value);
                      }}
                    />

                    <button
                      className='quantity_button'
                      onClick={() => {
                        setLessonQuantity(1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className='input_date_container '>
                    <input
                      type='date'
                      name='date'
                      className='date_input'
                      value={formData.date}
                      onChange={(e) => {
                        setFormData((prev) => ({
                          ...prev,
                          date: e.target.value,
                        }));
                      }}
                      required
                    />
                  </div>
                  <span className='form_price'>${formData.price}</span>
                </div>
                <div className='submit_form_container'>
                  <input id='checkbox' type='checkbox' className='accept_box' name='accept' required />
                  <p className='accept_terms_text'>
                    I accept the Terms and Conditions and the
                    <a href='#'> Privacy Policy</a>.
                  </p>
                  <div className='sign_up_btn_container'>
                    <button type='submit' className='join_us_btn' id='sign_up_btn'>
                      Join us
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;

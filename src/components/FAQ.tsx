import '../scss/FAQ/faq.scss';
import '../scss/fonts.scss';

import { navigateFAQ } from '../functions/navigate_FAQ';

const FAQ = () => {
  return (
    <section className='faq_section_container' id='faq'>
      <div className='faq_title headerLarge'>Frequently asked questions</div>
      <ul className='faq_content_container'>
        <li className='faq_question_container'>
          <button
            className='faq_question faq_question_inactive'
            onClick={() => {
              navigateFAQ(0);
            }}
          >
            Is this a subscription services?
          </button>
          <p className='faq_answer general_text faq_answer_inactive'>
            No! The service provided is a one time fee, however there is a general maintenance fee to keep the created
            website online. This fee is charged by the host to run the servers.
          </p>
        </li>
        <li className='faq_question_container'>
          <button
            className='faq_question headerMedium faq_question_inactive'
            onClick={() => {
              navigateFAQ(1);
            }}
          >
            Can I customize the slides?
          </button>
          <p className='faq_answer general_text faq_answer_inactive'>
            Of course! All slides are fully customizable to your specifications. You will work directly with one of our
            designers to help fulfill your requirements.
          </p>
        </li>
        <li className='faq_question_container'>
          <button
            className='faq_question headerMedium faq_question_inactive'
            onClick={() => {
              navigateFAQ(2);
            }}
          >
            What are the files inside?
          </button>
          <p className='faq_answer general_text faq_answer_inactive'>
            Please provide all relevant files such as pictures, coach descriptions, contact info, etc..
          </p>
        </li>
        <li className='faq_question_container'>
          <button
            className='faq_question headerMedium faq_question_inactive'
            onClick={() => {
              navigateFAQ(3);
            }}
          >
            What kind of license will I get?
          </button>
          <p className='faq_answer general_text faq_answer_inactive'>
            You will get a license of full ownership of the domain.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default FAQ;

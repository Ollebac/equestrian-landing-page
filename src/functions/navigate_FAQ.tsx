export const navigateFAQ = (num: number) => {
  let faq_question = document.getElementsByClassName('faq_question');
  let faq_answer = document.getElementsByClassName('faq_answer');

  if (faq_question[num].classList.contains('faq_question_inactive')) {
    console.log('faq is inactive');
    faq_question[num].className = faq_question[num].className.replace(' faq_question_inactive', ' faq_question_active');
    faq_answer[num].className = faq_answer[num].className.replace(' faq_answer_inactive', ' faq_answer_active');
  } else {
    console.log('faq is active');
    faq_question[num].className = faq_question[num].className.replace(' faq_question_active', ' faq_question_inactive');
    faq_answer[num].className = faq_answer[num].className.replace(' faq_answer_active', ' faq_answer_inactive');
  }
};

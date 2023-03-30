import { useEffect } from "react";

import "../scss/Coaches/coaches.scss";
import "../scss/fonts.scss";

const CreateCoach = ({
  coach,
  description,
  picSource,
  picAlt,
  yearsRiding,
  awards,
  statNum_3,
}: {
  coach: string;
  description: string;
  picSource: string;
  picAlt: string;
  yearsRiding: string;
  awards: string;
  statNum_3?: string;
}) => {
  return (
    <div className="coach_outer_container">
      <h3 className="coach_title headerLarge">Coaches</h3>
      <div className="coach_inner_container">
        <div className="my_slides_left fadeIn_fadeOut ">
          <img src={picSource} className="coach_pic" alt={picAlt} />
        </div>
        <div className="my_slides_right fadeIn_fadeOut ">
          <div className="coach_name_description_container">
            <h4 className="coach_name headerMedium">{coach}</h4>
            <p className="coach_description general_text">{description}</p>
          </div>
          <div className="coach_stats_container">
            <div className="coach_stat">
              <p className="coach_stat_number headerMedium">{yearsRiding}</p>
              <p className="coach_stat_text general_text">
                years experience with horses
              </p>
            </div>
            <div className="coach_stat">
              <p className="coach_stat_number headerMedium">{awards}</p>
              <p className="coach_stat_text general_text">
                International awards
              </p>
            </div>
            <div className="coach_stat">
              <p className="coach_stat_number headerMedium">{statNum_3}</p>
              <p className="coach_stat_text general_text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Brianna = (
  <CreateCoach
    coach="Brianna"
    description={
      "As a horse riding trainer, my passion for horses began at a young age when I started taking riding lessons. I have since dedicated my life to mastering the art of horsemanship and helping others do the same. I have trained and competed in a variety of disciplines, including dressage, show jumping, and eventing. I have also worked with horses of all ages and levels of experience, from green broke to highly trained."
    }
    picSource={"coach-brianna.jpg"}
    picAlt={"Coach Brianna Picture"}
    yearsRiding={"10"}
    awards={"+6"}
  />
);

const Mayumi = (
  <CreateCoach
    coach="Mayumi"
    description={
      "Mayumi is an expereinced and knowledgable instructor who specializes in providing student with a comprehensive show jumping program. By utilizing a mixture of private and group lessons, Mayumi is able to give each student the individual attention and instruction they need to excel. Through a combination of skill development and practice sessions, Mayumi is able to help riders reach their maximum potential in the sport of show jumping."
    }
    picSource={"coach-mayumi.jpg"}
    picAlt={"Coach Mayumi Picture"}
    yearsRiding={"7"}
    awards={"+3"}
  />
);

const Jack = (
  <CreateCoach
    coach="Jack"
    description={
      "As a horseback riding coach, I have a deep passion for helping riders achieve their goals and reach their full potential in the saddle. I have spent many years honing my skills as a rider and coach, and have extensive experience working with riders of all ages and skill levels. Whether my students are beginners just starting out or experienced riders looking to improve their technique, I tailor my coaching to meet their unique needs and help them succeed. "
    }
    picSource={"coach-jack.jpg"}
    picAlt={"Coach Jack Picture"}
    yearsRiding={"12"}
    awards={"+10"}
  />
);

const Stefanie = (
  <CreateCoach
    coach="Stefanie"
    description={
      "I am passionate about helping riders develop their skills and reach their full potential. I have been riding horses for many years and have competed in various disciplines, including dressage, show jumping, and cross-country. I have worked with riders of all levels, from beginners to advanced competitors, and I take great pride in helping each one achieve their personal best. Whether you're looking to compete at a high level or simply enjoy riding as a hobby, I am dedicated to helping you succeed."
    }
    picSource={"coach-stefanie.jpg"}
    picAlt={"Coach Stefanie Picture"}
    yearsRiding={"5"}
    awards={"+4"}
  />
);

let slideIndex = 1;

function plusSlides(n: number = 1) {
  showSlides((slideIndex += n));
}

function currentSlide(n: number) {
  showSlides((slideIndex = n));
}

function showSlides(n: number) {
  let i;
  let slides = document.getElementsByClassName("my_slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    (slides[i] as HTMLElement).style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  (slides[slideIndex - 1] as HTMLElement).style.display = "block";
  dots[slideIndex - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", (event) => {
  let slides = document.getElementsByClassName("my_slides");
  let dots = document.getElementsByClassName("dot");
  (slides[slideIndex - 1] as HTMLElement).style.display = "block";
  dots[slideIndex - 1].className += " active";
});

setInterval(plusSlides, 6000);

const Coaches = () => {
  useEffect(() => {}, []);

  return (
    <section className="coaches_section_container">
      <div className="slideshow_container">
        <div className="my_slides">{Brianna}</div>
        <div className="my_slides">{Mayumi}</div>
        <div className="my_slides">{Jack}</div>
        <div className="my_slides">{Stefanie}</div>
        <div className="dots_container">
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
          <span className="dot" onClick={() => currentSlide(4)}></span>
        </div>
        <br />
        <br />
      </div>
    </section>
  );
};

export default Coaches;

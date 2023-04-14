import { useState, useEffect, useRef, FC } from "react";
import "../scss/Coaches/coaches.scss";
import "../scss/fonts.scss";

type CoachObject = {
  picSrc: string;
  picAlt: string;
  coachName: string;
  description: string;
  yearsRiding: string;
  awards: string;
};

const coachArray: Array<CoachObject> = [
  {
    coachName: "Brianna",
    description:
      "As a horse riding trainer, my passion for horses began at a young age when I started taking riding lessons. I have since dedicated my life to mastering the art of horsemanship and helping others do the same. I have trained and competed in a variety of disciplines, including dressage, show jumping, and eventing. I have also worked with horses of all ages and levels of experience, from green broke to highly trained.",
    picSrc: "/people/coach-brianna.jpg",
    picAlt: "Coach Brianna Picture",
    yearsRiding: "10",
    awards: "6+",
  },
  {
    coachName: "Mayumi",
    description:
      "Mayumi is an expereinced and knowledgable instructor who specializes in providing student with a comprehensive show jumping program. By utilizing a mixture of private and group lessons, Mayumi is able to give each student the individual attention and instruction they need to excel. Through a combination of skill development and practice sessions, Mayumi is able to help riders reach their maximum potential in the sport of show jumping.",
    picSrc: "/people/coach-mayumi.jpg",
    picAlt: "Coach Mayumi Picture",
    yearsRiding: "7",
    awards: "3+",
  },
  {
    coachName: "Jack",
    description:
      "As a horseback riding coach, I have a deep passion for helping riders achieve their goals and reach their full potential in the saddle. I have spent many years honing my skills as a rider and coach, and have extensive experience working with riders of all ages and skill levels. Whether my students are beginners just starting out or experienced riders looking to improve their technique, I tailor my coaching to meet their unique needs and help them succeed.",
    picSrc: "/people/coach-jack.jpg",
    picAlt: "Coach Jack Picture",
    yearsRiding: "12",
    awards: "10+",
  },
  {
    coachName: "Stefanie",
    description: `I am passionate about helping riders develop their skills and reach their full potential. I have been riding horses for many years and have competed in various disciplines, including dressage, show jumping, and cross-country. I have worked with riders of all levels, from beginners to advanced competitors, and I take great pride in helping each one achieve their personal best. Whether you're looking to compete at a high level or simply enjoy riding as a hobby, I am dedicated to helping you succeed`,
    picSrc: "/people/coach-stefanie.jpg",
    picAlt: "Coach Stefanie Picture",
    yearsRiding: "5",
    awards: "4+",
  },
];

const Coach: FC<{ coach: CoachObject; active: boolean; fadeOut: boolean }> = ({
  coach,
  active,
  fadeOut,
}) => {
  return (
    <div
      className={`coach_inner_container ${active ? "fadeIn" : ""} ${
        fadeOut ? "fadeOut" : ""
      }`}
    >
      <div className="my_slides_left ">
        <img src={coach.picSrc} className="coach_pic" alt={coach.picAlt} />
      </div>
      <div className="my_slides_right ">
        <div className="coach_name_description_container">
          <h4 className="coach_name headerMedium">{coach.coachName}</h4>
          <p className="coach_description general_text">{coach.description}</p>
        </div>
        <div className="coach_stats_container">
          <div className="coach_stat">
            <p className="coach_stat_number headerMedium">
              {coach.yearsRiding}
            </p>
            <p className="coach_stat_text general_text">
              years experience with horses
            </p>
          </div>
          <div className="coach_stat">
            <p className="coach_stat_number headerMedium">{coach.awards}</p>
            <p className="coach_stat_text general_text">International awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Coaches = () => {
  const [activeCoach, setActiveCoach] = useState<number>(0);
  const [fadeOutCoach, setFadeOutCoach] = useState<number>(-1);
  const coachRef = useRef<number>(0);
  const autoScroll = useRef<boolean>(true);

  const pickCoach = (coachNum: number) => {
    autoScroll.current = false;
    setFadeOutCoach(coachRef.current);
    setActiveCoach(coachNum);
    coachRef.current = coachNum;
  };

  useEffect(() => {
    setTimeout(() => {
      if (autoScroll.current === true) {
        if (coachRef.current === 3) {
          console.log("setting coach from 3");
          setActiveCoach(0);
          setFadeOutCoach(3);
          coachRef.current = 0;
        } else {
          console.log("setting new coach");
          setFadeOutCoach(coachRef.current);
          coachRef.current++;
          setActiveCoach(coachRef.current);
        }
      } else {
        console.log("resetting auto");
        autoScroll.current = true;
      }
    }, 8000);
  }, [coachRef.current, autoScroll.current]);

  return (
    <section className="coaches_section_container">
      <div className="slideshow_container">
        <button
          className="auto_flip_button"
          onClick={() => {
            console.log("clearing interval");
          }}
        >
          Disable Auto
        </button>
        <div className={`coach_outer_container`}>
          <h3 className="coach_title headerLarge">Coaches</h3>
          <div className="overlapping_coaches">
            {coachArray.map((coach, index: number) => (
              <Coach
                key={coach.coachName}
                coach={coach}
                active={index === activeCoach}
                fadeOut={index === fadeOutCoach}
              />
            ))}
          </div>
        </div>
        <div className="dots_container">
          <span className="dot" onClick={() => pickCoach(0)}></span>
          <span className="dot" onClick={() => pickCoach(1)}></span>
          <span className="dot" onClick={() => pickCoach(2)}></span>
          <span className="dot" onClick={() => pickCoach(3)}></span>
        </div>
      </div>
    </section>
  );
};

export default Coaches;

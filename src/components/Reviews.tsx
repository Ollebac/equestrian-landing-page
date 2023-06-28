import '../scss/Reviews/reviews.scss';
import '../scss/fonts.scss';

const Reviews = () => {
  return (
    <section className='review_section_container' id='reviews'>
      <div className='mosaic_container'>
        <div className='review_title_container'>
          <h3 className='review_title headerLarge'>Reviews</h3>
          <p className='review_title_description general_text'>What people say about us</p>
        </div>
        <div className='review_container review1'>
          <p className='review_content'>
            I've been riding at the Equestrian Club for a few months and it's been great. The facilities are
            well-maintained, the horses are so sweet, and the instructors are top notch. They really make sure you feel
            welcome and comfortable which is really important. Highly recommend!
          </p>
          <div className='reviewer_outer_container'>
            <img src='./people/tom-sawyer.svg' className='reviewer_image' width={200} />
            <div className='reviewer_inner_container'>
              <p className='reviewer_name'>Tom Sawyer</p>
              <p className='review_about'>Dressage</p>
            </div>
          </div>
        </div>
        <div className='review_container review2'>
          <p className='review_content'>
            The Equestrian Club is a great place to learn to ride. The instructors are knowledgeable and really take the
            time to make sure you understand the basics of riding. The horses are well-trained and responsive, making
            each lesson an enjoyable experience. Highly recommend!
          </p>
          <div className='reviewer_outer_container'>
            <img src='./people/jessica-clines.svg' className='reviewer_image' width={200} />
            <div className='reviewer_inner_container'>
              <p className='reviewer_name'>Jessica Clines</p>
              <p className='review_about'>Jumping</p>
            </div>
          </div>
        </div>
        <div className='review_container review3'>
          <p className='review_content'>
            The Equestrian Club is an amazing place to ride. The instructors are knowledgeable and friendly, and the
            horses are well-trained and obedient. I feel safe and comfortable during my lessons and always have a great
            time. Highly recommend for anyone lookng for a great equestrian experience. The staff was extremely friendly
            and helpful, and they made sure to answer all of my questions. The horses were well taken care of and very
            responsive to the riders.
          </p>
          <div className='reviewer_outer_container'>
            <img src='./people/terry-jones.svg' className='reviewer_image' width={200} />
            <div className='reviewer_inner_container'>
              <p className='reviewer_name'>Terry Jones</p>
              <p className='review_about'>Horse rides</p>
            </div>
          </div>
        </div>
        <div className='review_container review4'>
          <p className='review_content'>
            I've been riding with the Equestrian Club for over a year anbd can't say enough good things about them. The
            staff is friendly and accommodating, the horses are so well-trained and responsive, and the facilities are
            top notch.
          </p>
          <div className='reviewer_outer_container'>
            <img src='./people/isabel-flora.svg' className='reviewer_image' width={200} />
            <div className='reviewer_inner_container'>
              <p className='reviewer_name'>Isabel Flora</p>
              <p className='review_about'>Horse rides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

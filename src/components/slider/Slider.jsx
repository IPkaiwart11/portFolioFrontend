import React, { useState, useEffect } from 'react';
import './slider.scss';

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);


function plusSlides(n) {
               let newIndex = slideIndex + n;
             
               // If the new index is greater than the number of slides, go to the first slide
               if (newIndex > 3) {
                 setSlideIndex(1);
               }
               // If the new index is less than 1, go to the last slide
               else if (newIndex < 1) {
                 setSlideIndex(3);
               } else {
                 setSlideIndex(newIndex);
               }
             }
             

  function showSlides() {
    
    let slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) {
//       setSlideIndex(1);
//     }
//     if (n < 1) {
//       setSlideIndex(slides.length);
//     }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides">
          <div className="numbertext">1 / 3</div>
          <img
            src="https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg"
            style={{ width: '100%' }}
            alt="Slide 1"
          />
          {/* <div className="text">car 1</div> */}
        </div>

        <div className="mySlides">
          <div className="numbertext">2 / 3</div>
          <img
            src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{ width: '100%' }}
            alt="Slide 2"
          />
          {/* <div className="text">Car 2</div> */}
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img
            src="https://images.pexels.com/photos/810357/pexels-photo-810357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{ width: '100%' }}
            alt="Slide 3"
          />
          {/* <div className="text">Car 3</div> */}
        </div>

        <span className="prev" onClick={() => plusSlides(-1)}>prev</span>
        <span className="next" onClick={() => plusSlides(1)}>next</span>
      </div>
    </>
  );
}

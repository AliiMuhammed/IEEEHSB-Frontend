import React, { useRef, useEffect } from "react";
import "../../../Style/Slider.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ReactCardSlider = (props) => {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += 500;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    let observer;

    const handleScroll = () => {
      if (slider.scrollLeft === 0) {
        prependSlides();
      } else if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        appendSlides();
      }
    };

    const prependSlides = () => {
      const currentSlides = Array.from(slider.children);
      const firstSlide = currentSlides[0];
      props.slides.forEach((slide) => {
        const newSlide = firstSlide.cloneNode(true);
        newSlide.querySelector(".slider-card-title").textContent = slide.title;
        newSlide.querySelector(".slider-card-description").textContent =
          slide.description;
        newSlide.querySelector(
          ".slider-card-image"
        ).style.backgroundImage = `url(${slide.image})`;
        slider.insertBefore(newSlide, firstSlide);
      });
      slider.scrollLeft = slider.scrollWidth / 3;
    };

    const appendSlides = () => {
      const currentSlides = Array.from(slider.children);
      const lastSlide = currentSlides[currentSlides.length - 1];
      props.slides.forEach((slide) => {
        const newSlide = lastSlide.cloneNode(true);
        newSlide.querySelector(".slider-card-title").textContent = slide.title;
        newSlide.querySelector(".slider-card-description").textContent =
          slide.description;
        newSlide.querySelector(
          ".slider-card-image"
        ).style.backgroundImage = `url(${slide.image})`;
        slider.appendChild(newSlide);
      });
    };

    observer = new IntersectionObserver(handleScroll, { threshold: 1.0 });
    observer.observe(slider);

    // Initial slides setup
    appendSlides();
    prependSlides();

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [props.slides]);

  return (
    <div id="main-slider-container">
      <MdChevronLeft
        size={40}
        className="slider-icon left"
        onClick={slideLeft}
      />
      <div id="slider" ref={sliderRef} className="slider-container">
        {props.slides.map((slide, index) => (
          <div className="slider-card" key={index}>
            <div
              className="slider-card-image"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
              }}
            ></div>
            <p className="slider-card-title">{slide.title}</p>
            <p className="slider-card-description">{slide.description}</p>
          </div>
        ))}
      </div>
      <MdChevronRight
        size={40}
        className="slider-icon right"
        onClick={slideRight}
      />
    </div>
  );
};

export default ReactCardSlider;

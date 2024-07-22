import React, { useState, useEffect, useRef } from "react";
import "../style/achievementCard.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AchievementCard = ({ targetNumber, duration, text, resetTrigger }) => {
  const [progress, setProgress] = useState(0);
  const match = targetNumber.match(/\d+/); // Matches one or more digits
  const number = match ? parseInt(match[0], 10) : null;
  const cardRef = useRef(null);

  useEffect(() => {
    const stepTime = (duration * 1000) / number; // Step time in milliseconds

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < number) {
          return prev + 1;
        }
        clearInterval(interval);
        return number;
      });
    }, stepTime);

    return () => clearInterval(interval);
  }, [number, duration, resetTrigger]);

  useEffect(() => {
    // Intersection Observer to detect when the card is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger reset when the card is in view
          setProgress(0);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [cardRef]);

  return (
    <div className="achievement-card" ref={cardRef}>
      <div className="progress-circle">
        <CircularProgressbar
          value={progress}
          maxValue={number} 
          styles={buildStyles({
            trailColor: "#d6d6d6",
          })}
        />
        <div className="progress-text">{progress}</div>
      </div>
      <div className="progress-text-desc">{text}</div>
    </div>
  );
};

export default AchievementCard;

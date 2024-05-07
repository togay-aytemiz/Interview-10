import React, { useState } from "react";

// URLs of the images for the CAPTCHA
const images = [
  "https://images.pexels.com/photos/2249528/pexels-photo-2249528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1061141/pexels-photo-1061141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/2249530/pexels-photo-2249530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1061139/pexels-photo-1061139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1010973/pexels-photo-1010973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/4772874/pexels-photo-4772874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

function Captcha() {
  const [isCaptchaVisible, setIsCaptchaVisible] = useState(false);
  const [correctImage, setCorrectImage] = useState(null);

  // Function to handle the button click to show CAPTCHA
  const showCaptcha = () => {
    setIsCaptchaVisible(true);
    setCorrectImage(Math.floor(Math.random() * 6) + 1); // Random number between 1 and 6
  };

  // Function to handle image click
  const handleImageClick = (index) => {
    if (index + 1 === correctImage) {
      alert("Correct! Resetting CAPTCHA.");
      setIsCaptchaVisible(false);
      setCorrectImage(null);
    } else {
      alert("Incorrect, please try again!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10">
      {!isCaptchaVisible && (
        <button
          className="p-4 w-full bg-red-800 text-white rounded-lg mb-5"
          onClick={showCaptcha}
        >
          Show CAPTCHA
        </button>
      )}
      {isCaptchaVisible && (
        <div>
          <p className="text-center mb-4">
            Please select image number {correctImage}
          </p>
          <div className="grid grid-cols-3 gap-6">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`CAPTCHA ${index + 1}`}
                className="h-[100px] sm:h-[200px] w-[400px] cursor-pointer"
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Captcha;

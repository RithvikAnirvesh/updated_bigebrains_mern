import React from "react";

const timelineData = [
  {
    title: "Who We Are",
    text: "Big E Brains is a leading provider of AI Training, Talent Placement, Staff Augmentation, and AI Project Delivery. We help companies build future-ready teams and deploy intelligent solutions across diverse industries. We are redefining the future of work and innovation through the transformative power of Artificial Intelligence—empowering both individuals and businesses to thrive in a technology-first world.",
    image: "/lovable-uploads/about.webp",
    side: "right",
  },
  {
    title: "Our Mission",
    text: "At Big E Brains, our mission is to empower nonprofits by harnessing advanced AI technology to streamline recruitment processes. We aim to ensure precise talent matching, reduce time-to-fill, and promote equitable hiring practices, enabling organizations to build agile, compliant, and diverse teams while focusing more on their mission and less on administrative tasks.",
    image: "/lovable-uploads/mission.webp",
    side: "left",
  },
  {
    title: "Our Vision",
    text: "Our vision is to be the leading partner for nonprofits in revolutionizing recruitment through AI-driven solutions. We aspire to create a future where every nonprofit can effortlessly connect with the right talent, fostering inclusive and efficient teams that drive meaningful impact in their communities.",
    image: "/lovable-uploads/vision.webp",
    side: "right",
  },
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="text-center mb-16">
        <span className="uppercase text-sm text-gray-500 tracking-widest">About Us</span>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
          Empowering Innovation Through AI
        </h1>
        <p className="mt-4 text-gray-500 text-sm">
          Building future-ready teams and delivering intelligent solutions
        </p>
      </div>

      <div className="relative border-l-2 border-gray-300 ml-4 md:ml-1">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-16 flex flex-col md:flex-row items-center ${
              item.side === "right" ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-1/2 px-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 text-sm md:text-base text-gray-700 mt-4 md:mt-0">
              <h3 className="font-bold text-blue-800 mb-2">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-center text-gray-400 mt-12 max-w-4xl mx-auto">
        At Big E Brains, we understand that the future of work is being reshaped by artificial intelligence. We're committed to helping organizations navigate this transformation by providing cutting-edge AI solutions, expert talent, and comprehensive training. Our focus is on creating sustainable, efficient, and innovative workplaces where technology enhances human potential and drives meaningful progress.
      </div>
    </div>
  );
};

export default About;

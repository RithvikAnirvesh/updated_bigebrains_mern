import React from "react";

const timelineData = [
  {
    title: "The Beginning",
    text: "The Ideologic journey began in 1985 when two college friends, John Sohan and Erik Klippemann got together and started selling computers and engineering calculators.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=60", // startup teamwork
    side: "right",
  },
  {
    title: "Mission",
    text: "At Ideologic we're on a mission to bring together the personal service of local IT providers with the power of a national network. Our office offers high-touch IT services that clients love from highly experienced local team members.",
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=60", // professional women meeting
    side: "left",
  },
  {
    title: "We are global",
    text: "Our national network allows us to offer best-in-class services like dedicated vCIOs, specialized security and compliance advisory services, a 24/7 help desk, and more.",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Introduction_To_The_Heuristic_Function_In_AI.jpg", // global team/tech
    side: "right",
  },
];

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="text-center mb-16">
        <span className="uppercase text-sm text-gray-500 tracking-widest">About Us</span>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-2">
          Dedicated to delivering excellence
        </h1>
        <p className="mt-4 text-gray-500 text-sm"></p>
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
        We understand that businesses can be chaotic. That’s where we come in. We’re focused on adding some much-needed balance to the mix. We accomplish that by forging rock-solid partnerships with our clients. When you work with us, you’re working with a team who understands your pain points and your goals. We’ll help you find order in the midst of the chaos.
      </div>
    </div>
  );
};

export default About;

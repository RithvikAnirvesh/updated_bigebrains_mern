import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const slides = [
	{
		image: "https://cdn.prod.website-files.com/66e01bcf271f49df875d1c31/672c93b1e0412d9ddb35beea_Image_2024-10-31T12%3A52%3A29.095Z-RaYgudzLjcTkV8GEdgo9dWGkhWFEh0.webp",
		title: "AI Agents",
		subtitle: "Develop autonomous and reactive AI systems",
		description:
			"Learn to design agentic workflows\nImplement multi-agent systems\nBuild hands-on projects with real-time AI agents",
	},
	{
		image: "https://miro.medium.com/v2/resize:fit:1400/0*_5ug7mUKThcPdMsZ",
		title: "Generative AI",
		subtitle: "Create content with cutting-edge AI models",
		description:
			"Master Large Language Models (LLMs)\nBuild intelligent applications using generative AI tools\nDive into real-world use cases and demos",
	},
	{
		image: "https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003763.jpg?ga=GA1.1.1827194027.1745307325&semt=ais_hybrid&w=740",
		title: "Staffing",
		subtitle: "Empowering AI-ready talent and organizations",
		description:
			"Bridge the gap between talent and tech\nAI-driven hiring strategies\nUpskill teams with project-based learning",
	},
];

const HeroSection = () => {
	const [current, setCurrent] = useState(0);
	const slide = slides[current];

	const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
	const goToSlide = (index: number) => setCurrent(index);

	useEffect(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="home"
			className="relative h-[85vh] w-full bg-cover bg-center overflow-hidden mx-auto transition-all duration-700 ease-in-out"
			style={{ backgroundImage: `url(${slide.image})` }}
		>
			<div className="absolute inset-0 bg-black/60 z-0" />

			<div className="relative z-10 flex flex-col items-center justify-center text-center h-full w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-white">
					{slide.title}
				</h1>
				<h2 className="text-base sm:text-lg md:text-xl text-gray-300 mb-2 font-medium">
					{slide.subtitle}
				</h2>
				<p className="text-xs sm:text-sm md:text-base text-gray-300 whitespace-pre-line">
					{slide.description}
				</p>
			</div>

			<div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 sm:gap-3 items-center justify-center">
				{slides.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`transition-all duration-300 rounded-full ${
							index === current
								? "bg-white w-8 sm:w-10 h-3 sm:h-4 rounded-full"
								: "bg-gray-400 w-2 sm:w-3 h-2 sm:h-3"
						}`}
					/>
				))}
			</div>

			<button
				onClick={nextSlide}
				className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-1 sm:p-2 rounded-full backdrop-blur-md shadow-md transition-all"
			>
				<ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
			</button>
		</section>
	);
};

export default HeroSection;


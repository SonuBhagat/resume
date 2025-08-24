import React from "react";

type Project = {
    name: string;
    description: string;
    technologies: string[];
    liveLink: string;
    image?: string;
};

const projects: Project[] = [
    {
        name: "Malgudi Junction Restaurant Website",
        description:
            "This project is a responsive, single-page website built for Malgudi Junction, a restaurant in Dwarka, Delhi. The goal was to create a modern and visually appealing online presence that showcases their diverse menu and tells their story. The site is fully responsive, ensuring a seamless experience on any device.",
        technologies: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
        liveLink: "https://malgudijunction.in/",
        image: "/images/portfolio-card.png",
    },
    {
        name: "DayAhead Inc. - Energy Forecasting Platform",
        description:
            "This project involved building a professional corporate website for DayAhead Inc., a company specializing in renewable energy forecasting. The primary objective was to create a clean, credible, and informative platform that clearly communicates their specialized services and establishes them as a trusted partner in the energy sector. The website is built to be fully responsive, ensuring a seamless user experience across all devices.",
        technologies: ["JavaScript", "ReactJS", "Tailwind"],
        liveLink: "https://dayaheadinc.com/in-en",
        image: "/images/task-manager-card.png",
    },
    {
        name: "Electrovault Power - Advanced Energy Solutions",
        description:
            "Developed a high-performance website for Electrovault Power, a leader in battery storage solutions. The site uses Next.js for server-side rendering, ensuring fast performance and strong SEO. The responsive UI was built with Tailwind CSS for a clean, modern design.",
        technologies: ["Next.js", "Tailwind CSS"],
        liveLink: "https://www.electrovault.in/",
        image: "/images/ecommerce-card.png",
    },
];

const Projects: React.FC = () => (
    <section className="max-w-4xl mx-auto py-12  px-4 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-left mb-8 text-black">
            Projects
        </h2>

        <div className="max-w-4xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 items-stretch">
            {projects.map((project) => (
                <article
                    key={project.name}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col overflow-hidden"
                    aria-labelledby={`project-${project.name}`}
                >
                    <div className="p-6 flex flex-col flex-1">
                        <h3
                            id={`project-${project.name}`}
                            className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-300"
                        >
                            {project.name}
                        </h3>

                        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                            {project.description}
                        </p>

                        <div className="mb-4">
                            <span className="font-medium text-gray-800 dark:text-gray-200 mr-2">
                                Technologies:
                            </span>

                            <div className="mt-2 flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-sm bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-200 px-2 py-1 rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-auto pt-2">
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors"
                            >
                                Live Site
                            </a>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </section>
);

export default Projects;

'use client';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Website Portfolio",
      description: "A personal portfolio website showcasing my projects, skills, and experience.",
      image: "/project1.png",
      technologies: ["Next.js", "PayloadCMS", "Vercel", "Supabase"],
      liveUrl: "https://portfolio-kappa-lilac-67.vercel.app/",
      github: "https://github.com/fazafazli/portfolio",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">My Projects</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Others will be added, if possible (I mean, everything is possible, right?).
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 w-full max-w-2xl">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover-lift"
              >
                {/* Replace this section with Image component */}
                <div className="h-48 relative bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9jkHL0DcKqmaJ1d/altQuW6rC4ioWCQioyFbKkqwX0pSH//2Q=="
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-center leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full hover:bg-indigo-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center space-x-6">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-all hover-lift"
                    >
                      <ExternalLink size={18} />
                      Vercel
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-black font-medium transition-all hover-lift"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {projects.length === 1 && (
          <div className="text-center mt-16">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">More Projects Coming Soon!</h3>
              <p className="text-gray-600 mb-4">
                I'm constantly working on new projects and will be adding them here soon.
              </p>
              <p className="text-sm text-gray-500">
                Meanwhile, feel free to check out my GitHub for other interesting work!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
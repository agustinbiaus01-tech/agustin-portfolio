import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-custom">
        <div className="mb-20">
          <p className="uppercase tracking-[0.3em] text-sm text-muted">
            Proyectos
          </p>

          <h2 className="text-6xl font-semibold mt-4">
            Trabajos destacados
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
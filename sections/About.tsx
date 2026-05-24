export default function About() {
  return (
    <section id="about" className="section-spacing">
      <div className="container-custom grid md:grid-cols-2 gap-20">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted mb-6">
            About
          </p>

          <h2 className="text-5xl font-semibold leading-tight">
            Arquitectura contemporánea con enfoque en diseño,
            representación y experiencia espacial.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-neutral-700">
            Estudiante avanzado de arquitectura con experiencia
            en proyectos urbanos, vivienda colectiva,
            documentación técnica y representación visual.
          </p>
        </div>
      </div>
    </section>
  );
}
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative min-h-[520px] flex flex-col overflow-hidden">
      {/* Background: dark purple/blue gradient mimicking the twilight office photo */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-hero-start via-hero-mid to-hero-end"
        aria-hidden="true"
      />

      {/* Subtle building silhouette overlay using a decorative element */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 60% 40% at 70% 100%, rgba(180,120,220,0.3) 0%, transparent 70%),
            radial-gradient(ellipse 40% 30% at 80% 80%, rgba(255,100,150,0.15) 0%, transparent 60%)
          `,
        }}
        aria-hidden="true"
      />

      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center px-8 md:px-14 pt-24 pb-16">
        <div className="max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Simplify Your Finances and Grow Your Business
          </h1>
          <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed max-w-sm">
            We provide customized accounting services for businesses to save
            time, lessen stress, and increase profits.
          </p>
          <a
            href="#contact"
            className="btn-outline-white hover:text-brand-dark"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

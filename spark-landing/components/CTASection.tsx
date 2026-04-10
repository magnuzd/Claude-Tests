export default function CTASection() {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-8 md:px-14">
      <div className="max-w-3xl mx-auto">
        {/* Blue card */}
        <div className="relative bg-[#2B45E8] rounded-2xl px-10 py-16 text-center overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Tailored accounting services designed for businesses to save time,
            reduce stress, and maximize profits.
          </p>
          <a
            href="mailto:sandra@sparkbco.com"
            className="inline-block border border-white text-white text-sm font-semibold tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-[#2B45E8] transition-colors"
          >
            Contact Us
          </a>

          {/* Decorative arc — bottom-right corner */}
          <div
            className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full border-[20px] border-white/10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full border-[16px] border-white/5"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

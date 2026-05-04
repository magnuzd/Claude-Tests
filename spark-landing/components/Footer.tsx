import SparkLogo from "./SparkLogo";

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white px-8 md:px-14 py-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Contact info */}
        <div className="flex gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">
              Phone
            </p>
            <a
              href="tel:5614523416"
              className="text-sm text-white hover:text-white/80 transition-colors"
            >
              (561) 452-3416
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">
              Email
            </p>
            <a
              href="mailto:sandra@sparkbco.com"
              className="text-sm text-white hover:text-white/80 transition-colors"
            >
              sandra@sparkbco.com
            </a>
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2 text-white">
          <SparkLogo />
          <span className="text-lg font-semibold tracking-wide">Spark</span>
        </div>
      </div>
    </footer>
  );
}

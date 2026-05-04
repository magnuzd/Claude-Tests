const reasons = [
  {
    title: "Dedicated to small business success",
    description:
      "We provide expert financial support to help businesses streamline operations and achieve lasting growth.",
  },
  {
    title: "Personalized",
    description:
      "Tailored solutions for your unique business needs, always just a call away.",
  },
  {
    title: "Affordable pricing with no hidden fees",
    description:
      "Transparent rates designed for your business—no surprises, just straightforward savings.",
  },
];

function CircleArrowIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <circle cx="11" cy="11" r="10" stroke="#2B45E8" strokeWidth="1.5" />
      <path
        d="M8 11h6M11 8l3 3-3 3"
        stroke="#2B45E8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function OfficeIllustration() {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Two people working together"
      className="w-full max-w-sm"
    >
      {/* Dotted grid background */}
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={30 + col * 36}
            cy={30 + row * 36}
            r="2"
            fill="#E5E7EB"
          />
        ))
      )}

      {/* Floating geometric blocks */}
      <rect x="220" y="60" width="28" height="28" fill="#6C63FF" rx="2" />
      <rect x="260" y="40" width="18" height="18" fill="#FF6584" rx="2" />
      <rect x="200" y="100" width="14" height="14" fill="#F59E0B" rx="2" />
      <rect x="250" y="90" width="20" height="20" fill="#3B82F6" rx="2" />

      {/* Desk */}
      <rect x="60" y="220" width="220" height="10" rx="3" fill="#374151" />
      <rect x="80" y="228" width="8" height="50" rx="2" fill="#374151" />
      <rect x="250" y="228" width="8" height="50" rx="2" fill="#374151" />

      {/* Laptop on desk */}
      <rect x="110" y="190" width="90" height="32" rx="3" fill="#D1D5DB" />
      <rect x="114" y="193" width="82" height="25" rx="2" fill="#1E3A8A" />
      <rect x="100" y="220" width="110" height="4" rx="2" fill="#9CA3AF" />

      {/* Seated person (left) */}
      {/* Body */}
      <ellipse cx="155" cy="182" rx="18" ry="22" fill="#111827" />
      {/* Head */}
      <circle cx="155" cy="152" r="16" fill="#FBBF24" />
      {/* Hair */}
      <path d="M140 148 Q155 132 170 148" fill="#1F2937" />
      <ellipse cx="155" cy="144" rx="16" ry="8" fill="#1F2937" />
      {/* Ponytail */}
      <path d="M140 148 Q128 155 132 168" stroke="#1F2937" strokeWidth="6" strokeLinecap="round" />
      {/* Arms reaching to laptop */}
      <path d="M140 175 Q120 185 118 200" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />
      <path d="M170 175 Q185 185 190 200" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />
      {/* Chair */}
      <rect x="135" y="202" width="40" height="6" rx="3" fill="#6B7280" />
      <rect x="150" y="207" width="10" height="25" rx="2" fill="#6B7280" />

      {/* Standing person (right) */}
      {/* Body */}
      <ellipse cx="270" cy="180" rx="20" ry="26" fill="#111827" />
      {/* Head */}
      <circle cx="270" cy="148" r="17" fill="#FBBF24" />
      {/* Hair */}
      <ellipse cx="270" cy="138" rx="17" ry="10" fill="#1F2937" />
      {/* Ponytail long */}
      <path d="M253 148 Q240 165 244 188" stroke="#1F2937" strokeWidth="7" strokeLinecap="round" />
      {/* Arm holding phone/tablet */}
      <path d="M255 170 Q238 158 232 148" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />
      {/* Tablet */}
      <rect x="218" y="136" width="18" height="24" rx="3" fill="#3B82F6" />
      <rect x="220" y="138" width="14" height="18" rx="1" fill="#60A5FA" />
      {/* Other arm down */}
      <path d="M285 175 Q298 195 295 215" stroke="#FBBF24" strokeWidth="6" strokeLinecap="round" />
      {/* Legs */}
      <path d="M256 204 Q250 230 248 265" stroke="#111827" strokeWidth="10" strokeLinecap="round" />
      <path d="M284 204 Q290 230 292 265" stroke="#111827" strokeWidth="10" strokeLinecap="round" />
      {/* Shoes */}
      <ellipse cx="246" cy="268" rx="14" ry="6" fill="#1F2937" />
      <ellipse cx="294" cy="268" rx="14" ry="6" fill="#1F2937" />

      {/* Scribble / doodle top left */}
      <path
        d="M50 80 Q60 65 70 80 Q80 95 90 80"
        stroke="#D1D5DB"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M55 60 Q58 50 65 58"
        stroke="#D1D5DB"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-spark" className="bg-white section-pad">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Illustration */}
        <div className="flex justify-center">
          <OfficeIllustration />
        </div>

        {/* Content */}
        <div>
          <h2 className="section-heading mb-8">
            Why choose us?
          </h2>
          <ul className="flex flex-col gap-7">
            {reasons.map((reason) => (
              <li key={reason.title} className="flex gap-4">
                <CircleArrowIcon />
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">
                    {reason.title}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

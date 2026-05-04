const services = [
  {
    icon: (
      // Asterisk / 4-pointed star icon (bookkeeping)
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 6v36M6 24h36" stroke="#2B45E8" strokeWidth="4" strokeLinecap="round" />
        <path d="M10.1 10.1l27.8 27.8M37.9 10.1L10.1 37.9" stroke="#2B45E8" strokeWidth="4" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="#2B45E8" />
      </svg>
    ),
    title: "Bookeeping",
    description: "Accurate and timely financial records for your business",
  },
  {
    icon: (
      // 4-pointed decorative star (business strategy)
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 4C24 4 22 16 14 24C22 32 24 44 24 44C24 44 26 32 34 24C26 16 24 4 24 4Z"
          fill="#2B45E8"
        />
        <path
          d="M4 24C4 24 16 22 24 14C32 22 44 24 44 24C44 24 32 26 24 34C16 26 4 24 4 24Z"
          fill="#2B45E8"
        />
      </svg>
    ),
    title: "Business strategy",
    description: "Strategic guidance for your business growth",
  },
  {
    icon: (
      // Horizontal waves / lines icon (tax planning)
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M6 16 Q14 10 22 16 Q30 22 38 16 Q42 13 44 16"
          stroke="#2B45E8"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M6 24 Q14 18 22 24 Q30 30 38 24 Q42 21 44 24"
          stroke="#2B45E8"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M6 32 Q14 26 22 32 Q30 38 38 32 Q42 29 44 32"
          stroke="#2B45E8"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    title: "Tax planning",
    description: "Maximize deductions and ensure compliance",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 section-pad">
      <h2 className="section-heading mb-12">
        What services do we offer for your business
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white rounded-lg p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-base font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

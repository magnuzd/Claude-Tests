// Bar-chart style Spark logo (3 vertical bars of ascending height)
export default function SparkLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Short bar */}
      <rect x="2" y="16" width="6" height="10" rx="1" />
      {/* Medium bar */}
      <rect x="11" y="10" width="6" height="16" rx="1" />
      {/* Tall bar */}
      <rect x="20" y="4" width="6" height="22" rx="1" />
    </svg>
  );
}

export default function BeatSVG({ width, height, color, className }) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || "32"}
        height={height || "17"}
        viewBox="0 0 32 17"
        fill="none"
      >
        <g clipPath="url(#clip0_1_122)">
          <path
            d="M1 9.28757H8.87673L12.8884 1L19.6818 16L23.5387 9.28757H31"
            //stroke="#1e2939"
            stroke="#1E5DBC"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_122">
            <rect width="32" height="17" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

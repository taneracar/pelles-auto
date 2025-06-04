export default function VectorSVG({ width, height, color, className }) {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || "33"}
        height={height || "24"}
        viewBox="0 0 33 24"
        fill="none"
      >
        <path
          d="M2.4 24H9.6L14.4 14.4V0H0V14.4H7.2L2.4 24ZM21.6 24H28.8L33.6 14.4V0H19.2V14.4H26.4L21.6 24Z"
          fill="#1E5DBC"
        />
      </svg>
    </div>
  );
}

interface TransitionZoneProps {
  direction: "dark-to-light" | "light-to-dark";
}

// 深浅过渡区：渐变 + SVG 波浪分割线
export default function TransitionZone({ direction }: TransitionZoneProps) {
  const bgClass =
    direction === "dark-to-light"
      ? "transition-dark-to-light"
      : "transition-light-to-dark";

  return (
    <div className={`relative h-32 ${bgClass}`}>
      {/* 波浪 SVG 分割线 */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 30 C360 60 720 0 1080 30 C1260 45 1380 15 1440 30 L1440 60 L0 60 Z"
          fill={direction === "dark-to-light" ? "#f8fafc" : "#0f172a"}
          opacity="0.5"
        />
        <path
          d="M0 40 C480 10 960 50 1440 20 L1440 60 L0 60 Z"
          fill={direction === "dark-to-light" ? "#f8fafc" : "#0f172a"}
        />
      </svg>
    </div>
  );
}

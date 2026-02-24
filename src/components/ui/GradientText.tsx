interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "blue";
}

// 可复用的渐变文字组件
export default function GradientText({
  children,
  className = "",
  variant = "default",
}: GradientTextProps) {
  const gradientClass =
    variant === "blue" ? "gradient-text-blue" : "gradient-text";

  return <span className={`${gradientClass} ${className}`}>{children}</span>;
}

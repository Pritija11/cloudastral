type Variant = "indigo" | "blue" | "violet" | "rose" | "orange" | "teal";

export function IconBadge({
  icon: Icon,
  variant = "indigo",
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl badge-${variant} ${className}`}
    >
      <Icon className="h-6 w-6" />
    </span>
  );
}

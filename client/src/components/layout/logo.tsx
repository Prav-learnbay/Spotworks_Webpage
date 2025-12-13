export function SpotWorksLogo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.jpg"
      alt="SpotWorks Logo"
      className={`object-contain ${className || ""}`}
    />
  );
}

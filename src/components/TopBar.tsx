import { Container } from "./Container";

export function TopBar() {
  return (
    <div className="hidden bg-[var(--fg)] text-[var(--bg)] sm:block">
      <Container className="flex items-center justify-between py-2 text-xs">
        <div className="flex items-center gap-5">
          <a href="mailto:hello@cloudastral.ltd" className="opacity-80 transition-opacity hover:opacity-100">
            hello@cloudastral.ltd
          </a>
          <span className="opacity-30">|</span>
          <a href="tel:+9779801234567" className="opacity-80 transition-opacity hover:opacity-100">
            +977 980-1234567
          </a>
        </div>
        <span className="opacity-60">Kathmandu, Nepal</span>
      </Container>
    </div>
  );
}

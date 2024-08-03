export default function Footer() {
  return (
    <footer className="sticky bottom-0 text-end small text-muted py-1 container">
      &copy;{new Date().getFullYear()} AI Academy, content provided by{" "}
      <a href="https://tsoai.com">TSOAI</a>
    </footer>
  );
}

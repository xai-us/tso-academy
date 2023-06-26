export default function DynamicContainer({ children }) {
  const isPrintMode = window.matchMedia("print").matches;
  return (
    <div className={`container${isPrintMode ? "-print" : ""}`}>{children}</div>
  );
}

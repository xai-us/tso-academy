export default function DynamicContainer({ children }) {
  const isPrintMode = window.matchMedia("print").matches;
  return isPrintMode ? (
    <div className="container-print">{children}</div>
  ) : (
    <>{children}</>
  );
}

export function getHumanReadableNumber(
  number,
  option = { locale: "en-US", compactDisplay: "short", notation: "compact" }
) {
  const { locale, compactDisplay, notation } = option;
  const result = Intl.NumberFormat(locale, {
    notation,
    compactDisplay,
  }).format(number);
  return result === "NaN" ? "" : result;
}

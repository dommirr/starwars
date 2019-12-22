export const isScrollEnd = (element) => {
  const a = element.scrollHeight;
  const b = element.scrollTop;
  const c = element.clientHeight;
  const d = a - b - c;
  return d < 50;
}
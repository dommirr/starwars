export const isScrollEnd = (element) => {
  const { scrollHeight, scrollTop, clientHeight } = element;
  const result = scrollHeight - scrollTop - clientHeight;
  return result < 50;
}
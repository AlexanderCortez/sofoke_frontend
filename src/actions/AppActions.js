export const goTo = (history, path) => {
  if (history) {
    history.push(path);
  }
}
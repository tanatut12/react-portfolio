export const getImageUrl = (path) => {
  // If path is already a full URL, return it as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return new URL(`/assets/${path}`, import.meta.url).href;
};

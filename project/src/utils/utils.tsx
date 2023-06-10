export const timeToStr = (time: number): string => {
  const hours = Math.round(time / 60);
  const minutes = time % 60;
  return `${hours}h ${minutes}m`;
};
export const getRating = (rating: number) => {
  if (rating < 3) {
    return 'Bad';
  }
  if (rating < 5) {
    return 'Normal';
  }
  if (rating < 8) {
    return 'Good';
  }
  if (rating < 10) {
    return 'Very good';
  }
  return 'Awesome';
};

export const getDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.toLocaleString('en-US', {month: 'long'})} ${date.getDate()}, ${date.getFullYear()}`;
};

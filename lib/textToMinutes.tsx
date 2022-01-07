const textToMinutes = (length: number): string => {
  const minutes = Math.round(length / 7);

  return `You can read this in ${minutes} minutes.`;
};

export default textToMinutes;

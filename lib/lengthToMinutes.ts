const lengthToMinutes = (length: number): string => {
  const minutes = Math.round(250 / length);

  return `You can read this in ${minutes} minute${minutes === 0 ? "" : "s"}`;
};

export default lengthToMinutes;

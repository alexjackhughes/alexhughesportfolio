const lengthToMinutes = (length: number): string => {
  const minutes = Math.round(length / 250);

  return `${minutes} minute${minutes === 0 ? "" : "s"}`;
};

export default lengthToMinutes;

export const calculateAverage = (numbers: number[]): number | null =>
  numbers.length > 0
    ? parseFloat((numbers.reduce((acc, num) => acc + num, 0) / numbers.length).toFixed(1))
    : null;

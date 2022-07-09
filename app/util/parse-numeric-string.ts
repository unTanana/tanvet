export const parseFloatString = (str: string): number => {
  const parsed = parseFloat(str);
  if (isNaN(parsed)) {
    throw new Error(`String ${str} is not a float`);
  }
  return parsed;
};

export const parseIntString = (str: string): number => {
  const parsed = parseInt(str);
  if (isNaN(parsed)) {
    throw new Error(`String ${str} is not an integer`);
  }
  return parsed;
};

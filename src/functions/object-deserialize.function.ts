export const objectDeserialize = (
  value: string | null
): Object | undefined | null => {
  try {
    if (value) return JSON.parse(value);
  } catch (e) {
    if (e) {
      return value;
    }
  }
};

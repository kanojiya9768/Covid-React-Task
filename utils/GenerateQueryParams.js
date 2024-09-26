export const generateQueryParams = (obj = {}) => {
  Object.keys(obj).forEach((key) => {
    if ([null, undefined, ""].includes(obj[key])) {
      delete obj[key];
    }
  });
  return new URLSearchParams(obj).toString();
};

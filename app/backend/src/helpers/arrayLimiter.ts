export default (array: Array<any>, limit: number) => array.reduce((acc, item, i) => {
  if (i < limit) {
    return [...acc, item];
  }
  return acc;
}, []);

export const getArrayOfFields = (array: any, field: string) => {
  array = array.map((x: any) => x[field]);
  array = new Set(array);
  array = [...array];
  return array;
};

export const deleteDuplicated = (array: string[]) => {
  return array.filter((item, index) => array.indexOf(item) === index);
};

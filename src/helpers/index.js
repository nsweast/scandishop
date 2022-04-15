export const formatTitle = (title, length) => {
  return title
    .split(' ')
    .map(
      (word) =>
        word.toUpperCase().slice(0, 1) +
        word.toLowerCase().slice(1, word.length)
    )
    .slice(0, length)
    .join(' ');
};

export const checkInCart = (array, objectId) => {
  return array.findIndex((item) => item.id === objectId) >= 0;
};

export const isAttributeSelected = (array, id, name) => {
  const attribute = array
    .find((product) => id === product.id)
    .selectedAttributes.find((attribute) => name in attribute);

  if (!!attribute) {
    return attribute[name];
  }
};

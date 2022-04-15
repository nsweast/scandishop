export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const fetchItemInfo = () => {
  return fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((result) => {
      return result.map((item) => ({
        ...item,
        price: randomNumber(50, 100),
        availableSizes: ['S', 'L', 'XL'],
        description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
      voluptas accusantium officiis, porro ab itaque.`,
      }));
    });
};

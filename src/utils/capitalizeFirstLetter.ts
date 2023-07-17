const capitalizeFirstLetter = (letter: string) => {
  return letter.replace(/^./, letter[0].toUpperCase());
};

export default capitalizeFirstLetter;

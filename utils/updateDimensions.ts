const updateDimensions = () => {
  let width: number;
  let height: number;

  switch (true) {
    case window.innerWidth >= 1280:
      width = 700;
      height = 700;
      break;
    case window.innerWidth >= 768:
      width = 500;
      height = 500;
      break;
    default:
      width = 250;
      height = 250;
      break;
  }

  return { width, height };
};

export default updateDimensions;

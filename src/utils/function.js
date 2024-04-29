const setCategory = value => {
  switch (value) {
    case 0:
      return 'Software';

      break;
    case 1:
      return 'Design';

      break;
    case 2:
      return 'Operation';

      break;
    default:
      return '';
      break;
  }
};

export {setCategory};

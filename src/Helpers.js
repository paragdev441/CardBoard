const getLocalStorage = (type, name, value = null) => {
  if (type === 'set') {
    localStorage.setItem(name, convert('stringify', value));
    return convert('parse', localStorage.getItem(name));
  } else {
    return convert('parse', localStorage.getItem(name));
  }
};

const convert = (type, item) => {
  return type === 'parse' ? JSON.parse(item) : JSON.stringify(item);
};

export { getLocalStorage, convert };

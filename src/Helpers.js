/**
 * Function for setting new data in local-storage &
 * getting that data from local storage or
 * just getting required data from local-storage
 * @param {string} type
 * @param {string} name
 * @param {string} value
 * @returns object
 */
const getLocalStorage = (type, name, value = null) => {
  if (type === 'set') {
    localStorage.setItem(name, convert('stringify', value));
    return convert('parse', localStorage.getItem(name));
  } else {
    return convert('parse', localStorage.getItem(name));
  }
};

/**
 * Function for converting JSON/object data to object/JSON data.
 * @param {string} type
 * @param {string | object} item
 * @returns
 */
const convert = (type, item) => {
  return type === 'parse' ? JSON.parse(item) : JSON.stringify(item);
};

export { getLocalStorage, convert };

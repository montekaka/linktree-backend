const removeUndefined = (data) => {
  const keys = Object.keys(data);
  const result = {};
  for(let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if(data[key] !== undefined) {
      result[key] = data[key];
    }
  }

  return result;
}

module.exports = {
  removeUndefined
}
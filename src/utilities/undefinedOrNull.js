const undefinedOrNull = (variable = null) => {
  if (variable === null || variable === 'Undefined') {
    return true;
  }
  return false;
};

export default undefinedOrNull;

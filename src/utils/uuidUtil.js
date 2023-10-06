const uuid = require('uuid');

const generateUuid = () => {
  return uuid.v4();
};

module.exports = {
  generateUuid,
};
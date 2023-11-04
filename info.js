module.exports.about = () => {
  return 'This app C who is using app A and B functions';
};

module.exports.version = () => {
  return require('./version').version;
};

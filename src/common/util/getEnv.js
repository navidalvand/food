function getEnv(key) {
  if (typeof key !== "string") return false;
  return process.env[key.toUpperCase()];
}

module.exports = {
  getEnv,
};

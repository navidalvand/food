function getEnv(key) {
  if (typeof key !== "string") return false;
  const env = process.env[key.toUpperCase()];
  if (!env) console.log(`env not found key: ${key}`);
  return env;
}

module.exports = {
  getEnv,
};

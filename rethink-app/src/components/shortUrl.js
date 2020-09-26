const shortId = require("shortid");

export function getShort() {
  return shortId.generate();
}

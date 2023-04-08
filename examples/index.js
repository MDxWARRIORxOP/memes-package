const { default: getMeme } = require("memes-api");

(async () => {
  console.time("test");
  await getMeme({ sfw: true });
  console.timeEnd("test");
})();

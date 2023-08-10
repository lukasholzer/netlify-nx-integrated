module.exports = {
  onPreDev: (...args) => {
    console.log('>> onPreDev');
  },
  onPreBuild: async ({ constants }) => {
    console.log(`>> onPreBuild`, { constants });
  },
  onPostBuild: async ({ utils }) => {
    console.log(`>> onPostBuild`);
  },
};

const LeoCoin = artifacts.require("LeoCoin");

module.exports = function (deployer) {
  deployer.deploy(LeoCoin, 1000000);
};

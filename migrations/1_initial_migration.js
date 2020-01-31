const Migrations = artifacts.require("Migrations");
const Ownerap = artifacts.require("Ownerap");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Ownerap);
};

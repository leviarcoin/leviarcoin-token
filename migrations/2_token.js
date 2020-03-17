const SafeMath = artifacts.require("SafeMath");
const Address = artifacts.require("Address");

const IToken = artifacts.require("IToken");
const ToeknReceiver = artifacts.require("TokenReceiver");
const Token = artifacts.require("XlpToken");

module.exports = function (deployer) {
    deployer.deploy(SafeMath, {overwrite: false});
    deployer.deploy(Address, {overwrite: false});
    deployer.link(SafeMath, Token);
    deployer.link(Address, Token);

    return deployer.deploy(Token);
};
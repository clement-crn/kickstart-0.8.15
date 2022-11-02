/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts

module.exports = {
    solidity: "0.8.15",
    networks: {
        goerli: {
            url: `https://eth-goerli.alchemyapi.io/v2/${"qGmw-hvk43xBZTsXQB4HFMLF8F21vdmf"}`,
            accounts: [
                "48d545c41fe22dace929726a658a72dfa1f88d7691c2f652faa3125d91b0b694",
            ],
        },
    },
};

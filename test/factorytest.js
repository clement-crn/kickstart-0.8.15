const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("Factory", function () {
    it("Devrait déployer un nouveau contrat campagne", async function () {
        const [owner] = await ethers.getSigners();

        const Factory_contract = await hre.ethers.getContractFactory("Factory");
        const factory_contract = await Factory_contract.deploy();

        await factory_contract.createCampaign(0);
        campaigns = await factory_contract.getCampaigns();

        expect(await factory_contract.getCampaigns).to.equal(campaigns[0]);
    });
});

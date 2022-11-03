const { expect } = require("chai");

describe("Factory contract", function () {
    it("devrait créer une instance", async function () {
        const [owner] = await ethers.getSigners();

        const Factory = await ethers.getContractFactory("Factory");

        const instanceOfFactory = await Factory.deploy();

        await instanceOfFactory.createCampaign(0);

        var myReturn = [];
        myReturn = await instanceOfFactory.getCampaigns();

        //c'est quoi ce bordel
        expect(await instanceOfFactory.getCampaigns()).to.equal(myReturn[0]);
    });
});

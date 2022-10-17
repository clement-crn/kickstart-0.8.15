async function main() {
    const hre = require("hardhat");
    const Factory_contract = await hre.ethers.getContractFactory("Factory");
    const factory_contract = await Factory_contract.deploy();

    await factory_contract.deployed();

    //à verifier

    const factory_contract_address = factory_contract.address;

    console.log(
        "contrat factory déployé avec l'adresse:",
        factory_contract_address
    );
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

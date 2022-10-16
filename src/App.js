import logo from "./logo.svg";
import "./App.css";
import { CampaignAbi, FactoryAbi } from "./abis";
import factory_contract_address from "./scripts/deploy";

async function App() {
    var ethers = require("ethers");
    var url = "https://mainnet.infura.io/v3/8c72e5a5391e442ca0bf5acfc037ce60";
    var customHttpProvider = new ethers.providers.JsonRpcProvider(url);
    customHttpProvider.getBlockNumber().then((result) => {
        console.log("Current block number: " + result);
        console.log(customHttpProvider.address);
    });
    //const provider = await detectEthereumProvider();
    const signer = customHttpProvider.getSigner();

    //fait une nouvelle instance du contrat factory
    const factory = new ethers.Contract(
        factory_contract_address,
        FactoryAbi,
        signer
    );
    await factory.createCampaign(0);
    const campaignCounter = await factory.campaignCounter();
    const campaignAddress = await factory.campaigns(campaignCounter);

    const newCampaign = new ethers.Contract(
        factory_contract_address,
        CampaignAbi,
        signer
    );
    const campaign_adress = newCampaign.address;
    console.log("addresse de la nouvelle campagne:", campaign_adress);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

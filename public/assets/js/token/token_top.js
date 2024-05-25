const networkNames = {
  1: 'Ethereum Mainnet',
  3: 'Ropsten Testnet',
  4: 'Rinkeby Testnet',
  5: 'Goerli Testnet',
  8453: 'Base Mainnet',
  84531: 'Base Goerli Testnet',
  84532:'Base Sepolia Testnet',
  59144:'linea',
  59140:'Linea Goerli',
  59141:'Linea Sepolia',
  23888:'Blast Testnet',
  238:'Blast Mainnet',
  168587773:'Blast Sepolia Testnet',
  324:'zkSync Mainnet',
  300:'zkSync Sepolia Testnet',
  42: 'Kovan Testnet',
  56: 'Binance Smart Chain Mainnet',
  97: 'Binance Smart Chain Testnet',
  100: 'xDai Chain',
  128: 'Huobi ECO Chain Mainnet',
  137: 'Polygon Mainnet',
  250: 'Fantom Opera',
  256: 'Huobi ECO Chain Testnet',
  288: 'Boba Network Mainnet',
  321: 'KCC Mainnet',
  336: 'Shiden Network',
  416: 'SX Network Mainnet',
  1088: 'Metis Andromeda Mainnet',
  122: 'Fuse Mainnet',
  123: 'Fuse Spark Testnet',
  2001: 'Milkomeda C1 Mainnet',
  2020: 'Ronin Mainnet',
  2021: 'Ronin Testnet',
  2221: 'Kava Testnet',
  2500: 'KardiaChain Mainnet',
  3333: 'Web3Games Devnet',
  4689: 'IoTeX Mainnet',
  4690: 'IoTeX Testnet',
  7000: 'Octopus Network',
  8217: 'Klaytn Mainnet',
  10001: 'EtherLite Chain',
  1313161554: 'Aurora Mainnet',
  1313161555: 'Aurora Testnet',
  1313161556: 'Aurora Betanet',
  1666600000: 'Harmony Mainnet',
  1666700000: 'Harmony Testnet',
  11297108109: 'Palm Mainnet',
  11297108099: 'Palm Testnet',
  42161: 'Arbitrum One',
  421611: 'Arbitrum Rinkeby Testnet',
  421613: 'Arbitrum Goerli Testnet',
  42170: 'Arbitrum Nova',
  42220: 'Celo Mainnet',
  44787: 'Celo Alfajores Testnet',
  62320: 'Celo Baklava Testnet',
  80001: 'Polygon Mumbai Testnet',
  43114: 'Avalanche Mainnet',
  43113: 'Avalanche Fuji Testnet',
  10: 'Optimism Mainnet',
  69: 'Optimism Kovan Testnet',
  420: 'Optimism Goerli Testnet',
  1313161554: 'Aurora Mainnet',
  1313161555: 'Aurora Testnet',
  1313161556: 'Aurora Betanet',
  4689: 'IoTeX Mainnet',
  4690: 'IoTeX Testnet',
  100: 'xDai Chain',
  1666600000: 'Harmony Mainnet',
  1666700000: 'Harmony Testnet',
  1285: 'Moonriver Mainnet',
  1287: 'Moonbase Alpha Testnet',
  30: 'RSK Mainnet',
  31: 'RSK Testnet',
  106: 'Velas Mainnet',
  1230: 'Ultron Mainnet',
  88: 'TomoChain Mainnet',
  89: 'TomoChain Testnet',
  1284: 'Moonbeam Mainnet',
  1285: 'Moonriver Mainnet',
  1287: 'Moonbase Alpha Testnet',
  66: 'OKExChain Mainnet',
  65: 'OKExChain Testnet',
  86: 'GateChain Mainnet',
  85: 'GateChain Testnet',
  50: 'XinFin XDC Network Mainnet',
  51: 'XinFin Apothem Testnet',
  111: 'Factory Mainnet',
  112: 'Factory Testnet',
  70: 'Hoo Smart Chain Mainnet',
  71: 'Hoo Smart Chain Testnet',
  888: 'Wanchain Mainnet',
  999: 'Wanchain Testnet',
  59: 'Oasis Mainnet',
  60: 'Oasis Testnet',
  61: 'Ethereum Classic Mainnet',
  62: 'Ethereum Classic Testnet Morden',
  63: 'Ethereum Classic Testnet Mordor',
  2001: 'Milkomeda C1 Mainnet',
  1313161554: 'Aurora Mainnet',
  1313161555: 'Aurora Testnet',
  1313161556: 'Aurora Betanet',
  4689: 'IoTeX Mainnet',
  4690: 'IoTeX Testnet',
  100: 'xDai Chain',
  1666600000: 'Harmony Mainnet',
  1666700000: 'Harmony Testnet',
  106: 'Velas Mainnet',
  1230: 'Ultron Mainnet',
  88: 'TomoChain Mainnet',
  89: 'TomoChain Testnet',
  1284: 'Moonbeam Mainnet',
  1285: 'Moonriver Mainnet',
  1287: 'Moonbase Alpha Testnet',
  66: 'OKExChain Mainnet',
  65: 'OKExChain Testnet',
  86: 'GateChain Mainnet',
  85: 'GateChain Testnet',
  50: 'XinFin XDC Network Mainnet',
  51: 'XinFin Apothem Testnet',
  111: 'Factory Mainnet',
  112: 'Factory Testnet',
  70: 'Hoo Smart Chain Mainnet',
  71: 'Hoo Smart Chain Testnet',
  888: 'Wanchain Mainnet',
  999: 'Wanchain Testnet',
  59: 'Oasis Mainnet',
  60: 'Oasis Testnet',
  61: 'Ethereum Classic Mainnet',
  62: 'Ethereum Classic Testnet Morden',
  63: 'Ethereum Classic Testnet Mordor',
  2001: 'Milkomeda C1 Mainnet',
  11297108109: 'Palm Mainnet',
  11297108099: 'Palm Testnet',
  1101: 'Polygon zkEVM Mainnet',
  1442: 'Polygon zkEVM Testnet',
  40: 'Telos Mainnet',
  41: 'Telos Testnet',
  30: 'RSK Mainnet',
  31: 'RSK Testnet',
  8888: 'Pirl Network',
};

// enable window.ethereum
async function enable_window(){
    async function enableEthereum() {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        alert('please connect the metamask');
        console.error('Error enabling Ethereum:', error);
      }
    }
    enableEthereum();
}

// start time
async function start_time() {
  function displayTime() {
    const now = new Date();
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);

    const timeZoneOptions = { timeZoneName: 'long' };
    const dateTimeFormat = new Intl.DateTimeFormat('en-US', timeZoneOptions);
    const [{ value: timeZoneName }] = dateTimeFormat
      .formatToParts(now)
      .filter((part) => part.type === 'timeZoneName');

    document.querySelector('#time_zone_time').innerHTML = timeString;
    document.querySelector('#time_zone_name').innerHTML = timeZoneName;
  }
  setInterval(() => displayTime(), 1000);
  displayTime();
}

// block details
async function get_block() {
  let pre_block_time;
  let latest_block_time;

  let pre_block;
  let latest_block;

  async function getLatestBlockNumber() {
    try {
      const latestBlockNumberHex = await window.ethereum.request({
        method: 'eth_blockNumber',
      });
      const latestBlockNumber = parseInt(latestBlockNumberHex, 16);

      pre_block_time = latest_block_time;
      latest_block_time = await getBlockTimestamp(latestBlockNumberHex);
      set_block_time_distance(pre_block_time, latest_block_time);

      return latestBlockNumber;
    } catch (error) {
      console.error('Error getting latest block number:', error);
      return null;
    }
  }

  async function set_block_time_distance(pre, latest) {
    let dis = Math.floor((new Date(latest) - new Date(pre)) / 1000);
    let final_dis = Math.floor(dis / (latest_block - pre_block));
    if (dis > 0) {
      document.querySelector(
        '#blockDistance',
      ).innerHTML = `Block Distance: ${final_dis} Sec`;
    }
  }

  async function getBlockTimestamp(blockNumber) {
    try {
      const block = await window.ethereum.request({
        method: 'eth_getBlockByNumber',
        params: [blockNumber, false],
      });

      if (block && block.timestamp) {
        let time_stamp = new Date(
          parseInt(block.timestamp, 16) * 1000,
        ).toUTCString();
        return time_stamp;
      } else {
        console.error('Block information not found or timestamp missing.');
        return null;
      }
    } catch (error) {
      console.error('Error getting block timestamp:', error);
      return null;
    }
  }

  async function updateBlockInformation() {
    try {
      const latestBlockNumber = await getLatestBlockNumber();

      pre_block = latest_block;
      latest_block = latestBlockNumber;

      if (pre_block > 0) {
        set_block_time_distance(pre_block_time, latest_block_time);
      }

      document.getElementById('latestBlockNumber').innerHTML =
        latestBlockNumber;
    } catch (error) {
      console.error('Error updating block information:', error);
    }
  }

  updateBlockInformation();

  setInterval(() => {
    updateBlockInformation();
  }, 1000);
}

async function get_gas_price() {
  async function get_gas_in_gwei() {
    const gasPrice = await window.ethereum.request({ method: 'eth_gasPrice' });
    const gasPriceInGwei = Math.floor(parseInt(gasPrice, 16) / 1e9);
    document.querySelector(
      '#gas_price_div',
    ).innerHTML = `${gasPriceInGwei} GWEI`;

    let gas_in_usdt = (gasPriceInGwei * 21000 * 0.0000045).toFixed(3);
    document.querySelector(
      '#trans_cost_usdt_gas',
    ).innerHTML = `Transctions Cost: ${gas_in_usdt} USDT`;
  }

  setInterval(() => {
    get_gas_in_gwei();
  }, 1000);
}

async function chain_action() {

  let network_logo_img = document.querySelector('#network_logo_img');
  let network_desc = document.querySelector('#network_message');
  let network_name_b = document.querySelector('#network_namb_b');

  async function get_cain_id(){
    const chainId = await window.ethereum.request({ method: 'eth_chainId' });

    const chainIdDecimal = parseInt(chainId, 16);
    console.log(chainIdDecimal);

    const networkName = networkNames[chainIdDecimal] || chainId;
    network_name_b.innerHTML = networkName;
    if (!networkNames[chainIdDecimal]){
      network_logo_img.style.display = 'none';
      network_desc.innerHTML = `Make sure you've chosen the right network on your MetaMask before you continue`;
    }else{
      network_desc.innerHTML = "";
      network_logo_img.style.display = 'block';
      network_logo_img.src = 'assets/images/network/ethereum-eth-logo-diamond-purple.svg';
    }
  }

  setInterval(() => {
    get_cain_id();
  }, 1000);

}

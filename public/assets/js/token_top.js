// start time
async function start_time(){
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
async function get_block(){

  let pre_block_time;
  let latest_block_time;

  let pre_block;
  let latest_block;
 
   async function enableEthereum() {
     try {
       await window.ethereum.request({ method: 'eth_requestAccounts' });
     } catch (error) {
       console.error('Error enabling Ethereum:', error);
     }
   }

   async function getLatestBlockNumber() {
     try {
       const latestBlockNumberHex = await window.ethereum.request({ method: 'eth_blockNumber' });
       const latestBlockNumber = parseInt(latestBlockNumberHex, 16);

       pre_block_time = latest_block_time;
       latest_block_time = await getBlockTimestamp(latestBlockNumberHex);
       set_block_time_distance(pre_block_time,latest_block_time);

       return latestBlockNumber;
     } catch (error) {
       console.error('Error getting latest block number:', error);
       return null;
     }
   }

   async function set_block_time_distance(pre,latest){
     let dis = Math.floor((new Date(latest) - new Date(pre)) / 1000);
     let final_dis = Math.floor(dis / (latest_block - pre_block));
     if(dis > 0 ){
      document.querySelector('#blockDistance').innerHTML = `Block Distance: ${final_dis} Sec`;
     }
   }

   async function getBlockTimestamp(blockNumber) {
     try {
       const block = await window.ethereum.request({
         method: 'eth_getBlockByNumber',
         params: [blockNumber, false],
       });

       if (block && block.timestamp) {
          let time_stamp=  new Date(parseInt(block.timestamp, 16) * 1000).toUTCString();
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

       if(pre_block > 0){
        set_block_time_distance(pre_block_time,latest_block_time);
       }

       document.getElementById('latestBlockNumber').innerHTML = latestBlockNumber;
     } catch (error) {
       console.error('Error updating block information:', error);
     }
   }

  enableEthereum().then(() => {
    updateBlockInformation();
  });

  setInterval(() => {
    updateBlockInformation();
  }, 1000);

}

async function get_gas_price(){
  
  async function get_gas_in_gwei(){
    const gasPrice = await window.ethereum.request({ method: 'eth_gasPrice' });
    const gasPriceInGwei = Math.floor(parseInt(gasPrice, 16) / 1e9);
    document.querySelector('#gas_price_div',).innerHTML = `${gasPriceInGwei} GWEI`;

    let gas_in_usdt = (gasPriceInGwei * 21000 * 0.0000045).toFixed(3);
    document.querySelector('#trans_cost_usdt_gas',).innerHTML = `Transctions Cost: ${gas_in_usdt} USDT`;
  }

  setInterval(() => {
    get_gas_in_gwei();
  }, 1000);
}

async function chain_action(){
  
}
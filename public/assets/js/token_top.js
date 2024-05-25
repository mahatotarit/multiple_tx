// start time
function start_time(){
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
function get_block(){

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
       pre_block = latest_block;
       latest_block = latestBlockNumberHex;
       getBlockTimestamp(latestBlockNumberHex);
       return latestBlockNumber;
     } catch (error) {
       console.error('Error getting latest block number:', error);
       return null;
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

   async function calculate_block_distance_time(){
       let time_1 =  await getBlockTimestamp(pre_block);
       let time_2 =  await getBlockTimestamp(latest_block);

       let distance = time_1 - time_2;
       console.log(time_1,time_2);
   }

   async function updateBlockInformation() {
     try {
       const latestBlockNumber = await getLatestBlockNumber();

       document.getElementById('latestBlockNumber').innerHTML = latestBlockNumber;
       calculate_block_distance_time();
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

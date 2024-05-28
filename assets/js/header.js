let metamask_connect_request_interval = 30000;
async function connectWallet() {
  
  let connect_btn = document.querySelector('#wallet_connect_button');
  if (window.ethereum) {
    try {

      const accounts = await window.ethereum.request({method: 'eth_requestAccounts',});
      const account = accounts[0];
      let firstFour = account.slice(0, 4);
      let lastFour = account.slice(-4);
      let final_cuting_address = firstFour +"..."+ lastFour;

      connect_btn.innerHTML = final_cuting_address;
      return account;
    } catch (error) {
      connect_btn.innerHTML = "Connect";
      alert('please connect metamask wallet');
      return null;
    }
  } else {
    connect_btn.innerHTML = "Connect";
    alert('No Ethereum provider found. Please install MetaMask wallet.');
    return null;
  }

}


setInterval(() => {
  connectWallet();
}, metamask_connect_request_interval);

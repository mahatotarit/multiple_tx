let metamask_connect_request_interval = 30000;
async function connectWallet() {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const account = accounts[0];
      return account;
    } catch (error) {
      alert('please connect metamask wallet');
      return null;
    }
  } else {
    alert('No Ethereum provider found. Please install MetaMask wallet.');
    return null;
  }
}

as

setInterval(() => {
  connectWallet();
}, metamask_connect_request_interval);

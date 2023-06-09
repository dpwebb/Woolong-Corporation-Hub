const tokenAddress = "0xa49d72c0e11c7e7f1cf32b1eb0c9d3464a0a529a";
const tokenSymbol = "WLNG";
const tokenDecimals = 8;
const tokenImage = "https://pnrplatform.woolongs.com/wp-content/uploads/2023/06/SPIKE-WOOLONG-SIDE-2-BLANK-BACKGROUND.png";
const bscChainId = '0x38'; // This is the Chain ID for BSC Mainnet

async function addTokenFunction() {
  try {
    const currentChainId = await ethereum.request({ method: 'eth_chainId' });

    if(currentChainId !== bscChainId) {
      try {
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: bscChainId,
            chainName: 'Binance Smart Chain',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18,
            },
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            blockExplorerUrls: ['https://bscscan.com/'],
          }]
        });
      } catch (addError) {
        console.error(addError);
        return;
      }
    }

    const wasAdded = await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          image: tokenImage
        }}      
      });
  
      if (wasAdded) {
        console.log("Woolong Coin was added. Thanks for your interest!");
      } else {
        console.log("Woolong Coin has not been added");
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  document.getElementById('add-woolong').addEventListener('click', addTokenFunction);
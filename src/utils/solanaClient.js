const solanaWeb3 = require('@solana/web3.js');

const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'));

async function sendTransaction(tx, route) {
    // Mock sending transaction via Solana
    console.log(`Sending ${tx.amount} SOL to ${tx.to} via ${route.path}...`);
    // Real implementation would create a Transaction, sign and send
}

module.exports = { sendTransaction };

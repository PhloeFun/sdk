const { getRoute } = require('./routing');
const { sendTransaction } = require('./utils/solanaClient');

function startRelay() {
    console.log("Relay node running... Listening for transactions.");

    // Example: mock incoming transaction
    setInterval(async () => {
        const tx = { to: "TARGET_ADDRESS", amount: 1.23, private: true };
        const route = getRoute(tx.to);
        console.log(`Routing transaction via: ${route.path}`);

        await sendTransaction(tx, route);
        console.log("Transaction relayed successfully ✅");
    }, 5000);
}

module.exports = { startRelay };

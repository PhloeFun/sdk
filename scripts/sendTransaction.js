const { sendTransaction } = require('../src/utils/solanaClient');
const { getRoute } = require('../src/routing');

const args = process.argv.slice(2);
const to = args[0];
const amount = parseFloat(args[1]);

if (!to || !amount) {
    console.error("Usage: node sendTransaction.js <TO_ADDRESS> <AMOUNT>");
    process.exit(1);
}

const route = getRoute(to);
sendTransaction({ to, amount, private: true }, route).then(() => {
    console.log("✅ Transaction sent via Phloe!");
});

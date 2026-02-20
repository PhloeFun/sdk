function calculateFee(tx, route) {
    // Adaptive fee based on route or network load
    const baseFee = 0.00001;
    const multiplier = route.path === "validator3" ? 1.5 : 1.0;
    return tx.amount * baseFee * multiplier;
}

module.exports = { calculateFee };

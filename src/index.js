const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let ETH_BALANCE = 200;
let USDC_BALANCE = 70000;

app.post("/add-liquidity", (req, res) => {

}); 

app.post("/buy-asset", (req, res) => {
    const quantity = req.body.quantity;
    const updatedEthQuantity = ETH_BALANCE - quantity; 
    const updatedUsdcBalance = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity;
    const paidAmount = updatedUsdcBalance - USDC_BALANCE;

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;

    res.json({
        message: `You paid ${paidAmount} USDC to buy ${quantity} ETH`
    });
});

app.post("/sell-asset", (req, res) => {
    const quantity = req.body.quantity;
    const updatedEthQuantity = ETH_BALANCE + quantity;
    const updatedUsdcBalance = ETH_BALANCE * USDC_BALANCE / updatedEthQuantity; 
    const gottenUsdc = USDC_BALANCE - updatedUsdcBalance; 

    ETH_BALANCE = updatedEthQuantity;
    USDC_BALANCE = updatedUsdcBalance;

    res.json({
        message: `You got ${gottenUsdc} USDC for ${quantity} ETH`
    });
});

app.post("/quote", (req, res) => {
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
module.exports = app;
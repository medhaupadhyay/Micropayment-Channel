const web3 = new Web3(window.ethereum);

let accounts;
ethereum.request({method: 'eth_requestAccounts'})
.then(_accounts => {
    accounts = _accounts;
    console.log('Accounts:', accounts);
})
.catch(error => {
    console.error('Error:', error);
});

function constructPaymentMessage(contractAddress, amount) {
    return web3.utils.soliditySha3(
        {type: 'address', value: contractAddress},
        {type: 'uint256', value: amount},
    );
}

function signMessage(message, callback) {
    web3.eth.personal.sign(message, web3.eth.defaultAccount, callback);
}

function signPayment(contractAddress, amount, callback) {
    var message = constructPaymentMessage(contractAddress, amount);
    signMessage(message, callback);
}

let contractAddress = '0x6470c70FE81fb7EeeE53085C50b42Fb70e91D2e0';

signPayment(
    contractAddress,
    1,
    function(error, signature) {
        console.log("Contract: ", contractAddress);

        if(error) {
            console.error(error);
        }
        else {
            console.log("Signature: ", signature);
        }
    }
);
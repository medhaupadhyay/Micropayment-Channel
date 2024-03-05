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

// sign payment
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

let contractAddress = "0x0b2886fbb46fa1ba192356a99c403b41d01975be";

signPayment(
    contractAddress,
    1,
    function(error, signature) {
        console.log("Contract: ", contractAddress);

        if (error) {
            console.error(error);
        } else {
            console.log("Signature: ", signature);
        }
    }
);


// verify signature (need to update)
function prefixed(hash) {
    return ethereumjs.ABI.soliditySHA3(
        ["string", "bytes32"],
        ["\x19Ethereum Signed Message:\n32", hash]
    );
}

function recoverSigner(message, signature) {
    var split = ethereumjs.Util.fromRpcSig(signature);
    var publicKey = ethereumjs.Util.ecrecover(message, split.v, split.r, split.s);
    var signer = ethereumjs.Util.pubToAddress(publicKey).toString("hex");
    return signer;
}

function isValidSignature(contractAddress, amount, signature, expectedSigner) {
    var message = prefixed(constructPaymentMessage(contractAddress, amount));
    var signer = recoverSigner(message, signature);
    return signer.toLowerCase() ==
        ethereumjs.Util.stripHexPrefix(expectedSigner).toLowerCase();
}
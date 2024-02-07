# Micropayment-Channel
Micropayment Channel Capstone Project <br>
Template Code taken from https://docs.soliditylang.org/en/latest/solidity-by-example.html#micropayment-channel

# Using Our Micropayment Channel
*Creating a New Channel* <br>
Launch the index.html locally on your computer <br>
Connect your MetaMask account <br>
Click "Create New Contract" <br>
Enter your MetaMask address as the "Sender Address" <br>
Enter the "Receiver Address"; this is the person you will be sending Ethereum to <br>
Click "Deploy Contract" <br>
Check your MetaMask account and click on the transaction that just occured <br>
Click "View on Etherscan" and copy the contract address; keep this for your records <br>
<br>
*Logging Payments on an Existing Channel* <br>
Go back to the local site and click on "Log Continuing Payments with an Existing Contract" <br>
Input the contract address when prompted <br>
Input the amount of Ethereum you would like to send to the receiver <br>
Click "Done" <br>
<br>
*Closing a Channel*<br>
Note: this action is irreversible <br>
Go to the local site and click "Claim Payment/ Close Channel" <br>
Enter the contract address when prompted <br>
Click "Close Channel" <br>
The receiver should receive the Ethereum once the transaction goes through <br>


# Deploying the Smart Contract
Go to this link: https://docs.soliditylang.org/en/latest/solidity-by-example.html#the-full-contract <br>
On the right, click “Open in Remix” <br>
On the top left, make sure the compiler is on the latest version (0.8.23 in our case) <br>
Click the blue “Compile Contract” button on the left <br>
On the left menu, click on the Ethereum logo (hovering over the icon reveals “Deploy & Run Transactions”) <br>
Set environment to “MetaMask” and log in to your MetaMask account when prompted <br>
Make sure the account address matches the MetaMask account address that you want to use; your account will be charged to deploy this smart contract <br>
Click the red "Deploy" button <br>
Confirm the transaction on the MetaMask pop up <br>

Go to MetaMask and click on the transaction that just happened <br>
Next to status, click on “View on Block Explorer” <br>
Click on the address listed in the “To” field <br>
Next to the blue “Transactions” button, there is an “Contract” button; click on it <br>
Click “Verify and Publish” to publish the code <br>
Set compiler type to “Solidity (Single File)” <br>
Set the compiler type to match the Solidity compiler you used (0.8.23 in our case) <br>
Set the license to “No License” <br>
Copy and paste the code when prompted to fill in the code <br>
Click “Verify and Publish” <br>
You’re done!

To use the contract: <br>
On Etherscan, click on the "Contract" button (next to the blue "Transactions" button) <br>
Click on the "Write Contract" button (next to the blue "Code" button) <br>
Click "Connect to Web 3" and choose MetaMask when prompted <br>
You can increment the methods as you wish <br>
Click "Write" and the transaction should go through!



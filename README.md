# Micropayment-Channel
Micropayment Channel Capstone Project <br>
Template Code taken from https://docs.soliditylang.org/en/latest/solidity-by-example.html#micropayment-channel

# Deploying the Smart Contract
*Code Setup* <br>
Go to this link: https://docs.soliditylang.org/en/latest/solidity-by-example.html#the-full-contract <br>
On the right, click “Open in Remix” <br>
On the top left, make sure the compiler is on the latest version (0.8.23 in our case) <br>
Click the blue “Compile Contract” button on the left <br>
On the left menu, click on the Ethereum logo (hovering over the icon reveals “Deploy & Run Transactions”) <br>
Set environment to “MetaMask” and log in to your MetaMask account when prompted <br>
Make sure the account address matches the MetaMask account address that you want to use; your account will be charged to deploy this smart contract <br>
Click the red "Deploy" button <br>
Confirm the transaction on the MetaMask pop up <br>
<br>
*Verifying and Publishing the Code* <br>
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
You’re done! <br>
<br>
*To use the contract* <br>
On Etherscan, click on the "Contract" button (next to the blue "Transactions" button) <br>
Click on the "Write Contract" button (next to the blue "Code" button) <br>
Click "Connect to Web 3" and choose MetaMask when prompted <br>
You can increment the methods as you wish <br>
Click "Write" and the transaction should go through!

# Using Our Micropayment Channel
*Creating a New Channel* <br>
Launch index.html and styles.css locally on your computer <br>
Login with MetaMask and connect your account <br>
Under "Create New Channel", enter your MetaMask address as the "Sender Wallet Address" <br>
Enter the "Receiver Wallet Address"; this is the person you will be sending Ethereum to <br>
Click "Deploy Contract" <br>
Check your MetaMask account and click on the transaction that just occured <br>
Click "View on Etherscan" and copy the contract address; keep this for your records <br>
<br>
*Logging a New Channel*<br>
Enter the contract address of the newly created contract under "Log a New Channel" <br>
Click "Submit"<br>
<br>
*Logging Payments on an Existing Channel* <br>
Under "Log Payments on an Existing Channel", enter the contract address <br>
Input the amount of Ethereum you would like to send to the receiver <br>
Click "Log Payment" <br>
<br>
*Closing a Channel*<br>
Note: this action is irreversible <br>
Enter the contract address under "Close Channel" <br>
Click "Close Channel" <br>
The receiver should receive the Ethereum once the transaction goes through <br>

# Our Features
*Opening a New Payment Channel Through Interface* <br>
We did this by using ... **ALSO UDATE REPORT METHODS TO MATCH**
<br>
<br>
*Logging Payments Off-chain* <br>
This feature was implemented using key-value pairs in local storage. Each contract address serves as a key and the amount that the sender owes the receiver is the value. When a new channel is logged, the contract address is registered in local storage with a value of zero. When a new payment is logged, the existing value is increased by the given amount. The new total amount owed is set as the value for that contract key. This value is then displayed to the user in a pop up message, so they are aware of how much they owe the receiver and that the payment was logged. <br>
Since the total amount due is updated as the information comes in, closing the channel simply involves transferring the recorded dues from the sender to the receiver.   
<br>
*Closing a Payment Channel Through Interface* <br>
We did this by using ... **ALSO UDATE REPORT METHODS TO MATCH**
<br>

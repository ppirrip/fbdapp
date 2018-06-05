// Ref: https://ropsten.etherscan.io/tx/0x9f8d5154724173b74626b4ae6d76bf92b7caba98627d1dad1fff74182359e320
//      http://solidity.readthedocs.io/en/v0.4.24/contracts.html

// import web3 from 'web3'
var Web3 = require('web3')

const address = '0x4ac7db0b7ba5fcaada6b08f8a3de9b7334ac9059'
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "bytes32"
			}
		],
		"name": "deposit",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "_id",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	}
]

var ClientReceipt = Web3.eth.contract(abi);
var clientReceipt = ClientReceipt.at(address);

var event = clientReceipt.Deposit();

// watch for changes
event.watch(function(error, result){
    // result will contain various information
    // including the argumets given to the `Deposit`
    // call.
    if (!error)
        console.log(result);
});

// Or pass a callback to start watching immediately
var event = clientReceipt.Deposit(function(error, result) {
    if (!error)
        console.log(result);
});
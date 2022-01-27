import web3 from "./web3";
//local copy of the  contract that is depolyed
const contract_address = "0xb2e6b5D1FAb09A1A6aEA7e42B29C6E53DFDa1856";

const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
    },
    {
        "inputs": [],
        "name": "enter",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true,
        "signature": "0xe97dcb62"
    },
    {
        "inputs": [],
        "name": "getPlayers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0x8b5b9ccc"
    },
    {
        "inputs": [],
        "name": "manager",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0x481c6a75"
    },
    {
        "inputs": [],
        "name": "pickWinner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x5d495aea"
    },
    {
        "inputs": [],
        "name": "winner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0xdfbf53ae"
    }
];

export default new web3.eth.Contract(abi, contract_address);
import React, { useState } from "react";
import { Button } from "@mui/material";
import Web3 from "web3";

const ContractButton = () => {
  const contractAddress = "0xFA5215d4504Df7F619c255Abb94397397c5c1c89";
  const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor",
		"signature": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event",
		"signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event",
		"signature": "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "values",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event",
		"signature": "0x4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event",
		"signature": "0xc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event",
		"signature": "0x6bb7ff708619ba0610cba295a58592e0451dee2622938c8755667688daf3529b"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "itemType",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "initialAmount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "calories",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "preparationTime",
				"type": "uint256"
			},
			{
				"internalType": "string[]",
				"name": "ingredients",
				"type": "string[]"
			}
		],
		"name": "addNewMenuItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xd7466f79"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true,
		"signature": "0x00fdd58e"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "accounts",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true,
		"signature": "0x4e1273f4"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "buyItem",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function",
		"payable": true,
		"signature": "0x9979c009"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getItemAvailability",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "availableNumber",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true,
		"signature": "0x84a19c7c"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getItemSoldNumber",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "soldNumber",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true,
		"signature": "0x61b572fc"
	},
	{
		"inputs": [],
		"name": "getMenu",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "availableItemList",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true,
		"signature": "0x8b384f9f"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true,
		"signature": "0xe985e9c5"
	},
	{
		"inputs": [],
		"name": "lastUpdate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true,
		"signature": "0xc0463711"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "menuItems",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "soldNumber",
				"type": "uint256"
			},
			{
				"internalType": "enum CafeMenu.MenuItemType",
				"name": "itemType",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "calories",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "preparationTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true,
		"signature": "0x2a5a8c63"
	},
	{
		"inputs": [],
		"name": "owner",
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
		"signature": "0x8da5cb5b"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "produceItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x6c951040"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "receiveItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xb50f60e7"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x715018a6"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x2eb2c2d6"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xf242432a"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xa22cb465"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "supplies",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true,
		"signature": "0x26f1a1fd"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true,
		"signature": "0x01ffc9a7"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0xf2fde38b"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint8",
				"name": "itemType",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "calories",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "preparationTime",
				"type": "uint256"
			},
			{
				"internalType": "string[]",
				"name": "ingredients",
				"type": "string[]"
			}
		],
		"name": "updateItemData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x8b8ba2c1"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function",
		"constant": true,
		"signature": "0x0e89341c"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function",
		"signature": "0x3ccfd60b"
	}
]
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);
  const [isLoadingProduce, setIsLoadingProduce] = useState(false);
  const [isLoadingBuy, setIsLoadingBuy] = useState(false);
  const [isLoadingReceive, setIsLoadingReceive] = useState(false);

  const handleBuyButtonClick = async () => {
    setIsLoadingBuy(true);
    try {
        if (window.web3) {
            await window.web3.currentProvider.enable();
            const web3 = new Web3(window.web3.currentProvider);
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];
            const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Call a function on the smart contract
        await contract.methods.buyItem(0, 1).send({
            from: userAddress,
            value: web3.utils.toWei(String(0.00003), "ether")
          });

          setIsLoadingBuy(false);
        alert("All functions completed successfully!");
        } else {
        alert(
            "Please install a compatible wallet provider to interact with the smart contract."
        );
        }
    } catch (error) {
        console.error(error);
        setIsLoadingBuy(false);
    }
  };

  const handleAddButtonClick = async () => {
    setIsLoadingAdd(true);
    try {
        if (window.web3) {
            await window.web3.currentProvider.enable();
            const web3 = new Web3(window.web3.currentProvider);
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];
            const contract = new web3.eth.Contract(contractABI, contractAddress);

            await contract.methods
            .addNewMenuItem(
              web3.utils.toWei(String(0.00002), "ether"),
              0,
              100,
              "Creamy Sage",
              100,
              20,
              ["chicken", "cream", "mushroom"]
            )
            .send({ from: userAddress })

            setIsLoadingAdd(false);
        alert("All functions completed successfully!");
        } else {
        alert(
            "Please install a compatible wallet provider to interact with the smart contract."
        );
        }
    } catch (error) {
        console.error(error);
        setIsLoadingAdd(false);
    }
  };

  const handleProduceButtonClick = async () => {
    setIsLoadingProduce(true);
    try {
        if (window.web3) {
            await window.web3.currentProvider.enable();
            const web3 = new Web3(window.web3.currentProvider);
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];
            const contract = new web3.eth.Contract(contractABI, contractAddress);

            await contract.methods.produceItem(0, 10).send({ from: userAddress })
          

        setIsLoadingProduce(false);
        alert("All functions completed successfully!");
        } else {
        alert(
            "Please install a compatible wallet provider to interact with the smart contract."
        );
        }
    } catch (error) {
        console.error(error);
        setIsLoadingProduce(false);
    }
  };

  const handleReceiveButtonClick = async () => {
    setIsLoadingReceive(true);
    try {
        if (window.web3) {
            await window.web3.currentProvider.enable();
            const web3 = new Web3(window.web3.currentProvider);
            const accounts = await web3.eth.getAccounts();
            const userAddress = accounts[0];
            const contract = new web3.eth.Contract(contractABI, contractAddress);

            await contract.methods
            .receiveItem(0, 1)
            .send({ from: userAddress })
        

        setIsLoadingReceive(false);
        alert("All functions completed successfully!");
        } else {
        alert(
            "Please install a compatible wallet provider to interact with the smart contract."
        );
        }
    } catch (error) {
        console.error(error);
        setIsLoadingReceive(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", width: "500px", marginBottom: "20px" }}>
      <Button
        variant="contained"
        onClick={handleAddButtonClick}
        style={{ width: "100%", backgroundColor: "#1976d2", color: "white", marginTop: "10px", marginRight: "10px" }}
        disabled={isLoadingAdd}
      >
        {isLoadingAdd ? "Loading..." : "Add Item"}
      </Button>
      <Button
        variant="contained"
        onClick={handleProduceButtonClick}
        style={{ width: "100%", backgroundColor: "#1976d2", color: "white", marginTop: "10px", marginRight: "10px" }}
        disabled={isLoadingProduce}
      >
        {isLoadingProduce ? "Loading..." : "Produce"}
      </Button>
      <Button
        variant="contained"
        onClick={handleBuyButtonClick}
        style={{ width: "100%", backgroundColor: "#1976d2", color: "white", marginTop: "10px", marginRight: "10px" }}
        disabled={isLoadingBuy}
      >
        {isLoadingBuy ? "Loading..." : "Order"}
      </Button>
      <Button
        variant="contained"
        onClick={handleReceiveButtonClick}
        style={{ width: "100%", backgroundColor: "#1976d2", color: "white", marginTop: "10px" }}
        disabled={isLoadingReceive}
      >
        {isLoadingReceive ? "Loading..." : "Receive"}
      </Button>
    </div>
  );
  
};

export default ContractButton;

    // pages/api/mintNFT.ts 
    import { ethers } from "ethers"; 
    import { ThirdwebSDK } from "@thirdweb-dev/sdk";
    import fs from "fs";
    import Cookies from 'cookies'
    import { Router, useRouter } from "next/router";
    import { useEffect } from "react";
    const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY 
    const MODULE_ADDRESS = process.env.NEXT_PUBLIC_NFT_COLLECTION_ADDRESS
    // Make sure to initialize environment variables above the start of the api function
    export default async function mintNFT ( req, res ) {
        const cookies = new Cookies(req,res);
        const address = await cookies.get('Current_Address');
        const Quantity = await cookies.get('Quantity')
        const walletAddress = address 
        // The wallet address you'd like to mint to
        const rpcUrl = "https://matic-mumbai.chainstacklabs.com"; 
        // Use the network you created the initial project on
               
        // const wallet = new ethers.Wallet(
        //     PRIVATE_KEY,
        //     ethers.getDefaultProvider(rpcUrl)
        // );

        const sdk = new ThirdwebSDK(new ethers.Wallet(process.env.WALLET_PRIVATE_KEY,ethers.getDefaultProvider('https://matic-mumbai.chainstacklabs.com')));
        const module = sdk.getNFTCollection(
            process.env.NEXT_PUBLIC_NFT_COLLECTION_ADDRESS
            // The address of you the module you created in ThirdWeb
        );
        const image = fs.readFileSync('public/nft_.png') 
        // The name of the. file you added to /public
        // NOTE: if using the latest version of next.js, 'public' 
        // files are accessed in the backend the same as the frontend
        // ie. '/yourImageName.png'; there's no need to use relative 
        // file paths
        const nftData = {
            name: "ArchiDAO NFT",
            description: "ArchiDAO Wearable",
            image: image,
            properties: {
                whatever : 'properties',
                we : 'want'
            }
        }
        try{
            await module.mintTo(walletAddress, nftData,Quantity);         
            
            console.log('success')
            console.log(address)
            console.log(Quantity)
               
           res.redirect('/thanks').end()
                  
            
        } catch (error){
            console.log(error)
            res.json(error)
            res.status(500).end()
        }   
    }
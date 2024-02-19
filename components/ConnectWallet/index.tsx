"use client";
import { BrowserProvider } from "ethers";
import React, { useState } from "react";

function ConnectWallet() {
  const [publicKey, setpublicKey] = useState("");

  const connectWallet = async () => {
    const { ethereum } = window as any;
    try {
      const provider = new BrowserProvider(ethereum);
      const account = await provider.send("eth_accounts", []);
      setpublicKey(account[0]);
    } catch (e: any) {}
  };
  return (
    <button
      onClick={() => {
        connectWallet();
      }}
    >
      {publicKey != "" ? publicKey : "Connect Wallet"}
    </button>
  );
}

export default ConnectWallet;

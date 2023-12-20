"use client";
import { useWeb3Store } from "@/states";
import { BrowserProvider } from "ethers";

export default function Home() {
  const { setProvider, setWalletKey, walletKey } = useWeb3Store() as any;

  const connectWallet = async () => {
    const { ethereum } = window as any;
    try {
      const provider = new BrowserProvider(ethereum);
      const account = await provider.send("eth_accounts", []);
      setWalletKey(account[0]);
      setProvider(new BrowserProvider(ethereum));
    } catch (e: any) {}
  };
  return (
    <main>
      <button onClick={connectWallet}>Click Me</button>
      <p>{walletKey}</p>
    </main>
  );
}

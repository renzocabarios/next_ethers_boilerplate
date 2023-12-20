import { BrowserProvider } from "ethers";
import { create } from "zustand";

export const useWeb3Store = create((set) => ({
  provider: null,
  walletKey: null,
  setProvider: (provider: BrowserProvider) => set(() => ({ provider })),
  setWalletKey: (walletKey: string) => set(() => ({ walletKey })),
}));

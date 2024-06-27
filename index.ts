import {
  createPublicClient,
  http,
  createWalletClient,
  Account,
  PublicClient,
} from "viem";
import { privateKeyToAccount, toAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";

import { PotentiaSdk } from "@squaredlab-io/sdk/src";

const rpc = "https://base-sepolia-rpc.publicnode.com";

const pk = "fa9152335d104cb4370aba84e38a00691b9de424e4ad201a67c8f9bfbb7785ea";

const account = privateKeyToAccount(`0x${pk}`);

const publicClient = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

const walletClient = createWalletClient({
  account: account,
  chain: baseSepolia,
  transport: http(rpc),
});

async function foobar() {
  const sdk = new PotentiaSdk(publicClient as PublicClient, walletClient);
  const x = await sdk.getX("0x762c9B8fa27546C0DDc3E49883FC14Bb71723EEB");
  console.log("x", x);
}

foobar();

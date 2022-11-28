import { assertArgument } from "../utils/index.js";

import { Network } from "./network.js";
import { JsonRpcProvider } from "./provider-jsonrpc.js";

import type { Networkish } from "./network.js";


export class CloudflareProvider extends JsonRpcProvider {
    constructor(_network: Networkish = "mainnet") {
        const network = Network.from(_network);
        assertArgument(network.name === "mainnet", "unsupported network", "network", _network);
        super("https:/\/cloudflare-eth.com/", network, { staticNetwork: network });
    }
}
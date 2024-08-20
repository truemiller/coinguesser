export type Coin = {
  name: string;
  logoSrc: `${string}.png`;
  symbol: string;
};

export const COINS: Coin[] = [
  {
    name: "Bitcoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1.png",
    symbol: "BTC",
  },
  {
    name: "Ethereum",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png",
    symbol: "ETH",
  },
  {
    name: "Tether",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/825.png",
    symbol: "USDT",
  },
  {
    name: "BNB",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1839.png",
    symbol: "BNB",
  },
  {
    name: "Solana",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5426.png",
    symbol: "SOL",
  },
  {
    name: "USDC",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png",
    symbol: "USDC",
  },
  {
    name: "XRP",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/52.png",
    symbol: "XRP",
  },
  {
    name: "Toncoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11419.png",
    symbol: "TON",
  },
  {
    name: "Dogecoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/74.png",
    symbol: "DOGE",
  },
  {
    name: "TRON",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1958.png",
    symbol: "TRX",
  },
  {
    name: "Cardano",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2010.png",
    symbol: "ADA",
  },
  {
    name: "Avalanche",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5805.png",
    symbol: "AVAX",
  },
  {
    name: "Shiba Inu",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5994.png",
    symbol: "SHIB",
  },
  {
    name: "Bitcoin Cash",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1831.png",
    symbol: "BCH",
  },
  {
    name: "Chainlink",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1975.png",
    symbol: "LINK",
  },
  {
    name: "UNUS SED LEO",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3957.png",
    symbol: "LEO",
  },
  {
    name: "Dai",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4943.png",
    symbol: "DAI",
  },
  {
    name: "Litecoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2.png",
    symbol: "LTC",
  },
  {
    name: "Polygon",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3890.png",
    symbol: "MATIC",
  },
  {
    name: "NEAR Protocol",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6535.png",
    symbol: "NEAR",
  },
  {
    name: "Kaspa",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/20396.png",
    symbol: "KAS",
  },
  {
    name: "Uniswap",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7083.png",
    symbol: "UNI",
  },
  {
    name: "Internet Computer",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8916.png",
    symbol: "ICP",
  },
  {
    name: "Pepe",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/24478.png",
    symbol: "PEPE",
  },
  {
    name: "Aptos",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/21794.png",
    symbol: "APT",
  },
  {
    name: "Monero",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/328.png",
    symbol: "XMR",
  },
  {
    name: "Stellar",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/512.png",
    symbol: "XLM",
  },
  {
    name: "Ethereum Classic",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1321.png",
    symbol: "ETC",
  },
  {
    name: "First Digital USD",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/26081.png",
    symbol: "FDUSD",
  },
  {
    name: "Cronos",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3635.png",
    symbol: "CRO",
  },
  {
    name: "Sui",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/20947.png",
    symbol: "SUI",
  },
  {
    name: "OKB",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3897.png",
    symbol: "OKB",
  },
  {
    name: "Stacks",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4847.png",
    symbol: "STX",
  },
  {
    name: "Artificial Superintelligence Alliance",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3773.png",
    symbol: "FET",
  },
  {
    name: "Bittensor",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/22974.png",
    symbol: "TAO",
  },
  {
    name: "Filecoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2280.png",
    symbol: "FIL",
  },
  {
    name: "Mantle",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/27075.png",
    symbol: "MNT",
  },
  {
    name: "Hedera",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4642.png",
    symbol: "HBAR",
  },
  {
    name: "VeChain",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3077.png",
    symbol: "VET",
  },
  {
    name: "Arbitrum",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11841.png",
    symbol: "ARB",
  },
  {
    name: "Aave",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7278.png",
    symbol: "AAVE",
  },
  {
    name: "Cosmos",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3794.png",
    symbol: "ATOM",
  },
  {
    name: "Maker",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1518.png",
    symbol: "MKR",
  },
  {
    name: "Immutable",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/10603.png",
    symbol: "IMX",
  },
  {
    name: "Injective",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7226.png",
    symbol: "INJ",
  },
  {
    name: "Render",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5690.png",
    symbol: "RENDER",
  },
  {
    name: "Optimism",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11840.png",
    symbol: "OP",
  },
  {
    name: "Arweave",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5632.png",
    symbol: "AR",
  },
  {
    name: "dogwifhat",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28752.png",
    symbol: "WIF",
  },
  {
    name: "The Graph",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6719.png",
    symbol: "GRT",
  },
  {
    name: "THORChain",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4157.png",
    symbol: "RUNE",
  },
  {
    name: "Bitget Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11092.png",
    symbol: "BGB",
  },
  {
    name: "Bonk",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23095.png",
    symbol: "BONK",
  },
  {
    name: "FLOKI",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/10804.png",
    symbol: "FLOKI",
  },
  {
    name: "Theta Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2416.png",
    symbol: "THETA",
  },
  {
    name: "Helium",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5665.png",
    symbol: "HNT",
  },
  {
    name: "Fantom",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3513.png",
    symbol: "FTM",
  },
  {
    name: "Notcoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28850.png",
    symbol: "NOT",
  },
  {
    name: "Jupiter",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29210.png",
    symbol: "JUP",
  },
  {
    name: "Algorand",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4030.png",
    symbol: "ALGO",
  },
  {
    name: "Pyth Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28177.png",
    symbol: "PYTH",
  },
  {
    name: "Celestia",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/22861.png",
    symbol: "TIA",
  },
  {
    name: "JasmyCoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8425.png",
    symbol: "JASMY",
  },
  {
    name: "Lido DAO",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8000.png",
    symbol: "LDO",
  },
  {
    name: "KuCoin Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2087.png",
    symbol: "KCS",
  },
  {
    name: "Ondo",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/21159.png",
    symbol: "ONDO",
  },
  {
    name: "Core",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23254.png",
    symbol: "CORE",
  },
  {
    name: "Sei",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23149.png",
    symbol: "SEI",
  },
  {
    name: "PayPal USD",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/27772.png",
    symbol: "PYUSD",
  },
  {
    name: "Brett (Based)",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29743.png",
    symbol: "BRETT",
  },
  {
    name: "BitTorrent [New]",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/16086.png",
    symbol: "BTT",
  },
  {
    name: "Bitcoin SV",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3602.png",
    symbol: "BSV",
  },
  {
    name: "Flow",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4558.png",
    symbol: "FLOW",
  },
  {
    name: "Quant",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3155.png",
    symbol: "QNT",
  },
  {
    name: "USDD",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/19891.png",
    symbol: "USDD",
  },
  {
    name: "EOS",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1765.png",
    symbol: "EOS",
  },
  {
    name: "MultiversX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6892.png",
    symbol: "EGLD",
  },
  {
    name: "MANTRA",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6536.png",
    symbol: "OM",
  },
  {
    name: "Axie Infinity",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6783.png",
    symbol: "AXS",
  },
  {
    name: "Neo",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1376.png",
    symbol: "NEO",
  },
  {
    name: "GateToken",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4269.png",
    symbol: "GT",
  },
  {
    name: "Zcash",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1437.png",
    symbol: "ZEC",
  },
  {
    name: "Tezos",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2011.png",
    symbol: "XTZ",
  },
  {
    name: "dYdX (Native)",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28324.png",
    symbol: "DYDX",
  },
  {
    name: "Beam",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28298.png",
    symbol: "BEAM",
  },
  {
    name: "Flare",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7950.png",
    symbol: "FLR",
  },
  {
    name: "Gala",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7080.png",
    symbol: "GALA",
  },
  {
    name: "SATS",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28683.png",
    symbol: "1000SATS",
  },
  {
    name: "eCash",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/10791.png",
    symbol: "XEC",
  },
  {
    name: "Ethereum Name Service",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/13855.png",
    symbol: "ENS",
  },
  {
    name: "Tether Gold",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5176.png",
    symbol: "XAUt",
  },
  {
    name: "Akash Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7431.png",
    symbol: "AKT",
  },
  {
    name: "ORDI",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/25028.png",
    symbol: "ORDI",
  },
  {
    name: "Conflux",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7334.png",
    symbol: "CFX",
  },
  {
    name: "The Sandbox",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6210.png",
    symbol: "SAND",
  },
  {
    name: "Wormhole",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29587.png",
    symbol: "W",
  },
  {
    name: "Klaytn",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4256.png",
    symbol: "KLAY",
  },
  {
    name: "BinaryX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23635.png",
    symbol: "BNX",
  },
  {
    name: "Ronin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/14101.png",
    symbol: "RON",
  },
  {
    name: "Starknet",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/22691.png",
    symbol: "STRK",
  },
  {
    name: "Nexo",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2694.png",
    symbol: "NEXO",
  },
  {
    name: "Worldcoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/13502.png",
    symbol: "WLD",
  },
  {
    name: "Ethena",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30171.png",
    symbol: "ENA",
  },
  {
    name: "Decentraland",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1966.png",
    symbol: "MANA",
  },
  {
    name: "Mina",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8646.png",
    symbol: "MINA",
  },
  {
    name: "Chiliz",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4066.png",
    symbol: "CHZ",
  },
  {
    name: "TrueUSD",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2563.png",
    symbol: "TUSD",
  },
  {
    name: "BOOK OF MEME",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29870.png",
    symbol: "BOME",
  },
  {
    name: "AIOZ Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9104.png",
    symbol: "AIOZ",
  },
  {
    name: "APENFT",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9816.png",
    symbol: "NFT",
  },
  {
    name: "PAX Gold",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4705.png",
    symbol: "PAXG",
  },
  {
    name: "DeXe",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7326.png",
    symbol: "DEXE",
  },
  {
    name: "Synthetix",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2586.png",
    symbol: "SNX",
  },
  {
    name: "IOTA",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1720.png",
    symbol: "IOTA",
  },
  {
    name: "Raydium",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8526.png",
    symbol: "RAY",
  },
  {
    name: "Pendle",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9481.png",
    symbol: "PENDLE",
  },
  {
    name: "Astar",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/12885.png",
    symbol: "ASTR",
  },
  {
    name: "Popcat (SOL)",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28782.png",
    symbol: "POPCAT",
  },
  {
    name: "Terra Classic",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4172.png",
    symbol: "LUNC",
  },
  {
    name: "Gnosis",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1659.png",
    symbol: "GNO",
  },
  {
    name: "cat in a dogs world",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30126.png",
    symbol: "MEW",
  },
  {
    name: "FTX Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4195.png",
    symbol: "FTT",
  },
  {
    name: "Axelar",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/17799.png",
    symbol: "AXL",
  },
  {
    name: "PancakeSwap",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7186.png",
    symbol: "CAKE",
  },
  {
    name: "zkSync",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/24091.png",
    symbol: "ZK",
  },
  {
    name: "Oasis",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7653.png",
    symbol: "ROSE",
  },
  {
    name: "XDC Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2634.png",
    symbol: "XDC",
  },
  {
    name: "Bitcoin Gold",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2083.png",
    symbol: "BTG",
  },
  {
    name: "Mog Coin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/27659.png",
    symbol: "MOG",
  },
  {
    name: "Curve DAO Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6538.png",
    symbol: "CRV",
  },
  {
    name: "Livepeer",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3640.png",
    symbol: "LPT",
  },
  {
    name: "Compound",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5692.png",
    symbol: "COMP",
  },
  {
    name: "Theta Fuel",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3822.png",
    symbol: "TFUEL",
  },
  {
    name: "LayerZero",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/26997.png",
    symbol: "ZRO",
  },
  {
    name: "Trust Wallet Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5964.png",
    symbol: "TWT",
  },
  {
    name: "MX Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4041.png",
    symbol: "MX",
  },
  {
    name: "ApeCoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/18876.png",
    symbol: "APE",
  },
  {
    name: "Kava",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4846.png",
    symbol: "KAVA",
  },
  {
    name: "SafePal",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8119.png",
    symbol: "SFP",
  },
  {
    name: "Nervos Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4948.png",
    symbol: "CKB",
  },
  {
    name: "Safe",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/21585.png",
    symbol: "SAFE",
  },
  {
    name: "1inch Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8104.png",
    symbol: "1INCH",
  },
  {
    name: "IoTeX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2777.png",
    symbol: "IOTX",
  },
  {
    name: "WEMIX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7548.png",
    symbol: "WEMIX",
  },
  {
    name: "Galxe",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11877.png",
    symbol: "GAL",
  },
  {
    name: "JUST",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5488.png",
    symbol: "JST",
  },
  {
    name: "Amp",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6945.png",
    symbol: "AMP",
  },
  {
    name: "Aevo",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29676.png",
    symbol: "AEVO",
  },
  {
    name: "Golem",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1455.png",
    symbol: "GLM",
  },
  {
    name: "Jito",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28541.png",
    symbol: "JTO",
  },
  {
    name: "Aragon",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1680.png",
    symbol: "ANT",
  },
  {
    name: "Dash",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/131.png",
    symbol: "DASH",
  },
  {
    name: "Gravity",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/32120.png",
    symbol: "G",
  },
  {
    name: "Blur",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23121.png",
    symbol: "BLUR",
  },
  {
    name: "WOO",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7501.png",
    symbol: "WOO",
  },
  {
    name: "ConstitutionDAO",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/14806.png",
    symbol: "PEOPLE",
  },
  {
    name: "aelf",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2299.png",
    symbol: "ELF",
  },
  {
    name: "Kusama",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5034.png",
    symbol: "KSM",
  },
  {
    name: "Terra",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/20314.png",
    symbol: "LUNA",
  },
  {
    name: "SuperVerse",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8290.png",
    symbol: "SUPER",
  },
  {
    name: "Dymension",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28932.png",
    symbol: "DYM",
  },
  {
    name: "Reserve Rights",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3964.png",
    symbol: "RSR",
  },
  {
    name: "Manta Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/13631.png",
    symbol: "MANTA",
  },
  {
    name: "Osmosis",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/12220.png",
    symbol: "OSMO",
  },
  {
    name: "0x Protocol",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1896.png",
    symbol: "ZRX",
  },
  {
    name: "GMT",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/18069.png",
    symbol: "GMT",
  },
  {
    name: "Memecoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28301.png",
    symbol: "MEME",
  },
  {
    name: "Zilliqa",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2469.png",
    symbol: "ZIL",
  },
  {
    name: "Ankr",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3783.png",
    symbol: "ANKR",
  },
  {
    name: "Siacoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1042.png",
    symbol: "SC",
  },
  {
    name: "Basic Attention Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1697.png",
    symbol: "BAT",
  },
  {
    name: "Celo",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5567.png",
    symbol: "CELO",
  },
  {
    name: "Qtum",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1684.png",
    symbol: "QTUM",
  },
  {
    name: "Holo",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2682.png",
    symbol: "HOT",
  },
  {
    name: "SPACE ID",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/21846.png",
    symbol: "ID",
  },
  {
    name: "Radix",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11948.png",
    symbol: "XRD",
  },
  {
    name: "dYdX (ethDYDX)",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11156.png",
    symbol: "ETHDYDX",
  },
  {
    name: "GMX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11857.png",
    symbol: "GMX",
  },
  {
    name: "Enjin Coin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2130.png",
    symbol: "ENJ",
  },
  {
    name: "Rocket Pool",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2943.png",
    symbol: "RPL",
  },
  {
    name: "Ravencoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2577.png",
    symbol: "RVN",
  },
  {
    name: "Threshold",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/17751.png",
    symbol: "T",
  },
  {
    name: "Convex Finance",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9903.png",
    symbol: "CVX",
  },
  {
    name: "Echelon Prime",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23711.png",
    symbol: "PRIME",
  },
  {
    name: "Gas",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1785.png",
    symbol: "GAS",
  },
  {
    name: "Arkham",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/27565.png",
    symbol: "ARKM",
  },
  {
    name: "EthereumPoW",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/21296.png",
    symbol: "ETHW",
  },
  {
    name: "Biconomy",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9543.png",
    symbol: "BICO",
  },
  {
    name: "Altlayer",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29073.png",
    symbol: "ALT",
  },
  {
    name: "Open Campus",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/24613.png",
    symbol: "EDU",
  },
  {
    name: "OriginTrail",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2467.png",
    symbol: "TRAC",
  },
  {
    name: "Flux",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3029.png",
    symbol: "FLUX",
  },
  {
    name: "Illuvium",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8719.png",
    symbol: "ILV",
  },
  {
    name: "Blast",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28480.png",
    symbol: "BLAST",
  },
  {
    name: "Mask Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8536.png",
    symbol: "MASK",
  },
  {
    name: "SKALE",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5691.png",
    symbol: "SKL",
  },
  {
    name: "Metis",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9640.png",
    symbol: "METIS",
  },
  {
    name: "Polymesh",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/20362.png",
    symbol: "POLYX",
  },
  {
    name: "NEM",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/873.png",
    symbol: "XEM",
  },
  {
    name: "Edelcoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28112.png",
    symbol: "EDLC",
  },
  {
    name: "Ethena USDe",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29470.png",
    symbol: "USDe",
  },
  {
    name: "Zeebu",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/27765.png",
    symbol: "ZBU",
  },
  {
    name: "Cheelee",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23054.png",
    symbol: "CHEEL",
  },
  {
    name: "Fellaz",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/20787.png",
    symbol: "FLZ",
  },
  {
    name: "Fasttoken",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/22615.png",
    symbol: "FTN",
  },
  {
    name: "Frax",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6952.png",
    symbol: "FRAX",
  },
  {
    name: "Aerodrome Finance",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29270.png",
    symbol: "AERO",
  },
  {
    name: "Beldex",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3987.png",
    symbol: "BDX",
  },
  {
    name: "H2O DAO",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/19091.png",
    symbol: "H2O",
  },
  {
    name: "Ondo US Dollar Yield",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29256.png",
    symbol: "USDY",
  },
  {
    name: "Dog (Runes)",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30933.png",
    symbol: "DOG",
  },
  {
    name: "USDB",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29599.png",
    symbol: "USDB",
  },
  {
    name: "IPVERSE",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28367.png",
    symbol: "IPV",
  },
  {
    name: "Turbo",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/24911.png",
    symbol: "TURBO",
  },
  {
    name: "Tribe",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9025.png",
    symbol: "TRIBE",
  },
  {
    name: "Aethir",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30083.png",
    symbol: "ATH",
  },
  {
    name: "PepeCoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/24835.png",
    symbol: "PEPECOIN",
  },
  {
    name: "Meta Games Coin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29839.png",
    symbol: "MGC",
  },
  {
    name: "SUNDOG",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/32717.png",
    symbol: "SUNDOG",
  },
  {
    name: "Orbler",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/17520.png",
    symbol: "ORBR",
  },
  {
    name: "FINSCHIA",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4512.png",
    symbol: "FNSA",
  },
  {
    name: "MimbleWimbleCoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5031.png",
    symbol: "MWC",
  },
  {
    name: "Gigachad",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30063.png",
    symbol: "GIGA",
  },
  {
    name: "Qubic",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29169.png",
    symbol: "QUBIC",
  },
  {
    name: "Rollbit Coin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/15271.png",
    symbol: "RLB",
  },
  {
    name: "Destra Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29884.png",
    symbol: "DSYNC",
  },
  {
    name: "ZetaChain",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/21259.png",
    symbol: "ZETA",
  },
  {
    name: "Loopring",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1934.png",
    symbol: "LRC",
  },
  {
    name: "ssv.network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/12999.png",
    symbol: "SSV",
  },
  {
    name: "UMA",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5617.png",
    symbol: "UMA",
  },
  {
    name: "Decred",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1168.png",
    symbol: "DCR",
  },
  {
    name: "SuperRare",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11294.png",
    symbol: "RARE",
  },
  {
    name: "Centrifuge",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6748.png",
    symbol: "CFG",
  },
  {
    name: "Ponke",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29150.png",
    symbol: "PONKE",
  },
  {
    name: "Banana Gun",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28066.png",
    symbol: "BANANA",
  },
  {
    name: "yearn.finance",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5864.png",
    symbol: "YFI",
  },
  {
    name: "Band Protocol",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4679.png",
    symbol: "BAND",
  },
  {
    name: "Chia",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9258.png",
    symbol: "XCH",
  },
  {
    name: "Hivemapper",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/22850.png",
    symbol: "HONEY",
  },
  {
    name: "ether.fi",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29814.png",
    symbol: "ETHFI",
  },
  {
    name: "Ontology",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2566.png",
    symbol: "ONT",
  },
  {
    name: "VeThor Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3012.png",
    symbol: "VTHO",
  },
  {
    name: "io.net",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29835.png",
    symbol: "IO",
  },
  {
    name: "Harmony",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3945.png",
    symbol: "ONE",
  },
  {
    name: "Arcblock",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2545.png",
    symbol: "ABT",
  },
  {
    name: "Casper",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5899.png",
    symbol: "CSPR",
  },
  {
    name: "Alchemy Pay",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6958.png",
    symbol: "ACH",
  },
  {
    name: "Audius",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7455.png",
    symbol: "AUDIO",
  },
  {
    name: "Lisk",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1214.png",
    symbol: "LSK",
  },
  {
    name: "Nano",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1567.png",
    symbol: "XNO",
  },
  {
    name: "Syscoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/541.png",
    symbol: "SYS",
  },
  {
    name: "Venus",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7288.png",
    symbol: "XVS",
  },
  {
    name: "Horizen",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1698.png",
    symbol: "ZEN",
  },
  {
    name: "Xai",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28933.png",
    symbol: "XAI",
  },
  {
    name: "Taiko",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/31525.png",
    symbol: "TAIKO",
  },
  {
    name: "VVS Finance",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/14519.png",
    symbol: "VVS",
  },
  {
    name: "Ultima",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28293.png",
    symbol: "ULTIMA",
  },
  {
    name: "Aleph Zero",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11976.png",
    symbol: "AZERO",
  },
  {
    name: "Balancer",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5728.png",
    symbol: "BAL",
  },
  {
    name: "Pixels",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29335.png",
    symbol: "PIXEL",
  },
  {
    name: "Marlin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7497.png",
    symbol: "POND",
  },
  {
    name: "Ontology Gas",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3217.png",
    symbol: "ONG",
  },
  {
    name: "MAGA",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/27872.png",
    symbol: "TRUMP",
  },
  {
    name: "Paycoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5275.png",
    symbol: "PCI",
  },
  {
    name: "Metars Genesis",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/21178.png",
    symbol: "MRS",
  },
  {
    name: "WAX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2300.png",
    symbol: "WAXP",
  },
  {
    name: "BitMart Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2933.png",
    symbol: "BMX",
  },
  {
    name: "Delysium",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/24007.png",
    symbol: "AGI",
  },
  {
    name: "iExec RLC",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1637.png",
    symbol: "RLC",
  },
  {
    name: "WHY",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30867.png",
    symbol: "WHY",
  },
  {
    name: "Polygon Ecosystem Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28321.png",
    symbol: "POL",
  },
  {
    name: "JOE",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11396.png",
    symbol: "JOE",
  },
  {
    name: "IOST",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2405.png",
    symbol: "IOST",
  },
  {
    name: "Cartesi",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5444.png",
    symbol: "CTSI",
  },
  {
    name: "Propy",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1974.png",
    symbol: "PRO",
  },
  {
    name: "Orca",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11165.png",
    symbol: "ORCA",
  },
  {
    name: "RSS3",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/17917.png",
    symbol: "RSS3",
  },
  {
    name: "Numeraire",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1732.png",
    symbol: "NMR",
  },
  {
    name: "Mines of Dalarnia",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11374.png",
    symbol: "DAR",
  },
  {
    name: "Everscale",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7505.png",
    symbol: "EVER",
  },
  {
    name: "Pax Dollar",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3330.png",
    symbol: "USDP",
  },
  {
    name: "Smooth Love Potion",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5824.png",
    symbol: "SLP",
  },
  {
    name: "Helium Mobile",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/24600.png",
    symbol: "MOBILE",
  },
  {
    name: "TrueFi",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7725.png",
    symbol: "TRU",
  },
  {
    name: "Synapse",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/12147.png",
    symbol: "SYN",
  },
  {
    name: "Powerledger",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2132.png",
    symbol: "POWR",
  },
  {
    name: "Pundi X (New)",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9040.png",
    symbol: "PUNDIX",
  },
  {
    name: "0x0.ai",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23355.png",
    symbol: "0x0",
  },
  {
    name: "Coin98",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/10903.png",
    symbol: "C98",
  },
  {
    name: "Mumu the Bull",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30285.png",
    symbol: "MUMU",
  },
  {
    name: "IQ",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2930.png",
    symbol: "IQ",
  },
  {
    name: "Prom",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4120.png",
    symbol: "PROM",
  },
  {
    name: "Gemini Dollar",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3306.png",
    symbol: "GUSD",
  },
  {
    name: "VerusCoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5049.png",
    symbol: "VRSC",
  },
  {
    name: "Tokenlon Network Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8083.png",
    symbol: "LON",
  },
  {
    name: "Keep Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5566.png",
    symbol: "KEEP",
  },
  {
    name: "Highstreet",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11232.png",
    symbol: "HIGH",
  },
  {
    name: "Bitkub Coin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/16093.png",
    symbol: "KUB",
  },
  {
    name: "Braintrust",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11584.png",
    symbol: "BTRST",
  },
  {
    name: "World Mobile Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/13769.png",
    symbol: "WMT",
  },
  {
    name: "LCX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4950.png",
    symbol: "LCX",
  },
  {
    name: "Chintai",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8534.png",
    symbol: "CHEX",
  },
  {
    name: "Hive",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5370.png",
    symbol: "HIVE",
  },
  {
    name: "MobileCoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7878.png",
    symbol: "MOB",
  },
  {
    name: "Stratis [New]",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30168.png",
    symbol: "STRAX",
  },
  {
    name: "Dusk",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4092.png",
    symbol: "DUSK",
  },
  {
    name: "Civic",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1816.png",
    symbol: "CVC",
  },
  {
    name: "Symbol",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8677.png",
    symbol: "XYM",
  },
  {
    name: "Treasure",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/14783.png",
    symbol: "MAGIC",
  },
  {
    name: "MVL",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2982.png",
    symbol: "MVL",
  },
  {
    name: "Coq Inu",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28675.png",
    symbol: "COQ",
  },
  {
    name: "Merlin Chain",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30712.png",
    symbol: "MERL",
  },
  {
    name: "WINkLink",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4206.png",
    symbol: "WIN",
  },
  {
    name: "Lista DAO",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/21533.png",
    symbol: "LISTA",
  },
  {
    name: "TerraClassicUSD",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7129.png",
    symbol: "USTC",
  },
  {
    name: "HarryPotterObamaSonic10Inu (ERC-20)",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/25220.png",
    symbol: "BITCOIN",
  },
  {
    name: "DODO",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7224.png",
    symbol: "DODO",
  },
  {
    name: "Bone ShibaSwap",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11865.png",
    symbol: "BONE",
  },
  {
    name: "SmarDex",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/24203.png",
    symbol: "SDEX",
  },
  {
    name: "BORA",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3801.png",
    symbol: "BORA",
  },
  {
    name: "Velo",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7127.png",
    symbol: "VELO",
  },
  {
    name: "UPCX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28654.png",
    symbol: "UPC",
  },
  {
    name: "Zentry",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30963.png",
    symbol: "ZENT",
  },
  {
    name: "Celer Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3814.png",
    symbol: "CELR",
  },
  {
    name: "Drift",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/31278.png",
    symbol: "DRIFT",
  },
  {
    name: "Euler",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/14280.png",
    symbol: "EUL",
  },
  {
    name: "Status",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1759.png",
    symbol: "SNT",
  },
  {
    name: "Polymath",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2496.png",
    symbol: "POLY",
  },
  {
    name: "USDX [Kava]",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6651.png",
    symbol: "USDX",
  },
  {
    name: "Gains Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/13663.png",
    symbol: "GNS",
  },
  {
    name: "inSure DeFi",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5113.png",
    symbol: "SURE",
  },
  {
    name: "AI Analysis Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28688.png",
    symbol: "AIAT",
  },
  {
    name: "Big Time",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28230.png",
    symbol: "BIGTIME",
  },
  {
    name: "Shentu",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4807.png",
    symbol: "CTK",
  },
  {
    name: "MiL.k",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5266.png",
    symbol: "MLK",
  },
  {
    name: "Vulcan Forged (PYR)",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9308.png",
    symbol: "PYR",
  },
  {
    name: "Steem",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1230.png",
    symbol: "STEEM",
  },
  {
    name: "dKargo",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5908.png",
    symbol: "DKA",
  },
  {
    name: "BakeryToken",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7064.png",
    symbol: "BAKE",
  },
  {
    name: "STP",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4006.png",
    symbol: "STPT",
  },
  {
    name: "Bazaars",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/24554.png",
    symbol: "BZR",
  },
  {
    name: "Huobi Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2502.png",
    symbol: "HT",
  },
  {
    name: "Cyber",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/24781.png",
    symbol: "CYBER",
  },
  {
    name: "Orbs",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3835.png",
    symbol: "ORBS",
  },
  {
    name: "Kyber Network Crystal v2",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9444.png",
    symbol: "KNC",
  },
  {
    name: "Apu Apustaja",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30008.png",
    symbol: "APU",
  },
  {
    name: "Sleepless AI",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28846.png",
    symbol: "AI",
  },
  {
    name: "Seedify.fund",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8972.png",
    symbol: "SFUND",
  },
  {
    name: "Nakamoto Games",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/12749.png",
    symbol: "NAKA",
  },
  {
    name: "Dent",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1886.png",
    symbol: "DENT",
  },
  {
    name: "MediBloc",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2303.png",
    symbol: "MED",
  },
  {
    name: "Rootstock Infrastructure Framework",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3701.png",
    symbol: "RIF",
  },
  {
    name: "Spell Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11289.png",
    symbol: "SPELL",
  },
  {
    name: "Polyhedra Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29779.png",
    symbol: "ZKJ",
  },
  {
    name: "Phala Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6841.png",
    symbol: "PHA",
  },
  {
    name: "Fusionist",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28674.png",
    symbol: "ACE",
  },
  {
    name: "Request",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2071.png",
    symbol: "REQ",
  },
  {
    name: "MyNeighborAlice",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8766.png",
    symbol: "ALICE",
  },
  {
    name: "ANyONe Protocol",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/32037.png",
    symbol: "ANYONE",
  },
  {
    name: "Oraichain",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7533.png",
    symbol: "ORAI",
  },
  {
    name: "SLERF",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29920.png",
    symbol: "SLERF",
  },
  {
    name: "Moonriver",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9285.png",
    symbol: "MOVR",
  },
  {
    name: "Portal",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29555.png",
    symbol: "PORTAL",
  },
  {
    name: "Myro",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28382.png",
    symbol: "MYRO",
  },
  {
    name: "ApeX Protocol",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/19843.png",
    symbol: "APEX",
  },
  {
    name: "Dogelon Mars",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9436.png",
    symbol: "ELON",
  },
  {
    name: "Radiant Capital",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/21106.png",
    symbol: "RDNT",
  },
  {
    name: "Hooked Protocol",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/22764.png",
    symbol: "HOOK",
  },
  {
    name: "Liquity USD",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9566.png",
    symbol: "LUSD",
  },
  {
    name: "NetMind Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29447.png",
    symbol: "NMT",
  },
  {
    name: "ANDY (ETH)",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29879.png",
    symbol: "ANDY",
  },
  {
    name: "Constellation",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2868.png",
    symbol: "DAG",
  },
  {
    name: "FLEX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5190.png",
    symbol: "FLEX",
  },
  {
    name: "Node AI",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29513.png",
    symbol: "GPU",
  },
  {
    name: "TokenFi",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28299.png",
    symbol: "TOKEN",
  },
  {
    name: "BUSD",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4687.png",
    symbol: "BUSD",
  },
  {
    name: "Goldfinch",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/13967.png",
    symbol: "GFI",
  },
  {
    name: "Hashflow",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/22461.png",
    symbol: "HFT",
  },
  {
    name: "MetFi",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/24225.png",
    symbol: "METFI",
  },
  {
    name: "Staika",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23951.png",
    symbol: "STIK",
  },
  {
    name: "QuarkChain",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2840.png",
    symbol: "QKC",
  },
  {
    name: "StormX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2297.png",
    symbol: "STMX",
  },
  {
    name: "Orchid",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5026.png",
    symbol: "OXT",
  },
  {
    name: "Nosana",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/16612.png",
    symbol: "NOS",
  },
  {
    name: "Omni Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30315.png",
    symbol: "OMNI",
  },
  {
    name: "Milady Meme Coin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/25023.png",
    symbol: "LADYS",
  },
  {
    name: "Metaplex",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/21870.png",
    symbol: "MPLX",
  },
  {
    name: "Frontier",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5893.png",
    symbol: "FRONT",
  },
  {
    name: "Kendu Inu",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/31152.png",
    symbol: "KENDU",
  },
  {
    name: "ChainGPT",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23756.png",
    symbol: "CGPT",
  },
  {
    name: "MCOIN",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23046.png",
    symbol: "MCOIN",
  },
  {
    name: "Phoenix",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/13969.png",
    symbol: "PHB",
  },
  {
    name: "Oasys",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/22265.png",
    symbol: "OAS",
  },
  {
    name: "Dione Protocol",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/21473.png",
    symbol: "DIONE",
  },
  {
    name: "BENQI",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9288.png",
    symbol: "QI",
  },
  {
    name: "Ardor",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1320.png",
    symbol: "ARDR",
  },
  {
    name: "Aurora",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/14803.png",
    symbol: "AURORA",
  },
  {
    name: "LeverFi",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/20873.png",
    symbol: "LEVER",
  },
  {
    name: "NYM",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/17591.png",
    symbol: "NYM",
  },
  {
    name: "LUKSO",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/27622.png",
    symbol: "LYX",
  },
  {
    name: "Metal DAO",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1788.png",
    symbol: "MTL",
  },
  {
    name: "Stargate Finance",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/18934.png",
    symbol: "STG",
  },
  {
    name: "KWD",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1044.png",
    symbol: "KWD",
  },
  {
    name: "Adventure Gold",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11568.png",
    symbol: "AGLD",
  },
  {
    name: "ALEX Lab",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/22074.png",
    symbol: "ALEX",
  },
  {
    name: "Degen",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30096.png",
    symbol: "DEGEN",
  },
  {
    name: "Wrapped Islamic Coin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/31315.png",
    symbol: "WISLM",
  },
  {
    name: "Anchored Coins AEUR",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28596.png",
    symbol: "AEUR",
  },
  {
    name: "XPLA",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/22359.png",
    symbol: "XPLA",
  },
  {
    name: "Maple",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9417.png",
    symbol: "MPL",
  },
  {
    name: "Stride",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/21781.png",
    symbol: "STRD",
  },
  {
    name: "Liquity",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7429.png",
    symbol: "LQTY",
  },
  {
    name: "DAO Maker",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8420.png",
    symbol: "DAO",
  },
  {
    name: "Verge",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/693.png",
    symbol: "XVG",
  },
  {
    name: "Gods Unchained",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/10631.png",
    symbol: "GODS",
  },
  {
    name: "Hifi Finance",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23037.png",
    symbol: "HIFI",
  },
  {
    name: "Pocket Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11823.png",
    symbol: "POKT",
  },
  {
    name: "XYO",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2765.png",
    symbol: "XYO",
  },
  {
    name: "michi (SOL)",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30943.png",
    symbol: "$MICHI",
  },
  {
    name: "ShibaBitcoin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30953.png",
    symbol: "SHIBTC",
  },
  {
    name: "Bancor",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1727.png",
    symbol: "BNT",
  },
  {
    name: "Bluzelle",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2505.png",
    symbol: "BLZ",
  },
  {
    name: "Acala Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6756.png",
    symbol: "ACA",
  },
  {
    name: "Venus BUSD",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7959.png",
    symbol: "vBUSD",
  },
  {
    name: "Artificial Liquid Intelligence",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/16876.png",
    symbol: "ALI",
  },
  {
    name: "Ark",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1586.png",
    symbol: "ARK",
  },
  {
    name: "Clearpool",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/12573.png",
    symbol: "CPOOL",
  },
  {
    name: "Unizen",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9263.png",
    symbol: "ZCX",
  },
  {
    name: "Ergo",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/1762.png",
    symbol: "ERG",
  },
  {
    name: "Clash of Lilliput",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/20672.png",
    symbol: "COL",
  },
  {
    name: "Wilder World",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9674.png",
    symbol: "WILD",
  },
  {
    name: "Loom Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/2588.png",
    symbol: "LOOM",
  },
  {
    name: "Hippocrat",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3600.png",
    symbol: "HPO",
  },
  {
    name: "ARPA",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4039.png",
    symbol: "ARPA",
  },
  {
    name: "Telos",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/4660.png",
    symbol: "TLOS",
  },
  {
    name: "MOBOX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9175.png",
    symbol: "MBOX",
  },
  {
    name: "Alien Worlds",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9119.png",
    symbol: "TLM",
  },
  {
    name: "EURC",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/20641.png",
    symbol: "EURC",
  },
  {
    name: "MARBLEX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/18895.png",
    symbol: "MBX",
  },
  {
    name: "Wen",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29175.png",
    symbol: "WEN",
  },
  {
    name: "Decentralized Social",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/10442.png",
    symbol: "DESO",
  },
  {
    name: "WazirX",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5161.png",
    symbol: "WRX",
  },
  {
    name: "Badger DAO",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7859.png",
    symbol: "BADGER",
  },
  {
    name: "Secret",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/5604.png",
    symbol: "SCRT",
  },
  {
    name: "Undeads Games",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/29933.png",
    symbol: "UDS",
  },
  {
    name: "PeiPei (ETH)",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/31632.png",
    symbol: "PEIPEI",
  },
  {
    name: "Locus Chain",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/3855.png",
    symbol: "LOCUS",
  },
  {
    name: "NFPrompt",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/28778.png",
    symbol: "NFP",
  },
  {
    name: "Shadow Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/16868.png",
    symbol: "SHDW",
  },
  {
    name: "Toshi",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/27750.png",
    symbol: "TOSHI",
  },
  {
    name: "Pangolin",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/8422.png",
    symbol: "PNG",
  },
  {
    name: "Data Ownership Protocol",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/31456.png",
    symbol: "DOP",
  },
  {
    name: "Radworks",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/6843.png",
    symbol: "RAD",
  },
  {
    name: "Across Protocol",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/22620.png",
    symbol: "ACX",
  },
  {
    name: "GameBuild",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/31246.png",
    symbol: "GAME",
  },
  {
    name: "Bifrost",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/7817.png",
    symbol: "BFC",
  },
  {
    name: "LimeWire",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/24476.png",
    symbol: "LMWR",
  },
  {
    name: "HashAI",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30369.png",
    symbol: "HASHAI",
  },
  {
    name: "Pirate Nation",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/31704.png",
    symbol: "PIRATE",
  },
  {
    name: "RACA",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/11346.png",
    symbol: "RACA",
  },
  {
    name: "Toko Token",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9020.png",
    symbol: "TKO",
  },
  {
    name: "Access Protocol",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/23195.png",
    symbol: "ACS",
  },
  {
    name: "PlatON",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/9720.png",
    symbol: "LAT",
  },
  {
    name: "Zebec Network",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/30636.png",
    symbol: "ZBCN",
  },
  {
    name: "Solidus Ai Tech",
    logoSrc: "https://s2.coinmarketcap.com/static/img/coins/128x128/19055.png",
    symbol: "AITECH",
  },
];

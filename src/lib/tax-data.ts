export interface Holding {
  coin: string;
  coinName: string;
  logo: string;
  currentPrice: number;
  totalHolding: number;
  averageBuyPrice: number;
  stcg: { balance: number; gain: number };
  ltcg: { balance: number; gain: number };
}

export const capitalGains = {
  stcg: { profits: 70200.88, losses: 1548.53 },
  ltcg: { profits: 5020, losses: 3050 },
};

export const holdings: Holding[] = [
  {
    coin: "USDC",
    coinName: "USDC",
    logo: "https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694",
    currentPrice: 85.41,
    totalHolding: 0.0015339999999994802,
    averageBuyPrice: 1.5863185433764244,
    stcg: { balance: 0.0015339999999994802, gain: 0.12858552735441697 },
    ltcg: { balance: 0, gain: 0 },
  },
  {
    coin: "ETH",
    coinName: "Ethereum",
    logo: "https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628",
    currentPrice: 216182,
    totalHolding: 0.0004211938732637162,
    averageBuyPrice: 3909.792264648455,
    stcg: { balance: 0.0004211938732637162, gain: 89.40775336229291 },
    ltcg: { balance: 0, gain: 0 },
  },
  {
    coin: "MATIC",
    coinName: "Polygon",
    logo: "https://coin-images.coingecko.com/coins/images/4713/large/polygon.png?1698233745",
    currentPrice: 22.22,
    totalHolding: 2.75145540184285,
    averageBuyPrice: 0.6880274617804887,
    stcg: { balance: 2.75145540184285, gain: 59.244262152615974 },
    ltcg: { balance: 0, gain: 0 },
  },
  {
    coin: "SOL",
    coinName: "Solana",
    logo: "https://coin-images.coingecko.com/coins/images/4128/large/solana.png?1718769756",
    currentPrice: 14500,
    totalHolding: 1.245,
    averageBuyPrice: 18000,
    stcg: { balance: 1.245, gain: -4358.75 },
    ltcg: { balance: 0, gain: 0 },
  },
  {
    coin: "BTC",
    coinName: "Bitcoin",
    logo: "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
    currentPrice: 5800000,
    totalHolding: 0.0421,
    averageBuyPrice: 4900000,
    stcg: { balance: 0, gain: 0 },
    ltcg: { balance: 0.0421, gain: 37890 },
  },
  {
    coin: "DOGE",
    coinName: "Dogecoin",
    logo: "https://coin-images.coingecko.com/coins/images/5/large/dogecoin.png?1696501409",
    currentPrice: 12.4,
    totalHolding: 1820.55,
    averageBuyPrice: 18.9,
    stcg: { balance: 1820.55, gain: -11833.575 },
    ltcg: { balance: 0, gain: 0 },
  },
  {
    coin: "AVAX",
    coinName: "Avalanche",
    logo: "https://coin-images.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png?1696512369",
    currentPrice: 2950,
    totalHolding: 3.7,
    averageBuyPrice: 2100,
    stcg: { balance: 0, gain: 0 },
    ltcg: { balance: 3.7, gain: 3145 },
  },
  {
    coin: "ADA",
    coinName: "Cardano",
    logo: "https://coin-images.coingecko.com/coins/images/975/large/cardano.png?1696502090",
    currentPrice: 38.5,
    totalHolding: 540.2,
    averageBuyPrice: 52,
    stcg: { balance: 540.2, gain: -7292.7 },
    ltcg: { balance: 0, gain: 0 },
  },
  {
    coin: "LINK",
    coinName: "Chainlink",
    logo: "https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009",
    currentPrice: 1180,
    totalHolding: 8.4,
    averageBuyPrice: 980,
    stcg: { balance: 8.4, gain: 1680 },
    ltcg: { balance: 0, gain: 0 },
  },
];

export const fmtUSD = (n: number) =>
  `$ ${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export const fmtNum = (n: number, max = 6) =>
  n.toLocaleString("en-US", { maximumFractionDigits: max });
import { publicConfig } from "../../config/publicConfig";

const links = [
  {
    title: "Docs",
    links: [
      { label: "IoTeX Docs", href: publicConfig.DEV_DOCS },
      { label: "Web3 Development", href: publicConfig.DEV_DOCS_WEB3 },
      { label: "MachineFi Development", href: publicConfig.DEV_DOCS_MACHINEFI },
      { label: "Launch a Dapp", href: publicConfig.DEV_DOCS_LAUNCH_A_DAPP },
    ],
  },
  {
    title: "Dev Community",
    links: [
      { label: "Discord", href: publicConfig.DISCORD_INVITE },
      { label: "Twitter", href: publicConfig.TWITTER_LINK },
      { label: "YouTube", href: publicConfig.YOUTUBE_LINK },
      { label: "Halo Grants", href: publicConfig.DEV_DOCS_HALO_GRANTS },
      { label: "Submit Grant Request", href: publicConfig.HALO_GRANTS },
    ],
  },
  {
    title: "Blockchain",
    links: [
      {
        label: "Block Explorer (mainnet)",
        href: publicConfig.BLOCK_EXPLORER_MAINNET,
      },
      {
        label: "Block Explorer (testnet)",
        href: publicConfig.BLOCK_EXPLORER_TESTNET,
      },
      { label: "Staking portal", href: publicConfig.STAKING_PORTAL },
    ],
  },
  {
    title: "Tools",
    links: [
      { label: "Command Line Client", href: publicConfig.IOCTL },
      { label: "ioPay Wallet", href: publicConfig.IOPAY },
    ],
  },
];

export default links;

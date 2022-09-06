export const publicConfig = {
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000",
  CONTENT_URL: "https://github.com/iotexproject/dev-portal-content",
  IMG_BASE_PATH: process.env.NEXT_PUBLIC_IMG_BASE_PATH || "", // for development env

  GITHUB_PERSONAL_ACCESS_TOKEN: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  GITHUB_REPOS: ["iotex-core", "iotex-token-metadata"],
  GITHUB_CONTENT_REQUEST_URL: `https://api.github.com/repos/${process.env.NEXT_PUBLIC_GITHUB_CONTENT_OWNER}/${process.env.NEXT_PUBLIC_GITHUB_CONTENT_REPO}/contents/`,

  EMAIL_SENDER_NAME: process.env.EMAIL_SENDER_NAME || "",
  EMAIL_DOMAIN: process.env.EMAIL_DOMAIN || "",

  APOLLO_CLIENT_GRAPHQL_URI:
    process.env.NEXT_PUBLIC_APOLLO_CLIENT_GRAPHQL_URI ||
    "http://localhost:8000/api/graphql",

  ANTENNA_ENDPOINT_MAINNET: "https://api.iotex.one:443",
  ANTENNA_ENDPOINT_TESTNET: "https://api.testnet.iotex.one:443",

  // usefull links
  TERMS_OF_USE: "https://iotex.io/policy",

  DEV_DOCS: "https://docs.iotex.io",
  DEV_DOCS_WEB3: "https://docs.iotex.io/dapp-development/web3-development",
  DEV_DOCS_LAUNCH_A_DAPP: "https://docs.iotex.io/dapp-development/launch-dapp",
  DEV_DOCS_HALO_GRANTS:
    "https://docs.iotex.io/dapp-development/developer-grants/the-halo-grants-program",
  DEV_DOCS_MACHINEFI: "https://docs.iotex.io/layer2/machinefi-workflow",

  HALO_GRANTS: "https://community.iotex.io/c/halo-grants/61",
  IOCTL: "https://docs.iotex.io/get-started/iotex-wallets/command-line-client",
  BLOCK_EXPLORER_MAINNET: "https://iotexscan.io",
  BLOCK_EXPLORER_TESTNET: "https://testnet.iotexscan.io",
  IOPAY: "https://iopay.me",
  IOTEX_LANDING: "https://iotex.io/",
  MACHINEFI_PORTAL_TESTNET: "https://portal-testnet.machinefi.com/",
  PEBBLE_DATA_GENERATOR: "https://simulator.machinefi.com",
  RUN_A_NODE: "https://delegates.iotex.io/introduction/welcome",
  STAKING_PORTAL: "https://stake.iotex.io",
  IOTX_FAUCET: "https://faucet.iotex.io",

  // socials
  TWITTER_LINK: "https://twitter.com/iotex_dev",
  YOUTUBE_LINK:
    "https://www.youtube.com/c/IoTeXOfficialChannel/playlists?view=50&sort=dd&shelf_id=4",
  DISCORD_LINK: "https://iotex.io/devdiscord",
  DISCORD_INVITE: "https://discord.com/invite/q5eYde2CU7",
  GITHUB_LINK: "https://github.com/iotexproject",
  GITHUB_CONTENT: "https://github.com/iotexproject/dev-portal-content",
  GITHUB_DEV_PORTAL: "https://github.com/iotexproject/developer-portal",
  DEV_PORTAL_BASE_PATH: "https://developers.iotex.io",

  IOTX_T_FAUCET_DROP_AMOUNT: "100",
  FAUCET_DROP_INTERVAL_HOURS: 24,

  DEVS_EMAIL: "devs@developers.iotex.io",
};

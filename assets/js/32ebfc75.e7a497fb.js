"use strict";(self.webpackChunkv_1=self.webpackChunkv_1||[]).push([[8848],{4519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var i=n(4848),s=n(8453),a=n(1122);const o={sidebar_position:30,title:"Extend Liquidity Backing",description:"Learn how a DGNX holder can propose change to assets stored within Liquidity Backing.",image:"/img/social-card-dao-liquidity-backing.png"},r="Products",d={id:"degenx-ecosystem/Products/Liquidity_Backing/AddNewTokenToLiquidityBacking",title:"Extend Liquidity Backing",description:"Learn how a DGNX holder can propose change to assets stored within Liquidity Backing.",source:"@site/docs/020-degenx-ecosystem/040-Products/Liquidity_Backing/030-AddNewTokenToLiquidityBacking.md",sourceDirName:"020-degenx-ecosystem/040-Products/Liquidity_Backing",slug:"/degenx-ecosystem/Products/Liquidity_Backing/AddNewTokenToLiquidityBacking",permalink:"/degenx-ecosystem/Products/Liquidity_Backing/AddNewTokenToLiquidityBacking",draft:!1,unlisted:!1,editUrl:"https://github.com/DEGENTOKENTEAM/docs/edit/main/docs/020-degenx-ecosystem/040-Products/Liquidity_Backing/030-AddNewTokenToLiquidityBacking.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"Extend Liquidity Backing",description:"Learn how a DGNX holder can propose change to assets stored within Liquidity Backing.",image:"/img/social-card-dao-liquidity-backing.png"},sidebar:"tutorialSidebar",previous:{title:"How Does it Work?",permalink:"/degenx-ecosystem/Products/Liquidity_Backing/LB-How-it-works"},next:{title:"Broccoliswap",permalink:"/degenx-ecosystem/Products/broccoliswap/broccoliswap"}},c={},l=[{value:"Integrating New Tokens",id:"integrating-new-tokens",level:2},{value:"Required Addresses",id:"required-addresses",level:3},{value:"To add a token to Liquidity Backing, interact with the LB smart contract at:",id:"to-add-a-token-to-liquidity-backing-interact-with-the-lb-smart-contract-at",level:4},{value:"For storing new tokens, utilizing an existing Vault is recommended:",id:"for-storing-new-tokens-utilizing-an-existing-vault-is-recommended",level:4},{value:"When adding a token paired with (W)AVAX, a new Strategy isn&#39;t necessary. Use the following address:",id:"when-adding-a-token-paired-with-wavax-a-new-strategy-isnt-necessary-use-the-following-address",level:4},{value:"Smart Contract Functionality",id:"smart-contract-functionality",level:3},{value:"Contract ABI for Integration",id:"contract-abi-for-integration",level:3},{value:"Simulation via Tenderly",id:"simulation-via-tenderly",level:3}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"products",children:"Products"}),"\n",(0,i.jsx)(a.A,{alt:"Liquidity Backing Logo",className:"vertical-timeline-element-title-img",sources:{light:"/img/light_liqback.svg",dark:"/img/dark_liqback.svg"}}),"\n",(0,i.jsx)(t.h2,{id:"integrating-new-tokens",children:"Integrating New Tokens"}),"\n",(0,i.jsxs)(t.p,{children:["Our Liquidity Backing (LB) feature supports the addition of various tokens. By default, it utilizes trading pairs with (W)AVAX on ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://traderjoe.xyz",children:"traderjoe.xyz"})})," and ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://pangolin.exchange/",children:"pangolin.exchange"})}),". These DEXs facilitate the swapping of deposited tokens to a chosen payout token. To integrate a new token, you'll need the addresses for both a valid Vault ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"_vault"})})," and a Strategy ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"_strategy"})})," ."]}),"\n",(0,i.jsx)(t.h3,{id:"required-addresses",children:"Required Addresses"}),"\n",(0,i.jsx)(t.h4,{id:"to-add-a-token-to-liquidity-backing-interact-with-the-lb-smart-contract-at",children:"To add a token to Liquidity Backing, interact with the LB smart contract at:"}),"\n",(0,i.jsxs)(t.p,{children:["LB Smart Contract Address: ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"0x62320b483C422112DE64f3F621A3f57B993029C9"})})," (",(0,i.jsx)(t.a,{href:"https://snowtrace.io/address/0x62320b483C422112DE64f3F621A3f57B993029C9",children:"View on snowtrace.io"}),")"]}),"\n",(0,i.jsx)(t.h4,{id:"for-storing-new-tokens-utilizing-an-existing-vault-is-recommended",children:"For storing new tokens, utilizing an existing Vault is recommended:"}),"\n",(0,i.jsxs)(t.p,{children:["Existing Vault Address: ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"0x878a903310298c73182A91C988b5e8b26A59131A"})})," (",(0,i.jsx)(t.a,{href:"https://snowtrace.io/address/0x878a903310298c73182A91C988b5e8b26A59131A",children:"View on snowtrace.io"}),")"]}),"\n",(0,i.jsx)(t.h4,{id:"when-adding-a-token-paired-with-wavax-a-new-strategy-isnt-necessary-use-the-following-address",children:"When adding a token paired with (W)AVAX, a new Strategy isn't necessary. Use the following address:"}),"\n",(0,i.jsxs)(t.p,{children:["Recommended Strategy Address: ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"0x5947D33Eb4bfBAa155193a91fd6639040631C2A1"})})," (",(0,i.jsx)(t.a,{href:"https://snowtrace.io/address/0x5947D33Eb4bfBAa155193a91fd6639040631C2A1",children:"View on snowtrace.io"}),")"]}),"\n",(0,i.jsxs)(t.p,{children:["Next, select the token ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"_token"})})," you wish to add."]}),"\n",(0,i.jsx)(t.h3,{id:"smart-contract-functionality",children:"Smart Contract Functionality"}),"\n",(0,i.jsx)(t.p,{children:"Here's how the function  looks within the LB smart contract"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"/**\n * Adds a token which can be deposited\n * @param _token address of the token\n * @param _vault address of the vault the token should be stored in\n * @param _strategy address of the strategy that should be applied to the token\n * @dev this method checks if there is already a token, so it couldn't be added twice.\n * It checks if the given vault address is already existing, so it can register the token.\n * It checks if the given strategy is already existing, so it can check if the strategy is\n * the right strategy to be applied to this token, so it will check its existency of a swap\n * possibility. If it can be swapped, it will assign the strategy to the token and sets the\n * allowance to MAX_INT. The token is enabled by default.\n * It is gate kept by the ROLE_DEPOSITER to be deposited, so no worries here to open things\n * up which shouldn't.\n */\nfunction addToken(\n    address _token,\n    address _vault,\n    address _strategy\n) external onlyRole(ROLE_GOVERNANCE) {\n    if (_token == address(0)) revert Controller_AddressZero();\n    if (depositTokens[_token].isToken) revert Controller_TokenAlreadyExists();\n    if (!addressCheck[_vault].isVault) revert Controller_VaultNotValid();\n    if (!addressCheck[_strategy].isStrategy) revert Controller_StrategyNotValid();\n\n    IStrategy strategy = IStrategy(_strategy);\n    if (!strategy.check(_token)) revert Controller_StrategyNotValidForToken();\n    if (!checkStrategyValidityByPullToken(strategy.pullToken())) revert Controller_MissingSwapper();\n\n    {\n        // assign vault to token and register asset\n        depositTokens[_token].vault = IVault(_vault);\n        depositTokens[_token].vault.registerAsset(_token);\n        IERC20(_token).approve(_vault, MAX_INT);\n        emit AssignedTokenVault(_token, _vault);\n    }\n\n    {\n        // assign strategy to token\n        depositTokens[_token].strategy = strategy;\n        IERC20(_token).approve(_strategy, MAX_INT);\n        emit AssignedTokenStrategy(_token, _strategy);\n    }\n\n    depositTokens[_token].isToken = true;\n    depositTokens[_token].enabled = true;\n    allTokens.push(_token);\n\n    emit TokenAdded(_token, _vault, _strategy);\n}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"contract-abi-for-integration",children:"Contract ABI for Integration"}),"\n",(0,i.jsx)(t.p,{children:"To call the function on the LB smart contract, use this ABI specification:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "inputs": [\n      {\n        "internalType": "address",\n        "name": "_token",\n        "type": "address"\n      },\n      {\n        "internalType": "address",\n        "name": "_vault",\n        "type": "address"\n      },\n      {\n        "internalType": "address",\n        "name": "_strategy",\n        "type": "address"\n      }\n    ],\n    "name": "addToken",\n    "outputs": [],\n    "stateMutability": "nonpayable",\n    "type": "function"\n  }\n]\n'})}),"\n",(0,i.jsx)(t.h3,{id:"simulation-via-tenderly",children:"Simulation via Tenderly"}),"\n",(0,i.jsxs)(t.p,{children:["Before executing, it's wise to simulate the interaction with the smart contract through Tenderly. This helps verify the token's eligibility for addition. Use the TimelockController address.\nTimelockController Address: ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"0xC07017739f09778ccea0468dA7b8381f1967Eb95"})})," (",(0,i.jsx)(t.a,{href:"https://snowtrace.io/address/0xC07017739f09778ccea0468dA7b8381f1967Eb95",children:"View on snowtrace.io"}),") for the simulation, as it represents the sender for DAO proposal executions."]})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(6540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
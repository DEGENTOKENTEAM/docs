"use strict";(self.webpackChunkv_1=self.webpackChunkv_1||[]).push([[331],{9056:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=t(4848),a=t(8453),n=t(1122);const o={sidebar_position:20,title:"How Does it Work?",description:"Learn more about how Liquidity Backing mechanisms works.",image:"/img/social-card-lb-how-it-works.png"},r="Products",d={id:"degenx-ecosystem/Products/Liquidity_Backing/LB-How-it-works",title:"How Does it Work?",description:"Learn more about how Liquidity Backing mechanisms works.",source:"@site/docs/020-degenx-ecosystem/040-Products/Liquidity_Backing/020-LB-How-it-works.md",sourceDirName:"020-degenx-ecosystem/040-Products/Liquidity_Backing",slug:"/degenx-ecosystem/Products/Liquidity_Backing/LB-How-it-works",permalink:"/degenx-ecosystem/Products/Liquidity_Backing/LB-How-it-works",draft:!1,unlisted:!1,editUrl:"https://github.com/DEGENTOKENTEAM/docs/edit/main/docs/020-degenx-ecosystem/040-Products/Liquidity_Backing/020-LB-How-it-works.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,title:"How Does it Work?",description:"Learn more about how Liquidity Backing mechanisms works.",image:"/img/social-card-lb-how-it-works.png"},sidebar:"tutorialSidebar",previous:{title:"Liquidity Backing",permalink:"/degenx-ecosystem/Products/Liquidity_Backing/liquidity_backing"},next:{title:"Extend Liquidity Backing",permalink:"/degenx-ecosystem/Products/Liquidity_Backing/AddNewTokenToLiquidityBacking"}},l={},c=[{value:"How Does it Work?",id:"how-does-it-work",level:2},{value:"Depositable Assets",id:"depositable-assets",level:3},{value:"Want Assets",id:"want-assets",level:3},{value:"Vaults",id:"vaults",level:3},{value:"Strategies",id:"strategies",level:3},{value:"Swappers",id:"swappers",level:3},{value:"Controller",id:"controller",level:3},{value:"Simplified Payout Example",id:"simplified-payout-example",level:2},{value:"Simplified Payout Diagram",id:"simplified-payout-diagram",level:3},{value:"Simplified Raw Payout Diagram",id:"simplified-raw-payout-diagram",level:3}];function u(e){const i={h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"products",children:"Products"}),"\n",(0,s.jsx)(n.A,{alt:"Liquidity Backing Logo",className:"vertical-timeline-element-title-img",sources:{light:"/img/light_liqback.svg",dark:"/img/dark_liqback.svg"}}),"\n",(0,s.jsx)(i.h2,{id:"how-does-it-work",children:"How Does it Work?"}),"\n",(0,s.jsx)(i.p,{children:"Liquidity Backing is made up of several key components: Vaults, Strategies, Swappers, and the Controller. There are also two types of assets involved: Depositable assets and Want assets."}),"\n",(0,s.jsx)(i.h3,{id:"depositable-assets",children:"Depositable Assets"}),"\n",(0,s.jsx)(i.p,{children:"These are the tokens you can put into the Liquidity Backing system. However, not just any asset can be added. It has to be approved by the DAO, and a thorough check is done to ensure any deposited asset can be withdrawn, either as the same type of asset or as a different ERC20 token."}),"\n",(0,s.jsx)(i.h3,{id:"want-assets",children:"Want Assets"}),"\n",(0,s.jsx)(i.p,{children:"Want assets are the tokens you can get out of the system by trading in your DGNX tokens. The DAO decides which assets are available."}),"\n",(0,s.jsx)(i.h3,{id:"vaults",children:"Vaults"}),"\n",(0,s.jsx)(i.p,{children:"Think of Vaults as big piggy banks for the Liquidity Backing system."}),"\n",(0,s.jsx)(i.p,{children:"They store the depositable assets and can be updated to change their functionality without moving the assets around. Only certain approved assets can be stored, and all important actions are protected so only the Liquidity Backing system can access them. The DAO has control over these vaults, including recovering accidentally deposited assets and adding new vaults."}),"\n",(0,s.jsx)(i.h3,{id:"strategies",children:"Strategies"}),"\n",(0,s.jsx)(i.p,{children:"Strategies are the plans for converting stored assets into another desired asset. They're designed to handle a range of assets and conversions, like turning any token into WAVAX, USDC, or WETH.e."}),"\n",(0,s.jsx)(i.p,{children:"These strategies are fixed and can't be updated but can be replaced by the DAO. They know the target asset for conversion and are protected so only the Liquidity Backing system can use them."}),"\n",(0,s.jsx)(i.h3,{id:"swappers",children:"Swappers"}),"\n",(0,s.jsx)(i.p,{children:"Swappers are similar to Strategies but focus on converting one specific asset into another. While Strategies might convert multiple assets to WAVAX, Swappers could turn that WAVAX into a Want asset. Only the Controller can call on Swappers, and the DAO can add more if needed."}),"\n",(0,s.jsx)(i.h3,{id:"controller",children:"Controller"}),"\n",(0,s.jsx)(i.p,{children:"The Controller is the central part of the Liquidity Backing system, coordinating all the parts. It handles tasks like asset deposits, payouts, and managing the various components (Vaults, Strategies, Swappers). It's designed to keep the system secure and ensure only the DAO can make significant changes."}),"\n",(0,s.jsx)(i.p,{children:"Here is a full breakdown of tasks the Controller handles:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Deposit Assets"}),"\n",(0,s.jsx)(i.li,{children:"Disbursement of Want Assets"}),"\n",(0,s.jsx)(i.li,{children:"Statistical information and metrics on Liquidity Backing"}),"\n",(0,s.jsx)(i.li,{children:"Managing swappers"}),"\n",(0,s.jsx)(i.li,{children:"Managing strategies"}),"\n",(0,s.jsx)(i.li,{children:"Managing Vaults"}),"\n",(0,s.jsx)(i.li,{children:"Managing of Want Tokens"}),"\n",(0,s.jsx)(i.li,{children:"Managing of Deposit Tokens"}),"\n",(0,s.jsx)(i.li,{children:"Managing of depositors of Deposit Tokens"}),"\n",(0,s.jsx)(i.li,{children:"Checking mechanisms to ensure the integrity of the system"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"simplified-payout-example",children:"Simplified Payout Example"}),"\n",(0,s.jsx)(i.p,{children:"To illustrate how payouts work, consider wanting to exchange your BTC.b stored in the vault for WAVAX:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"You request a WAVAX payout from Liquidity Backing."}),"\n",(0,s.jsx)(i.li,{children:"You transfer your DGNX to Liquidity Backing, which then burns it."}),"\n",(0,s.jsx)(i.li,{children:"Liquidity Backing retrieves your share of BTC.b from the Vault."}),"\n",(0,s.jsx)(i.li,{children:"It then uses a Strategy to swap BTC.b for USDC."}),"\n",(0,s.jsx)(i.li,{children:"Finally, a Swapper converts the USDC to WAVAX, which is paid out to you."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"simplified-payout-diagram",children:"Simplified Payout Diagram"}),"\n",(0,s.jsx)(i.p,{children:"If we store BTC.b in our vault and want to have it paid out as WAVAX, strategies must ensure us that they can convert the asset into an assets that's handled by a DEX and if it is at least a swappable entity which can be swapped into WAVAX."}),"\n",(0,s.jsx)(i.mermaid,{value:"sequenceDiagram\nHodler->>Liquidity Backing: Request payout in WAVAX \nHodler--\x3e>Liquidity Backing: Transfer DGNX\nLiquidity Backing--\x3e>Liquidity Backing: Burn DGNX\nLiquidity Backing->>Vault: Get hodler BTC.b share of vault \nVault->>Liquidity Backing: Receive BTC.b based on share\nLiquidity Backing->>Strategy: Swap BTC.b to USDC\nStrategy->>Liquidity Backing: Receive USDC\nNote right of Strategy: The default Strategy <br>can handle each<br> ERC20/WAVAX pair <br>on Avalanche DEXs\nLiquidity Backing->>Swapper: Swap USDC to WAVAX\nSwapper->>Hodler: Payout WAVAX"}),"\n",(0,s.jsx)(i.h3,{id:"simplified-raw-payout-diagram",children:"Simplified Raw Payout Diagram"}),"\n",(0,s.jsx)(i.p,{children:"If we store BTC.b in our vault and want to have it paid out as WAVAX, strategies must ensure us that they can convert the asset into an assets that's handled by a DEX and if it is at least a swappable entity which can be swapped into WAVAX."}),"\n",(0,s.jsx)(i.mermaid,{value:"sequenceDiagram\nHodler->>Liquidity Backing: Request payout in WAVAX \nHodler->>Liquidity Backing: Transfer DGNX\nLiquidity Backing->>Liquidity Backing: Burn DGNX\nLiquidity Backing->>Vault: Get hodler BTC.b share of vault \nVault->>Liquidity Backing: Receive BTC.b based on share\nLiquidity Backing->>Hodler: Payout WAVAX"})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>r});var s=t(6540);const a={},n=s.createContext(a);function o(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);
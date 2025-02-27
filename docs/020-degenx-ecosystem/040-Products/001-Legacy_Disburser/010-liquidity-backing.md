---
title: Legacy Disburser
description: DEGENX has introduced a pioneering Legacy Disburser, revolutioning the migration process for tokens. Learn more about Legacy Disburser today.
id: legacy_disburser
sidebar_position: 1
---

# DGNX Legacy Disburser - Vesting & Distribution Tool

The `DGNXLegacyDisburser` smart contract is a vesting and migration tool created to distribute DGNX tokens to legacy holders of the DEGEN SmartDeFi token.

## Contract Address
- Legacy Disburser (Avalanche): [0x8a0E3264Da08bf999AfF5a50AabF5d2dc89fab79](https://snowtrace.io/address/0x8a0E3264Da08bf999AfF5a50AabF5d2dc89fab79/contract/43114/code)

## Background
DEGEN was a SMARTDeFi token on Binance Smart Chain (BSC). Due to severe hacks in the FEG ecosystem, DEGEN lost its liquidity because its liquidity pool was paired with `fBNB`, which was completely drained during the attack.

- DEGEN (BSC): [0xcfe058c0646c0eec7e042744d9b8787d0f047a34](https://bscscan.com/token/0xcfe058c0646c0eec7e042744d9b8787d0f047a34)
- DGNX (Avalanche): [0x51e48670098173025C477D9AA3f0efF7BF9f7812](https://snowtrace.io/token/0x51e48670098173025C477D9AA3f0efF7BF9f7812)

### What Happened?
1. **Flashloan Exploit (May 2022)**  
   The FEG ecosystem suffered from a major flashloan exploit targeting the `swapToSwap` function, draining around $1.3 million.
   - [CertiK Analysis](https://www.certik.com/resources/blog/w6AxRmf6l2ow4zL884gr8-feg-token-flashloan-exploit-analysis)

2. **SmartBridge Exploit (December 2024)**  
   In December 2024, the SmartBridge functionality of the FEG ecosystem was exploited, resulting in unauthorized withdrawals and a 99% price crash of FEG.
   - [Hacken Analysis](https://hacken.io/industry-news-and-insights/feg-feed-every-gorilla-exploit-analysis-by-hacken/)

---
## Migration to DGNX
As a result of these incidents, the DEGEN team initiated a full migration from BSC to Avalanche. DEGEN holders were eligible to receive DGNX at a 1:1 ratio based on a **snapshot** taken before the migration.

Only **snapshot holders** could participate in the `DGNXLegacyDisburser` and claim their DGNX allocations.

---
## Vesting & Claiming Process

### Step 1 - Initial Claim
Eligible users (identified in the snapshot) could claim an **initial percentage** of their DGNX allocation when the disburser started.

### Step 2 - Recurring Claims
Users could claim additional DGNX in recurring intervals (monthly) over time until their full allocation was claimed.

### Step 3 - Forfeiture of Unclaimed Tokens
Users who failed to make their initial claim within a set timeframe (Tardy Holder Period) forfeited their allocation. These forfeited tokens were sent to the DGNX Locker contract.

---
## Summary

| Process                | Details |
|--------------------|---------|
| **Eligible Users**  | Snapshot holders of DEGEN on BSC |
| **Token Migration** | 1:1 from DEGEN (BSC) to DGNX (Avalanche) |
| **Initial Claim**   | First payout after start |
| **Recurring Claims**| Monthly claims until fully vested |
| **Forfeiture**      | Unclaimed tokens after initial period are locked |

This structured approach ensured that only real DEGEN holders could benefit, encouraged holding DGNX, and prevented immediate sell-offs.

---
## Contract Links

- Legacy Disburser: [0x8a0E3264Da08bf999AfF5a50AabF5d2dc89fab79](https://snowtrace.io/address/0x8a0E3264Da08bf999AfF5a50AabF5d2dc89fab79/contract/43114/code)
- DGNX (Avalanche): [0x51e48670098173025C477D9AA3f0efF7BF9f7812](https://snowtrace.io/token/0x51e48670098173025C477D9AA3f0efF7BF9f7812)
- DEGEN (BSC): [0xcfe058c0646c0eec7e042744d9b8787d0f047a34](https://bscscan.com/token/0xcfe058c0646c0eec7e042744d9b8787d0f047a34)

---
## Related Hack Reports

- [CertiK Report - FEG Flashloan Exploit](https://www.certik.com/resources/blog/w6AxRmf6l2ow4zL884gr8-feg-token-flashloan-exploit-analysis)
- [Hacken Report - FEG SmartBridge Exploit](https://hacken.io/industry-news-and-insights/feg-feed-every-gorilla-exploit-analysis-by-hacken/)

---
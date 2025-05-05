<a href="https://cosmos-governance-ninja.alexanderfsp.tech">
  <img src="./static/banner.png?v=1" alt="" />
</a>

## 📙 Description

[Cosmos Governance Ninja](https://cosmos-governance-ninja.alexanderfsp.tech) is a minimalistic client app that provides bulk voting capabilities on proposals in Cosmos CDK-based blockchains. Currently, about 20 networks are supported, such as Cosmos Hub, Osmosis, dYdX, Saga, Stride, Kujira, Stargaze, Juno, Kava, Nibiru, etc.

#### What problems does this application solve:
* It reduces the number of necessary actions. Those who use a cold wallet (e.g., Ledger) know how tedious it can be to click buttons countless times to confirm a transaction. When voting through this application, all votes are collected in one "batch", requiring only one signature.
* It reduces costs. Since all the votes are collected together, this significantly reduces the gas limit required to complete the transaction. For example, in Cosmos Hub, processing a transaction with only 1 vote will require ~55,000 gas. But if it already contains 2, then the limit will be ~65,000 (-40% compared to if we voted separately).

#### Technological stack:

* `Nx@18.2.3` & `Angular@17.3`
* `@cosmjs/stargate@0.32.3`
* Free RPC & REST endpoints [from PublicNode, which is powered by Allnodes](https://www.publicnode.com) ❤️

## 🎬 Demo

https://github.com/AlexanderFSP/cosmos-governance-ninja/assets/30397060/798c3950-eac5-4fd8-814f-13c5ba3e7c88

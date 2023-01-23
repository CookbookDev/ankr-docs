# Ethereum API

In order for your Web3 application to interact with the Ethereum blockchain — either by reading blockchain data or sending transactions to the network — it must connect to an Ethereum node.

For this purpose, every [Ethereum client](https://ethereum.org/en/developers/docs/nodes-and-clients/#execution-clients) implements a [JSON-RPC specification](https://github.com/ethereum/execution-apis), so there are a uniform set of methods that applications can rely on regardless of the specific node or client implementation.

[JSON-RPC](https://www.jsonrpc.org/specification) is a stateless, light-weight remote procedure call (RPC) protocol. It defines several data structures and the rules around their processing. It is transport agnostic in that the concepts can be used within the same process, over sockets, over HTTP, or in many various message passing environments. It uses JSON (RFC 4627) as data format.

## Gossip, State, History

A handful of core JSON-RPC methods query data from the Ethereum network, and fall neatly into three main categories: Gossip, State, and History. Use the links in these sections to jump to each method, or use the table of contents to explore the whole list of methods.

### Gossip methods

These methods track the head of the chain. This is how transactions make their way around the network, find their way into blocks, and how clients find out about new blocks.

  * [`eth_blockNumber`](/rpc-service/chains/chains-api/ethereum/#eth_blocknumber) — returns the number of most recent block.
  * [`eth_sendRawTransaction`](/rpc-service/chains/chains-api/ethereum/#eth_sendrawtransaction) — creates a new message call transaction or a contract creation for signed transactions.

### State methods

Methods that report the current state of all the data stored. The "state" is like one big shared piece of RAM, and includes account balances, contract data, and gas estimations.

  * [`eth_getBalance`](/rpc-service/chains/chains-api/ethereum/#eth_getbalance) — returns the balance of the account specified by address.
  * [`eth_getStorageAt`](/rpc-service/chains/chains-api/ethereum/#eth_getstorageat) — returns the value from a storage position at an address specified.
  * [`eth_getTransactionCount`](/rpc-service/chains/chains-api/ethereum/#eth_gettransactioncount) — returns the number of transactions sent from an address.
  * [`eth_getCode`](/rpc-service/chains/chains-api/ethereum/#eth_getcode) — returns code at an address specified.
  * [`eth_call`](/rpc-service/chains/chains-api/ethereum/#eth_call) — executes a new message call immediately without creating a transaction on the blockchain.
  * [`eth_estimateGas`](/rpc-service/chains/chains-api/ethereum/#eth_estimategas) — generates and returns an estimate of how much gas is necessary to allow the transaction to complete.

### History methods

Fetches historical records of every block back to genesis. This is like one large append-only file, and includes all block headers, block bodies, uncle blocks, and transaction receipts.

  * [`eth_getBlockTransactionCountByHash`](/rpc-service/chains/chains-api/ethereum/#eth_getblocktransactioncountbyhash) — returns the number of transactions in a block specified by block hash.
  * [`eth_getBlockTransactionCountByNumber`](/rpc-service/chains/chains-api/ethereum/#eth_getblocktransactioncountbynumber) — returns the number of transactions in the block specified by number.
  * [`eth_getUncleCountByBlockHash`](/rpc-service/chains/chains-api/ethereum/#eth_getunclecountbyblockhash) — returns the number of uncles in a block specified by block hash.
  * [`eth_getUncleCountByBlockNumber`](/rpc-service/chains/chains-api/ethereum/#eth_getunclecountbyblocknumber) — returns the number of uncles in a block specified by block number.
  * [`eth_getBlockByHash`](/rpc-service/chains/chains-api/ethereum/#eth_getblockbyhash) — returns information for the block specified by block hash.
  * [`eth_getBlockByNumber`](/rpc-service/chains/chains-api/ethereum/#eth_getblockbynumber) — returns information for the block specified by block number.
  * [`eth_getTransactionByHash`](/rpc-service/chains/chains-api/ethereum/#eth_gettransactionbyhash) — returns information on a transaction specified by transaction hash.
  * [`eth_getTransactionByBlockHashAndIndex`](/rpc-service/chains/chains-api/ethereum/#eth_gettransactionbyblockhashandindex) — returns information on a transaction specified by block hash and transaction index position.
  * [`eth_getTransactionByBlockNumberAndIndex`](/rpc-service/chains/chains-api/ethereum/#eth_gettransactionbyblocknumberandindex) — returns information on a transaction by block number and transaction index position.
  * [`eth_getTransactionReceipt`](/rpc-service/chains/chains-api/ethereum/#eth_gettransactionreceipt) — returns the receipt of a transaction by transaction hash.
  * [`eth_getUncleByBlockHashAndIndex`](/rpc-service/chains/chains-api/ethereum/#eth_getunclebyblockhashandindex) — returns information about an uncle of a block by hash and uncle index position.
  * [`eth_getUncleByBlockNumberAndIndex`](/rpc-service/chains/chains-api/ethereum/#eth_getunclebyblocknumberandindex) — returns information about an uncle of a block by number and uncle index position.

## `web3_clientVersion`

> Returns the current client version.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): None.

### Returns
<br/>

  * `<string>`: the current client version.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "web3_clientVersion",
      "params": [],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "Geth/v1.10.26-stable-e5eb32ac/linux-amd64/go1.18.5"
}
```

---

## `web3_sha3`

> Returns Keccak-256 (not the standardized SHA3-256) of the given data.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    * `<string>` (data): the data to convert into a SHA3 hash.

### Returns
<br/>

  * `<string>` (data): the SHA3 result of the given string.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "web3_sha3",
      "params": ["0x68656c6c6f20776f726c64"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad"
}
```

---

## `net_version`

> Returns the current network ID.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): None.

### Returns
<br/>

  * `<string>`: the current network ID.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "net_version",
      "params": [],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "1"
}
```

---

## `net_listening`

> Returns `true` if client is actively listening for network connections.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): None.

### Returns
<br/>

  * `<boolean>`: `true` when listening, otherwise `false`.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "net_listening",
      "params": [],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": true
}
```

---

## `eth_gasPrice`

> Returns the current price per gas in wei.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): None.

### Returns
<br/>

  * `<string>` (quantity): the current gas price in wei.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_gasPrice",
      "params": [],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x2b2a3ec91"
}
```

---

## `eth_accounts`

> Returns a list of addresses owned by client.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): None.

### Returns
<br/>

  * `<array>` (string; data, 20 bytes): addresses owned by the client.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_accounts",
      "params": [],
      "id": 1
    }'
```

### Response example

```json
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": [
        "0x407d73d8a49eeb85d32cf465507dd71d507100c1"
    ]
}
```

---

## `eth_blockNumber`

> Returns the number of most recent block.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): None.

### Returns
<br/>

  * `<string>` (quantity): the current block number the client is on.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_blockNumber",
      "params": [],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0xf5f277"
}
```

---

## `eth_getBalance`

> Returns the balance of the account specified by address.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. `<string>` (data, 20 bytes): an address to check for balance.
    2. `<string>` (quantity|tag): either the hex value of a _block number_ or one of the following _block tags_:
        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Returns
<br/>

  * `<string>` (quantity): the current balance in wei.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getBalance",
      "params": ["0x8D97689C9818892B700e27F316cc3E41e17fBeb9", "latest"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x2c85c3ecfcb5fb"
}
```

---

## `eth_getStorageAt`

> Returns the value from a storage position at an address specified.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. `<string>` (data, 20 bytes): an address of the storage (hex encoded).
    2. `<string>` (quantity): a slot position in the storage (hex encoded unsigned integer).
    3. `<string>` (quantity|tag): either the hex value of a _block number_ or one of the following _block tags_:

        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Returns
<br/>

  * `<string>` (data): the value at this storage position.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getStorageAt",
      "params": ["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x0", "latest"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x0000000000000000000000000000000000000000000000000000000000000000"
}
```

---

## `eth_getTransactionCount`

> Returns the number of transactions sent from an address.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. `<string>` (data, 20 bytes): an address.
    2. `<string>` (quantity|tag): either the hex value of a _block number_ or one of the following _block tags_:

        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Returns
<br/>

  * `<string>` (quantity): the number of transactions send from this address.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getTransactionCount",
      "params": ["0x8D97689C9818892B700e27F316cc3E41e17fBeb9", "latest"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x9"
}
```

---

## `eth_getBlockTransactionCountByHash`

> Returns the number of transactions in a block specified by block hash.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. `<string>` (data, 32 bytes): a block hash.

### Returns
<br/>

  * `<string>` (quantity): the number of transactions in this block.

### Request example:

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getBlockTransactionCountByHash",
      "params": ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x7b"
}
```

---

## `eth_getBlockTransactionCountByNumber`

> Returns the number of transactions in the block specified by number.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): 

    1. `<string>` (quantity|tag): either the hex value of a _block number_ or one of the following _block tags_:
        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Returns
<br/>

  * `<string>` (quantity): the number of transactions in this block.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getBlockTransactionCountByNumber",
      "params": "latest",
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0xb6"
}
```

---

## `eth_getUncleCountByBlockHash`

> Returns the number of uncles in a block specified by block hash.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): 

    1. `<string>` (data, 32 bytes): a block's hash.

### Returns
<br/>

  * `<string>` (quantity): the number of uncles in this block.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getUncleCountByBlockHash",
      "params": ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x0"
}
```

---

## `eth_getUncleCountByBlockNumber`

> Returns the number of uncles in a block specified by block number.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): 

    1. `<string>` (quantity|tag): either the hex value of a _block number_ or one of the following _block tags_:
        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Returns
<br/>

  * `<string>` (quantity): the number of uncles in this block.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getUncleCountByBlockNumber",
      "params": ["0xc5043f"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x1"
}
```

---

## `eth_getCode`

> Returns code at a given address.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): 

    1. `<string>` (data, 20 bytes): an address to get the code from.
    2. `<string>` (quantity|tag): either the hex value of a _block number_ or one of the following _block tags_:
        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Returns
<br/>

  * `<string>` (data): the code from the given address.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getCode",
      "params": ["0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b", "0x2"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x"
}
```

---

## `eth_sign`

> Returns an EIP-191 signature over the provided data.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): 

    1. `<string>` (data, 20 bytes): an address.
    2. `<string>` (data, N bytes): a message to sign.

### Returns
<br/>

  * `<string>` (data): an EIP-191 signature.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_sign",
      "params": ["0x9b2055d370f73ec7d8a03e965129118dc8f5bf83", "0xdeadbeaf"],
      "id": 1
    }'
```

### Response example

```json
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
}
```

---

## `eth_signTransaction`

> Signs a transaction that can be submitted to the network at a later time using with [eth_sendRawTransaction](/rpc-service/chains/chains-api/ethereum-new/#eth_sendrawtransaction).

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): 

    1. `<object>` (hex encoded): the transaction object:
        * `from` (string; data, 20 bytes; required): the address the transaction is sent from.
        * `to` (string; data, 20 bytes; optional for contract creation): the address the transaction is directed to.
        * `gas` (string; quantity; optional; default: 90000): the gas provided for the transaction execution.
        * `gasPrice` (string; quantity; optional): the gas price willing to be paid by the sender in wei.
        * `value` (string; quantity; optional): the value sent with this transaction, in wei.
        * `data` (string; data): the compiled code of a contract OR the hash of the invoked method signature and encoded parameters.
        * `nonce` (string; quantity; optional): a nonce; allows to overwrite your own pending transactions that use the same nonce.

### Returns
<br/>

  * `<string>` (data): a signed transaction.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
    "jsonrpc": "2.0",
    "method": "eth_signTransaction",
    "params": [
        {
            "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
            "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
            "gas": "0x76c0",
            "gasPrice": "0x9184e72a000",
            "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
            "value": "0x9184e72a",
            "nonce": "0x689056015818adbe"
        }
    ],
    "id": 1
}'
```

### Response example

```json
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
}
```

---

## `eth_sendTransaction`

> Signs and submits a transaction.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): 

    1. `<object>` (hex encoded): the transaction object:
        * `from` (string; data, 20 bytes; required): the address the transaction is sent from.
        * `to` (string; data, 20 bytes; optional for contract creation): the address the transaction is directed to.
        * `gas` (string; quantity; optional; default: 90000): the gas provided for the transaction execution.
        * `gasPrice` (string; quantity; optional): the gas price willing to be paid by the sender in wei.
        * `value` (string; quantity; optional): the value sent with this transaction, in wei.
        * `data` (string; data): the compiled code of a contract OR the hash of the invoked method signature and encoded parameters.
        * `nonce` (string; quantity; optional): a nonce; allows to overwrite your own pending transactions that use the same nonce.

### Returns
<br/>

  * `<string>` (data, 32 bytes): the transaction hash, or the zero hash if the transaction is not yet available.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
    "jsonrpc": "2.0",
    "method": "eth_sendTransaction",
    "params": [
        {
            "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
            "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
            "gas": "0x76c0",
            "gasPrice": "0x9184e72a000",
            "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
            "value": "0x9184e72a"
        }
    ],
    "id": 1
}'
```

### Response example

```json
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

---

## `eth_sendRawTransaction`

> Creates new message call transaction or a contract creation for signed transactions.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): 

    1. `<string>` (data): the signed transaction data.

### Returns
<br/>

  * `<string>` (data, 32 bytes): the transaction hash, or the zero hash if the transaction is not yet available.

Use [eth_getTransactionReceipt](/rpc-service/chains/chains-api/ethereum-new/#eth_getTransactionReceipt) to get the contract address, after the transaction was mined, when you created a contract.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
    "jsonrpc": "2.0",
    "method": "eth_sendRawTransaction",
    "params": ["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"],
    "id": 1
}'
```

### Response example

```json
{
    "id": 1,
    "jsonrpc": "2.0",
    "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

---

## `eth_call`

> Executes a new message call immediately without creating a transaction on the blockchain.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): 

    1. `<object>` (hex encoded): the transaction object:
        * `from` (string; data, 20 bytes; optional): the address the transaction is sent from.
        * `to` (string; data, 20 bytes): the address the transaction is directed to.
        * `gas` (string; quantity; optional): the gas provided for the transaction execution. `eth_call` consumes zero gas, but this parameter may be needed by some executions.
        * `gasPrice` (string; quantity; optional): the gas price willing to be paid by the sender in wei.
        * `value` (string; quantity; optional): the value sent with this transaction, in wei.
        * `data` (string; data; optional): the hash of the method signature and encoded parameters.

    2. `<string>` (quantity|tag): either the hex value of a _block number_ or one of the following _block tags_:
        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Returns
<br/>

  * `<string>` (hex encoded bytes): the return value of executed contract.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
    "jsonrpc": "2.0",
    "method": "eth_call",
    "params": [{"from":null,"to":"0x6b175474e89094c44da98b954eedeac495271d0f","data":"0x70a082310000000000000000000000006E0d01A76C3Cf4288372a29124A26D4353EE51BE"}, "latest"],
    "id": 1
}'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x0000000000000000000000000000000000000000000000000858898f93629000"
}
```

---

## `eth_estimateGas`

> Generates and returns an estimate of how much gas is necessary to allow the transaction to complete.

The transaction will not be added to the blockchain. Note that the estimate may be significantly more than the amount of gas actually used by the transaction, for a variety of reasons including EVM mechanics and node performance.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array): 

    1. `<object>` (hex encoded): the transaction object:
        * `from` (string; data, 20 bytes; optional): the address the transaction is sent from.
        * `to` (string; data, 20 bytes; optional): the address the transaction is directed to.
        * `gas` (string; quantity; optional): the gas provided for the transaction execution. `eth_call` consumes zero gas, but this parameter may be needed by some executions.
        * `gasPrice` (string; quantity; optional): the gas price willing to be paid by the sender in wei.
        * `value` (string; quantity; optional): the value sent with this transaction, in wei.
        * `data` (string; data; optional): the hash of the method signature and encoded parameters.

    2. `<string>` (quantity|tag; optional): either a HEX value of a *block number* or one of the following *block tags*:
        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.

### Returns
<br/>

  * `<string>` (quantity): the amount of gas used.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
    "jsonrpc": "2.0",
    "method": "eth_estimateGas",
    "params": [{"from":null,"to":"0x6b175474e89094c44da98b954eedeac495271d0f","data":"0x70a082310000000000000000000000006E0d01A76C3Cf4288372a29124A26D4353EE51BE"}, "latest"],
    "id": 1
}'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x5de2"
}
```

---

## `eth_getBlockByHash`

> Returns information for the block specified by block hash.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. `<string>` (data, 32 bytes): the block's hash.
    2. `<boolean>`: if `true` it returns the full transaction objects, if `false` — only the hashes of the transactions.

### Returns
<br/>

  * `<object>`: a block object, or null when no block was found:
      * `number` (string; quantity): the block number; null when it's a pending block.
      * `hash` (string; data, 32 bytes): the hash of the block; null when it's a pending block.
      * `parentHash` (string; data, 32 bytes): the hash of the parent block.
      * `nonce` (string; data, 8 bytes): the hash of the generated proof-of-work; null when it's a pending block.
      * `sha3Uncles` (string; data, 32 bytes): SHA3 of the uncles data in the block.
      * `logsBloom` (string; data, 256 bytes): the bloom filter for the logs of the block. null when its pending block.
      * `transactionsRoot` (string; data, 32 bytes): the root of the transaction trie of the block.
      * `stateRoot` (string; data, 32 bytes): the root of the final state trie of the block.
      * `receiptsRoot` (string; data, 32 bytes): the root of the receipts trie of the block.
      * `miner` (string; data, 20 bytes): the address of the beneficiary to whom the mining rewards were given.
      * `difficulty` (string; quantity): the difficulty for this block.
      * `totalDifficulty` (string; quantity): the total difficulty of the chain until this block.
      * `extraData` (string; data): the **extra data** field of this block.
      * `size` (string; quantity): the size of this block in bytes.
      * `gasLimit` (string; quantity): the maximum gas allowed in this block.
      * `gasUsed` (string; quantity): the total used gas by all transactions in this block.
      * `timestamp` (string; quantity): the unix timestamp for when the block was collated.
      * `transactions` (array of strings): an array of transaction objects, or 32 bytes transaction hashes depending on the last given parameter.
      * `uncles` (array of strings): an array of uncle hashes.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getBlockByHash",
      "params": ["0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae", false],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "difficulty": "0x4ea3f27bc",
        "extraData": "0x476574682f4c5649562f76312e302e302f6c696e75782f676f312e342e32",
        "gasLimit": "0x1388",
        "gasUsed": "0x0",
        "hash": "0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0xbb7b8287f3f0a933474a79eae42cbca977791171",
        "mixHash": "0x4fffe9ae21f1c9e15207b1f472d5bbdd68c9595d461666602f2be20daf5e7843",
        "nonce": "0x689056015818adbe",
        "number": "0x1b4",
        "parentHash": "0xe99e022112df268087ea7eafaf4790497fd21dbeeb6bd7a1721df161a6657a54",
        "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x220",
        "stateRoot": "0xddc8b0234c2e0cad087c8b389aa7ef01f7d79b2570bccb77ce48648aa61c904d",
        "timestamp": "0x55ba467c",
        "totalDifficulty": "0x78ed983323d",
        "transactions": [],
        "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "uncles": []
    }
}
```

---

## `eth_getBlockByNumber`

> Returns information for the block specified by block number.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. `<string>` (quantity|tag): either the hex value of a *block number* or one of the following *block tags*:
       * `earliest`: the lowest numbered block available on the client.
       * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
       * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
       * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
       * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.
    2. `<boolean>`: if `true` it returns the full transaction objects, if `false` — only the hashes of the transactions.

### Returns
<br/>

  * `<object>`: a block object, or null when no block was found:
      * `number` (string; quantity): the block number; null when it's a pending block.
      * `hash` (string; data, 32 bytes): the hash of the block; null when it's a pending block.
      * `parentHash` (string; data, 32 bytes): the hash of the parent block.
      * `nonce` (string; data, 8 bytes): the hash of the generated proof-of-work; null when it's a pending block.
      * `sha3Uncles` (string; data, 32 bytes): SHA3 of the uncles data in the block.
      * `logsBloom` (string; data, 256 bytes): the bloom filter for the logs of the block. null when its pending block.
      * `transactionsRoot` (string; data, 32 bytes): the root of the transaction trie of the block.
      * `stateRoot` (string; data, 32 bytes): the root of the final state trie of the block.
      * `receiptsRoot` (string; data, 32 bytes): the root of the receipts trie of the block.
      * `miner` (string; data, 20 bytes): the address of the beneficiary to whom the mining rewards were given.
      * `difficulty` (string; quantity): the difficulty for this block.
      * `totalDifficulty` (string; quantity): the total difficulty of the chain until this block.
      * `extraData` (string; data): the **extra data** field of this block.
      * `size` (string; quantity): the size of this block in bytes.
      * `gasLimit` (string; quantity): the maximum gas allowed in this block.
      * `gasUsed` (string; quantity): the total used gas by all transactions in this block.
      * `timestamp` (string; quantity): the unix timestamp for when the block was collated.
      * `transactions` (array of strings): an array of transaction objects, or 32 bytes transaction hashes depending on the last given parameter.
      * `uncles` (array of strings): an array of uncle hashes.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getBlockByNumber",
      "params": ["0x1b4", true],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "difficulty": "0x4ea3f27bc",
        "extraData": "0x476574682f4c5649562f76312e302e302f6c696e75782f676f312e342e32",
        "gasLimit": "0x1388",
        "gasUsed": "0x0",
        "hash": "0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0xbb7b8287f3f0a933474a79eae42cbca977791171",
        "mixHash": "0x4fffe9ae21f1c9e15207b1f472d5bbdd68c9595d461666602f2be20daf5e7843",
        "nonce": "0x689056015818adbe",
        "number": "0x1b4",
        "parentHash": "0xe99e022112df268087ea7eafaf4790497fd21dbeeb6bd7a1721df161a6657a54",
        "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x220",
        "stateRoot": "0xddc8b0234c2e0cad087c8b389aa7ef01f7d79b2570bccb77ce48648aa61c904d",
        "timestamp": "0x55ba467c",
        "totalDifficulty": "0x78ed983323d",
        "transactions": [],
        "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "uncles": []
    }
}
```

---

## `eth_getTransactionByHash`

> Returns information on a transaction specified by transaction hash.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. `<string>` (data, 32 bytes): a transaction hash.

### Returns
<br/>

  * `blockHash` (string; data, 32 bytes): a hash of the block containing the transaction; null when it's pending.
  * `blockNumber` (string; quantity): a number of the block containing the transaction; null when it's pending.
  * `from` (string; data, 20 bytes): an address of the sender.
  * `gas` (string; quantity): the gas provided by the sender.
  * `gasPrice` (string; quantity): the gas price provided by the sender in wei.
  * `hash` (string; data, 32 bytes): the hash of the transaction.
  * `input` (string; data): the data send along with the transaction.
  * `nonce` (string; quantity): the number of transactions made by the sender prior to this one.
  * `to` (string: data, 20 bytes): an address of the receiver: null when it's a contract creation transaction.
  * `transactionIndex` (string; quantity): the transaction index position in the block; null when it's pending.
  * `value` (string; quantity): the value transferred in wei.
  * `v` (string; quantity): ECDSA recovery ID.
  * `r` (string; quantity): ECDSA signature r.
  * `s` (string; quantity): ECDSA signature s.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getTransactionByHash",
      "params": ["0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0x1d59ff54b1eb26b013ce3cb5fc9dab3705b415a67127a003c3e61eb445bb8df2",
        "blockNumber": "0x5daf3b",
        "from": "0xa7d9ddbe1f17865597fbd27ec712455208b6b76d",
        "gas": "0xc350",
        "gasPrice": "0x4a817c800",
        "hash": "0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b",
        "input": "0x68656c6c6f21",
        "nonce": "0x15",
        "to": "0xf02c1c8e6114b1dbe8937a39260b5b0a374432bb",
        "transactionIndex": "0x41",
        "value": "0xf3dbb76162000",
        "type": "0x0",
        "chainId": "0x1",
        "v": "0x25",
        "r": "0x1b5e176d927f8e9ab405058b2d2457392da3e20f328b16ddabcebc33eaac5fea",
        "s": "0x4ba69724e8f69de52f0125ad8b3c5c2cef33019bac3249e2c0a2192766d1721c"
    }
}
```

---

## `eth_getTransactionByBlockHashAndIndex`

> Returns information on a transaction specified by block hash and transaction index position.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. `<string>` (data, 32 bytes): a block hash.
    2. `<string>` (quantity): a transaction index position.

### Returns
<br/>

  * `blockHash` (string; data, 32 bytes): a hash of the block containing the transaction; null when it's pending.
  * `blockNumber` (string; quantity): a number of the block containing the transaction; null when it's pending.
  * `from` (string; data, 20 bytes): an address of the sender.
  * `gas` (string; quantity): the gas provided by the sender.
  * `gasPrice` (string; quantity): the gas price provided by the sender in wei.
  * `hash` (string; data, 32 bytes): the hash of the transaction.
  * `input` (string; data): the data send along with the transaction.
  * `nonce` (string; quantity): the number of transactions made by the sender prior to this one.
  * `to` (string: data, 20 bytes): an address of the receiver: null when it's a contract creation transaction.
  * `transactionIndex` (string; quantity): the transaction index position in the block; null when it's pending.
  * `value` (string; quantity): the value transferred in wei.
  * `v` (string; quantity): ECDSA recovery ID.
  * `r` (string; quantity): ECDSA signature r.
  * `s` (string; quantity): ECDSA signature s.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getTransactionByBlockHashAndIndex",
      "params": ["0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b", "0x2"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0x829df9bb801fc0494abf2f443423a49ffa32964554db71b098d332d87b70a48b",
        "blockNumber": "0xc4fa88",
        "from": "0x4e0c43c30964b80c37df90d229e668823b6f36b6",
        "gas": "0x34ed8",
        "gasPrice": "0x6c088e200",
        "hash": "0xd0f7b79f2b38a5e8303ff523da621d6cb04a18e722d6cc0bcce75309cd804b2e",
        "input": "0x38ed1739000000000000000000000000000000000000000000000012f211da6a00e70ccd0000000000000000000000000000000000000000000000059ddf43d23461577600000000000000000000000000000000000000000000000000000000000000a00000000000000000000000004e0c43c30964b80c37df90d229e668823b6f36b600000000000000000000000000000000000000000000000000000000610039cb00000000000000000000000000000000000000000000000000000000000000030000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb0000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc20000000000000000000000009813037ee2218799597d83d4a5b6f3b6778218d9",
        "nonce": "0x26",
        "to": "0x03f7724180aa6b939894b5ca4314783b0b36b329",
        "transactionIndex": "0x2",
        "value": "0x0",
        "type": "0x0",
        "chainId": "0x1",
        "v": "0x25",
        "r": "0x43284f337fce4ab4225dd123935934ebd12067440d8a2a05ac297c2d0f62d8ab",
        "s": "0x3827daa345b9b30ecef4df256a72059ca04106dee07a6a97ba5b4b719550cde3"
    }
}
```

---

## `eth_getTransactionByBlockNumberAndIndex`

> Returns information on a transaction by block number and transaction index position.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. `<string>` (quantity|tag): either the hex value of a _block number_ or one of the following _block tags_:
        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.
    2. `<string>` (quantity): the transaction index position.

### Returns
<br/>

  * `blockHash` (string; data, 32 bytes): a hash of the block containing the transaction; null when it's pending.
  * `blockNumber` (string; quantity): a number of the block containing the transaction; null when it's pending.
  * `from` (string; data, 20 bytes): an address of the sender.
  * `gas` (string; quantity): the gas provided by the sender.
  * `gasPrice` (string; quantity): the gas price provided by the sender in wei.
  * `hash` (string; data, 32 bytes): the hash of the transaction.
  * `input` (string; data): the data send along with the transaction.
  * `nonce` (string; quantity): the number of transactions made by the sender prior to this one.
  * `to` (string: data, 20 bytes): an address of the receiver: null when it's a contract creation transaction.
  * `transactionIndex` (string; quantity): the transaction index position in the block; null when it's pending.
  * `value` (string; quantity): the value transferred in wei.
  * `v` (string; quantity): ECDSA recovery ID.
  * `r` (string; quantity): ECDSA signature r.
  * `s` (string; quantity): ECDSA signature s.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getTransactionByBlockNumberAndIndex",
      "params": ["0xc5043f", "0x2"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0xa917fcc721a5465a484e9be17cda0cc5493933dd3bc70c9adbee192cb419c9d7",
        "blockNumber": "0xc5043f",
        "from": "0x829bd824b016326a401d083b33d092293333a830",
        "gas": "0x33450",
        "gasPrice": "0x0",
        "hash": "0xdf8d8677c9cd5f81d8ee3663a4a64ce7fe93d35fcb46004529e77394630f8e11",
        "input": "0x",
        "nonce": "0xa16562",
        "to": "0x6e2edc2af25cd5704d99ba73ac7ece701f50192d",
        "transactionIndex": "0x2",
        "value": "0x20b9632b7dc0a3e",
        "type": "0x0",
        "v": "0x26",
        "r": "0x6fd8d85d440c87e894898ce7c12725eb994d416b0843ae5ddb0f188bc21ac9a2",
        "s": "0x47fe6bc7bb3ddc8d579509fed960934ab8ed6004152e62b2abca6639393b8e77"
    }
}
```

---

## `eth_getTransactionReceipt`

> Returns the receipt of a transaction by transaction hash.

The receipt is not available for pending transactions.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. `<string>` (data, 32 bytes): a hash of the transaction.

### Returns
<br/>

  * `object`: a transaction receipt object, or null when no receipt was found:

      * `transactionHash` (string; data, 32 bytes): a hash of the transaction.
      * `transactionIndex` (string; quantity): the transactions index position in the block.
      * `blockHash` (string; data, 32 bytes): a hash of the block containing the transaction.
      * `blockNumber` (string; quantity): a number of the block containing the transaction.
      * `from` (string; data, 20 bytes): an address of the sender.
      * `to` (string; data, 20 bytes): an address of the receiver; null when it's a contract creation transaction.
      * `cumulativeGasUsed` (string; quantity): the total amount of gas used when this transaction was executed in the block.
      * `effectiveGasPrice` (string; quantity): the sum of the base fee and tip paid per unit of gas.
      * `gasUsed` (string; quantity): the amount of gas used by this specific transaction alone.
      * `contractAddress` (string; data, 20 bytes): the contract address created, if the transaction was a contract creation, otherwise null.
      * `logs` (array): an array of log objects, which this transaction generated.
      * `logsBloom` (string; data, 256 bytes): a bloom filter for light clients to quickly retrieve related logs.
      * `type` (string; data): the transaction type, `0x00` for legacy transactions, `0x01` for access list types, `0x02` for dynamic fees. It also returns either of the following:

          * `root` (string; data, 32 bytes): a post-transaction stateroot (pre Byzantium).
          * `status` (string; quantity): either 1 (success) or 0 (failure).

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getTransactionReceipt",
      "params": ["0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "blockHash": "0xa957d47df264a31badc3ae823e10ac1d444b098d9b73d204c40426e57f47e8c3",
        "blockNumber": "0xeff35f",
        "contractAddress": null,
        "cumulativeGasUsed": "0xa12515",
        "effectiveGasPrice": "0x5a9c688d4",
        "from": "0x6221a9c005f6e47eb398fd867784cacfdcfff4e7",
        "gasUsed": "0xb4c8",
        "logs": [
            {
                "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                "topics": [
                    "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
                    "0x0000000000000000000000006221a9c005f6e47eb398fd867784cacfdcfff4e7",
                    "0x0000000000000000000000001e0049783f008a0085193e00003d00cd54003c71"
                ],
                "data": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                "blockNumber": "0xeff35f",
                "transactionHash": "0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5",
                "transactionIndex": "0x66",
                "blockHash": "0xa957d47df264a31badc3ae823e10ac1d444b098d9b73d204c40426e57f47e8c3",
                "logIndex": "0xfa",
                "removed": false
            }
        ],
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002000000080000000000000000200000000000000000000020000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020001000000400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800000000000000000010200000000000000000000000000000000000000000000000000000020000",
        "status": "0x1",
        "to": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        "transactionHash": "0x85d995eba9763907fdf35cd2034144dd9d53ce32cbec21349d4b12823c6860c5",
        "transactionIndex": "0x66",
        "type": "0x2"
    }
}
```

---

## `eth_getUncleByBlockHashAndIndex`

> Returns information about an uncle of a block by hash and uncle index position.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. `<string>` (data, 32 bytes): the hash of a block.
    2. `<string>` (quantity): the uncle's index position.

### Returns
<br/>

  * `<object>`: a block object, or null when no block was found:
      * `number` (string; quantity): the block number; null when it's a pending block.
      * `hash` (string; data, 32 bytes): the hash of the block; null when it's a pending block.
      * `parentHash` (string; data, 32 bytes): the hash of the parent block.
      * `nonce` (string; data, 8 bytes): the hash of the generated proof-of-work; null when it's a pending block.
      * `sha3Uncles` (string; data, 32 bytes): SHA3 of the uncles data in the block.
      * `logsBloom` (string; data, 256 bytes): the bloom filter for the logs of the block. null when its pending block.
      * `transactionsRoot` (string; data, 32 bytes): the root of the transaction trie of the block.
      * `stateRoot` (string; data, 32 bytes): the root of the final state trie of the block.
      * `receiptsRoot` (string; data, 32 bytes): the root of the receipts trie of the block.
      * `miner` (string; data, 20 bytes): the address of the beneficiary to whom the mining rewards were given.
      * `difficulty` (string; quantity): the difficulty for this block.
      * `totalDifficulty` (string; quantity): the total difficulty of the chain until this block.
      * `extraData` (string; data): the **extra data** field of this block.
      * `size` (string; quantity): the size of this block in bytes.
      * `gasLimit` (string; quantity): the maximum gas allowed in this block.
      * `gasUsed` (string; quantity): the total used gas by all transactions in this block.
      * `timestamp` (string; quantity): the unix timestamp for when the block was collated.
      * `transactions` (array of strings): an array of transaction objects, or 32 bytes transaction hashes depending on the last given parameter.
      * `uncles` (array of strings): an array of uncle hashes.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getUncleByBlockHashAndIndex",
      "params": ["0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b", "0x0"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "difficulty": "0x4ea3f27bc",
        "extraData": "0x476574682f4c5649562f76312e302e302f6c696e75782f676f312e342e32",
        "gasLimit": "0x1388",
        "gasUsed": "0x0",
        "hash": "0xdc0818cf78f21a8e70579cb46a43643f78291264dda342ae31049421c82d21ae",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0xbb7b8287f3f0a933474a79eae42cbca977791171",
        "mixHash": "0x4fffe9ae21f1c9e15207b1f472d5bbdd68c9595d461666602f2be20daf5e7843",
        "nonce": "0x689056015818adbe",
        "number": "0x1b4",
        "parentHash": "0xe99e022112df268087ea7eafaf4790497fd21dbeeb6bd7a1721df161a6657a54",
        "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x220",
        "stateRoot": "0xddc8b0234c2e0cad087c8b389aa7ef01f7d79b2570bccb77ce48648aa61c904d",
        "timestamp": "0x55ba467c",
        "totalDifficulty": "0x78ed983323d",
        "transactions": [],
        "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "uncles": []
    }
}
```

---

## `eth_getUncleByBlockNumberAndIndex`

> Returns information about an uncle of a block by number and uncle index position.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

    1. `<string>` (quantity|tag): either the hex value of a _block number_ or one of the following _block tags_:
        * `earliest`: the lowest numbered block available on the client.
        * `finalized`: the most recent crypto-economically secure block; cannot be re-orged outside of manual intervention driven by community coordination.
        * `safe`: the most recent block that is safe from re-orgs under honest majority and certain synchronicity assumptions.
        * `latest`: the most recent block in the canonical chain observed by the client; this block can be re-orged out of the canonical chain even under healthy/normal conditions.
        * `pending`: a sample next block built by the client on top of the `latest` and containing the set of transactions usually taken from local mempool. In other words, it is the block that has not been mined yet.
    2. `<string>` (quantity): the uncle's  index position.

### Returns
<br/>

  * `<object>`: a block object, or null when no block was found:
      * `number` (string; quantity): the block number; null when it's a pending block.
      * `hash` (string; data, 32 bytes): the hash of the block; null when it's a pending block.
      * `parentHash` (string; data, 32 bytes): the hash of the parent block.
      * `nonce` (string; data, 8 bytes): the hash of the generated proof-of-work; null when it's a pending block.
      * `sha3Uncles` (string; data, 32 bytes): SHA3 of the uncles data in the block.
      * `logsBloom` (string; data, 256 bytes): the bloom filter for the logs of the block. null when its pending block.
      * `transactionsRoot` (string; data, 32 bytes): the root of the transaction trie of the block.
      * `stateRoot` (string; data, 32 bytes): the root of the final state trie of the block.
      * `receiptsRoot` (string; data, 32 bytes): the root of the receipts trie of the block.
      * `miner` (string; data, 20 bytes): the address of the beneficiary to whom the mining rewards were given.
      * `difficulty` (string; quantity): the difficulty for this block.
      * `totalDifficulty` (string; quantity): the total difficulty of the chain until this block.
      * `extraData` (string; data): the **extra data** field of this block.
      * `size` (string; quantity): the size of this block in bytes.
      * `gasLimit` (string; quantity): the maximum gas allowed in this block.
      * `gasUsed` (string; quantity): the total used gas by all transactions in this block.
      * `timestamp` (string; quantity): the unix timestamp for when the block was collated.
      * `transactions` (array of strings): an array of transaction objects, or 32 bytes transaction hashes depending on the last given parameter.
      * `uncles` (array of strings): an array of uncle hashes.

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getUncleByBlockNumberAndIndex",
      "params": ["0x29c", "0x0"],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "difficulty": "0x57f117f5c",
        "extraData": "0x476574682f76312e302e302f77696e646f77732f676f312e342e32",
        "gasLimit": "0x1388",
        "gasUsed": "0x0",
        "hash": "0x932bdf904546a2287a2c9b2ede37925f698a7657484b172d4e5184f80bdd464d",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0x5bf5e9cf9b456d6591073513de7fd69a9bef04bc",
        "mixHash": "0x4500aa4ee2b3044a155252e35273770edeb2ab6f8cb19ca8e732771484462169",
        "nonce": "0x24732773618192ac",
        "number": "0x299",
        "parentHash": "0xa779859b1ee558258b7008bbabff272280136c5dd3eb3ea3bfa8f6ae03bf91e5",
        "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x21d",
        "stateRoot": "0x2604fbf5183f5360da249b51f1b9f1e0f315d2ff3ffa1a4143ff221ad9ca1fec",
        "timestamp": "0x55ba4827",
        "totalDifficulty": "0xc46826a2c6a",
        "transactions": [],
        "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "uncles": []
    }
}
```

---

## `eth_getLogs`

> Returns an array of all logs matching a given filter object.

### Parameters
<br/>

  * `id` (integer; required): a request ID (example: 1).
  * `jsonrpc` (string; required): a JSON RPC spec used (example: 2.0). 
  * `method` (string; required): a method used for the request.
  * `params` (array):

      1. `object`: the filter options:

         * `fromBlock` (string; quantity|tag; optional; default: "latest"): either the _block number_ or one of the following _block tags_:

             * `latest`: for the last mined block.
             * `earliest`: for the lowest numbered block available on the client.
             * `pending`: for not yet mined transactions.

         * `toBlock` (string; quantity|tag; optional; default: "latest"): either the _block number_ or one of the following _block tags_:

             * `latest`: for the last mined block.
             * `earliest`: for the lowest numbered block available on the client.
             * `pending`: for not yet mined transactions.

         * `address` (array of strings; data, 20 bytes; optional): a contract address or a list of addresses from which logs should originate.
         * `topics` (array of strings; data; optional): an array of 32 bytes data topics. Topics are order-dependent. Each topic can also be an array of data with "or" options.
         * `blockhash` (string; data, 32 bytes; optional; **future**): with the addition of EIP-234, `blockHash` will be a new filter option which restricts the logs returned to the single block with the 32-byte hash blockHash. Using blockHash is equivalent to `fromBlock = toBlock = the block` number with hash blockHash. If `blockHash` is present in the filter criteria, then neither `fromBlock` nor `toBlock` are allowed.

### Returns
<br/>

  * `removed` (string; tag): `true` when the log was removed, due to a chain reorganization; `false` if it's a valid log.
  * `logIndex` (string; quantity): the log index position in the block; null when it's a pending log.
  * `transactionIndex` (string; quantity): the transactions index position log was created from; null when it's a pending log.
  * `transactionHash` (string; data, 32 bytes): a hash of the transactions this log was created from; null when it's a pending log.
  * `blockHash` (string; data, 32 bytes): a hash of the block containing the log; null when it's pending; null when it's a pending log.
  * `blockNumber` (string; quantity): the number of the block containing the log; null when it's pending; null when it's a pending log.
  * `address` (string; data, 20 bytes): an address from which this log originated.
  * `data` (string; data): contains one or more 32 bytes non-indexed arguments of the log.
  * `topics` (array of strings; data): an array of 0 to 4 32 bytes data of indexed log arguments. (In solidity: The first topic is the hash of the signature of the event (e.g. Deposit(address,bytes32,uint256)), except you declared the event with the anonymous specifier.)

### Request example

```shell
curl -X POST https://rpc.ankr.com/eth \
-H 'Content-Type: application/json' \
-d '{
      "jsonrpc": "2.0",
      "method": "eth_getLogs",
      "params": [{"address": "0xdAC17F958D2ee523a2206206994597C13D831ec7"}],
      "id": 1
    }'
```

### Response example

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": [
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x0000000000000000000000009acbb72cf67103a30333a32cd203459c6a9c3311",
                "0x000000000000000000000000994871e1103c5da4be270365fa62771ea4525520"
            ],
            "data": "0x000000000000000000000000000000000000000000000000000000001ec39aa0",
            "blockNumber": "0xf6289d",
            "transactionHash": "0xc7ed73c9b219d4243872e5993ad2950c8ea87d15af28562d33b0c05d46a90cee",
            "transactionIndex": "0x1e",
            "blockHash": "0x1e12377f0357320c0e5cfcadc2dfbc9c75fc339be668e118c34e4333f835ef31",
            "logIndex": "0x13",
            "removed": false
        },
        {
            "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "topics": [
                "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                "0x0000000000000000000000005879975799597392c031f10b6eff282cb7974ac8",
                "0x0000000000000000000000006d52ab66340f3f78d0c1007bec484268876b5948"
            ],
            "data": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "blockNumber": "0xf6289d",
            "transactionHash": "0x0118499f7be4c3510bd60fe3a3aee5f5f316743b6cc13a8cb0528d784f962aec",
            "transactionIndex": "0x20",
            "blockHash": "0x1e12377f0357320c0e5cfcadc2dfbc9c75fc339be668e118c34e4333f835ef31",
            "logIndex": "0x14",
            "removed": false
        }
    ]
}
```
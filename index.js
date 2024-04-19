const { Connection, PublicKey } = require ("@solana/web3.js");

const solanaInfo = async (address) => {
  const connection = new Connection("https://mainnet.helius-rpc.com/?api-key=34e1fd3a-1147-4e19-9d8f-0896d0eee4ce");
  let info = await connection.getAccountInfo(new PublicKey(address))
  return info
}

const sum = (a, b) => a + b

exports.sum = sum
exports.info = solanaInfo
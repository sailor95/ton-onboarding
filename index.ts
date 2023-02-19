import { Address, TonClient } from 'ton'
import * as dotenv from 'dotenv';
import {BN} from 'bn.js'

dotenv.config(); // To use env variable

async function main() {
  const wallet = Address.parse(process.env.MY_TON_ADDRESS as string)
  const collection = Address.parse('EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX')
  const client = new TonClient({
    endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
    apiKey: process.env.API_KEY
  })
  const miningData = await client.callGetMethod(collection, 'get_mining_data')

  const parseStackNum = (sn: any) => new BN(sn[1].substring(2), 'hex');
  const complexity = parseStackNum(miningData.stack[0]);
  const last_success = parseStackNum(miningData.stack[1]);
  const seed = parseStackNum(miningData.stack[2]);
  const target_delta = parseStackNum(miningData.stack[3]);
  const min_cpl = parseStackNum(miningData.stack[4]);
  const max_cpl = parseStackNum(miningData.stack[5]);

  console.log('complexity', complexity);
  console.log('last_success', last_success.toString());
  console.log('seed', seed);
  console.log('target_delta', target_delta.toString());
  console.log('min_cpl', min_cpl.toString());
  console.log('max_cpl', max_cpl.toString());
}

main()

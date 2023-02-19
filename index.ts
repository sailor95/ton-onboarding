import { Address, TonClient } from 'ton'
import * as dotenv from 'dotenv';

dotenv.config(); // To use env variable

async function main() {
  const wallet = Address.parse(process.env.MY_TON_ADDRESS as string)
  const collection = Address.parse('EQDk8N7xM5D669LC2YACrseBJtDyFqwtSPCNhRWXU7kjEptX')
  const client = new TonClient({
    endpoint: 'https://testnet.toncenter.com/api/v2/jsonRPC',
    apiKey: process.env.API_KEY
  })
}

main()

import type { NextApiRequest, NextApiResponse } from 'next'
import { Network, Alchemy } from 'alchemy-sdk';
import type { OwnedNft } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.ALCHEMY_APY_KEY,
  network: Network.ETH_MAINNET,
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OwnedNft[]>
) {
  const { address } = req.query;

  const alchemy = new Alchemy(settings);
  const response = await alchemy
    .nft
    .getNftsForOwner(address as string);

  res.status(200).json(response.ownedNfts);
}

type Address = `0x${string}`;

export interface AlchemyOwnedNftsResponse {
  ownedNfts:  Nft[];
  totalCount: number;
  blockHash:  string;
}

export interface Nft {
  contract: Contract;
  id: ID;
  title: string;
  description: string;
  tokenUri: TokenURI;
  media: TokenURI[];
  metadata: Metadata;
  timeLastUpdated: Date;
  contractMetadata: ContractMetadata;
}

export interface Contract {
  address: Address;
}

export interface ContractMetadata {
  name: string;
  symbol: string;
  totalSupply: string;
  tokenType: string;
}

export interface ID {
  tokenId: string;
  tokenMetadata: TokenMetadata;
}

export interface TokenMetadata {
  tokenType: string;
}

export interface TokenURI {
  raw: string;
  gateway: string;
}

export interface Metadata {
  name: string;
  description: string;
  image: string;
  external_url?: string;
  attributes: Attribute[];
}

export interface Attribute {
    value: string;
    trait_type: string;
}

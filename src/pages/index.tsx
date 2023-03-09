import { useState, useEffect, MouseEvent } from 'react';
import { CardGrid } from '@/components/CardGrid';

import type { OwnedNft } from 'alchemy-sdk';
import { SearchBox } from '@/components';

import { HomeContainer, GridContainer } from '@/styles';

export default function Home() {
  const [data, setData] = useState<OwnedNft[] | undefined>();
  const [loading, setLoading] = useState<boolean>(false)
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    if (address && address.length > 0) {
      setLoading(true);
      fetch(`/api/nfts?address=${address}`)
        .then(response => response.json())
        .then(d => {
          console.log(d);
          setData(d)
        })
        .finally(() => setLoading(false));
    }
  }, [address]);

  const onChangeSearchBox = (searchValue: string) => {
    setAddress(searchValue);
  };

  const openModal = (nft: OwnedNft) => {
    console.log(nft);
  };
  
  return (
    <HomeContainer>
      <SearchBox value={address} onChange={onChangeSearchBox} loading={loading} />

      {data && data.length > 0 &&
        <GridContainer>
          <CardGrid nfts={data} onClick={openModal} />
        </GridContainer>}
    </HomeContainer>
  );
};

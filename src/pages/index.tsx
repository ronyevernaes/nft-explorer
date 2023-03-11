import { useState, useEffect } from 'react';
import { CardGrid } from '@/components/CardGrid';

import type { OwnedNft } from 'alchemy-sdk';
import { Modal, SearchBox } from '@/components';

import { HomeContainer, GridContainer } from '@/styles';

export default function Home() {
  const [data, setData] = useState<OwnedNft[] | undefined>();
  const [loading, setLoading] = useState<boolean>(false)
  const [address, setAddress] = useState<string>('');
  const [selectedNft, setSelectedNft] = useState<OwnedNft>();

  useEffect(() => {
    if (address && address.length > 0) {
      setLoading(true);
      fetch(`/api/nfts?address=${address}`)
        .then(response => response.json())
        .then(d => setData(d))
        .finally(() => setLoading(false));
    }
  }, [address]);

  const onChangeSearchBox = (searchValue: string) => {
    setAddress(searchValue);
  };

  const onOpenModal = (nft: OwnedNft) => {
    setSelectedNft(nft);
  };

  const onCloseModal = () => {
    setSelectedNft(undefined);
  }
  
  return (
    <HomeContainer>
      <SearchBox
        value={address}
        onSearch={onChangeSearchBox}
        loading={loading}
      />

      {data && data.length > 0 &&
        <GridContainer>
          <CardGrid nfts={data} onClick={onOpenModal} />
        </GridContainer>}

      {selectedNft &&
        <Modal
          ownerAddress={address}
          nft={selectedNft}
          open={!!selectedNft}
          onClose={onCloseModal}
        />
      }
    </HomeContainer>
  );
};

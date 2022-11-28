/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './styles.scss';

import React from 'react';
import { useQuery } from 'react-query';

import GenericAssetService from '../../services/GenerAssetService';
import { url } from '../../utils/url';

const HomeScreen = () => {
  const { data: data, isLoading: isLoadingAsset } = useQuery(['assets'], () =>
    GenericAssetService.getOneGenericAsset(1)
  );

  const assetUrl = isLoadingAsset
    ? []
    : data.attributes.source.data.attributes.url;

  return (
    <div className="vertical-divider">
      <div className="welcome-text">
        <h1 className="welcome-h1">Bonjour a toi, je suis Lea Stauder</h1>
        <h3 className="welcome-h3">
          Je te souhaite la bienvenue dans mes couleurs et mes creations.
        </h3>
        <p className="welcome-p">
          Si tu souhaites me contacter, c&apos;est par ici
        </p>
      </div>
      <div className="welcome-image">
        <div className="brush-container" />
        <div className="image-container">
          <img src={`${url}${assetUrl}`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;

// import apiClient from '../http-common';
// import GenericAsset from '../types/GenericAsset';

import request from '../http-common';

export default class GenericAssetService {
  static getAllGenericAssets() {
    return request({
      url: '/generic-assets',
      method: 'GET',
    });
  }
  static getOneGenericAsset(id: string | number) {
    return request({
      url: `/generic-assets/${id}?populate=*`,
      method: 'GET',
    });
  }
}

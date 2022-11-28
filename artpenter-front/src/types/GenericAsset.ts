interface Attribute {
  title: string;
  createdAt: string;
  updatedAt: string;
  publeishedAt: string | null;
}

export default interface GenericAsset {
  id?: string | number | null;
  attributes: Attribute;
}

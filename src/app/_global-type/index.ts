export type PageManagerType = {
  items: BreedItemType[];
  total: number;
  pageIndex: number;
  pageSize: number;
};

export type ResponseAPI = {
  message: any;
  status: 'success' | '';
};

export type BreedItemType = {
  breed: string;
  subBreeds: string[];
  imgPath: string;
};

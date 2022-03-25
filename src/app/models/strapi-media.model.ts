export interface StrapiMedia {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          name: string;
          width: number;
          height: number;
          url: string;
        };
      };
      url: string;
    };
  };
}

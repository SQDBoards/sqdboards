import { StrapiMediaMulti } from "src/app/models/strapi-media.array.model";

export interface pcb {
  id: number;
  attributes: {
    title: string;
    size: string;
    images: StrapiMediaMulti;
    features: {
      hotswap_support: boolean;
      rgb_support: boolean;
      rgb_type: string;
      usb_type: string;
      firmware: string;
    };
  };
}

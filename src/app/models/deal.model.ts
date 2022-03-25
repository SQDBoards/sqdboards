import { StrapiMedia } from "./strapi-media.model";

export interface Deal {
  id: number;
  attributes: {
    title: string;
    description: string;
    button: string;
    cover: StrapiMedia;
    cover_attribution: string;
  };
}

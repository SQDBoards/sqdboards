import { features } from "./pcb-features.model";

export class pcb {
    _id!: string;
    size!: string;
    images!: string[];
    title!: string;
    features!: features;
}

export interface Order {
    _id: string;
    byUser: string;
    specs: {
        pcb: string;
        switches: string;
        stabs: string;
        case: string;
        plate: string;
    },
    modifications: {
        switchLubing: boolean;
        stabsLubing: boolean;
        includeCaseFoam: boolean;
    }
}

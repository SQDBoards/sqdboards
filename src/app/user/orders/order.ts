export interface Order {
  id: string;
  specifications: {
    pcb: {
      size: string;
      title: string;
    };
    switches: string;
    stabs: string;
    case: string;
    plate: string;
  };
  modifications: {
    case_foam: boolean;
    lube_stabs: boolean;
    lube_switches: boolean;
  };
}

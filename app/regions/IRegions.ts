export interface IRegions {
    items: Array<Region>;
}
export interface ISystems {
    items: Array<ISystem>;
}
export interface Region {
  id_str: string;
  href: string;
  id: number;
  name: string;
}

export interface ISystem {
  volume_str: string;
    buy: boolean;
    issued: Date;
    price: number;
    volumeEntered: number;
    minVolume: number;
    volume: number;
range: string;
href: string;
duration_str: string;
location: {
    id_str: string;
    href: string;
    id: number;
    name: string;
    };
duration: number;
minVolume_str: string;
volumeEntered_str: string;
type: {
    id_str: string;
    href: string;
    id: number;
    name: string;
    };
    id: number;
    id_str: string;
};

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

export const ISystemDescriptor = {
    volume_str: String,
    buy: Boolean,
    issued: Date,
    price: Number,
    volumeEntered: Number,
    minVolume: Number,
    volume: Number,
    range: String,
    href: String,
    duration_str: String,
    location: {
        id_str: String,
        href: String,
        id: Number,
        name: String,
    },
    duration: Number,
    minVolume_str: String,
    volumeEntered_str: String,
    type: {
        id_str: String,
        href: String,
        id: Number,
        name: String,
    },
    id: Number,
    id_str: String,
};

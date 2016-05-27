
export interface ItemTypes { totalCount_str: string; pageCount: number; items: Array<ItemType>; }
export interface ItemType { marketGroup: MarketGroup; Type: Type; id: number; id_str: string;  }

export interface MarketGroup {href: string; id: number; id_str: string; }
export interface Type { id_str: string; href: string; id: number; name: string; icon: Icon;}
export interface Icon {href: string; }

export const ItemTypeDescriptor = {
    marketGroup: { href: String, id: Number, id_str: String, },
    Type: {id_str: String, href: String, id: Number, name: String, icon: {href: String,}, },
    id: Number,
    id_str: String,
}
export interface Tshirt {
    idProduct: number;
    src: string;
    model: string;
    size: Size[];
    color: string;
    price: number;
}

export interface Size {
    size: string;
    available: boolean;
}

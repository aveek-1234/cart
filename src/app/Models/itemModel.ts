export interface Rating{
    rate:number,
    count: number
}
export interface Item
{
    category:string,
    description:string,
    id: number,
    image: string,
    price: number,
    rating: Rating,
    title: string,
    quantity:number
}
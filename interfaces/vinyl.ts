export default interface Vinyl {
  id: number;
  status: string | null;
  image: string;
  title: string;
  artist: number;
  year?: number;
  genre: number;
  price: number;
  old_price: number | null;
  description: string;
  token: string;
}

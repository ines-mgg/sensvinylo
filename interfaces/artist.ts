export default interface Artist {
  id: number;
  name: string;
  description: string;
  image: string;
  genre: number;
  slug: string;
  discography: {
    title: string;
    year: number;
  }[];
}

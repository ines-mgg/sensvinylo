export default interface Article {
  id: number;
  title: string;
  synopsis: string;
  image: string;
  slug: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
}

export module Pages {
  export interface PostProps {
    body: string;
    id: number;
    title: string;
    userId?: number;
  }
}

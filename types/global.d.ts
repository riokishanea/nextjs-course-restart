interface Tags {
  _id: string;
  name: string;
}

interface Author {
  _id: string;
  name: string;
  avatar: string;

}

interface Question {
  _id: string;
  title: string;
  tags: Tags[];
  author: Author;
  createdAt: Date;
  upvotes: number;
  views: number;
  answers: number;
}

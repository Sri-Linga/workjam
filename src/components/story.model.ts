export interface IStory {
  by: string;
  descendants: number;
  id: number;
  score: number;
  kids: number[];
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface IComment {
  by: string;
  parent: number;
  id: number;
  kids?: number[];
  time: number;
  text: string;
  type: string;
}


export type ProgramDataType = {
  id: number;
  name: string;
  animation: any;
  navigate: string;
  description: string;
  slug: string
}

export type quarterDataType = {
  quarter: string;
  tag: string;
  course: {
    title: string;
    learning: ({
      title: string;
      link?: string;
    } )[];
  }[];
} | undefined




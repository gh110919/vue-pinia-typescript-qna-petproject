export type TQna = {
  id: number;
  question: string;
  answer: string;
};

declare module "*.json" {
  const value: TQna[];
  export default value;
}

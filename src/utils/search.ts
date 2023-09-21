import { TQna } from "../assets";

export const search = (inputText: string, array: TQna[]): TQna | undefined => {
  return array.find((element: TQna) => {
    return (
      element.question.toLowerCase().includes(inputText.toLowerCase()) ||
      element.answer.toLowerCase().includes(inputText.toLowerCase()) ||
      element.id.toString().includes(inputText.toString())
    );
  });
};
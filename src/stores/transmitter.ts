import { defineStore } from "pinia";
import { TQna } from "../assets";

type TModal = {
  state: boolean;
};

export const useTransmitter = defineStore("transmitter", {
  state: () => ({
    dataState: {
      id: 0,
      question: "Нет вопроса ?",
      answer: "Нет ответа !",
    },
    modalState: {
      state: false,
    },
  }),
  actions: {
    setData(payload: TQna) {
      this.dataState.id = payload.id;
      this.dataState.question = payload.question;
      this.dataState.answer = payload.answer;
    },
    setModal(payload: TModal) {
      this.modalState.state = payload.state;
    },
  },
  getters: {
    getDataState(): TQna {
      return this.dataState;
    },
    getModalState(): TModal {
      return this.modalState;
    },
  },
});

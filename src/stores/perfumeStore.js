import perfumes from "../products";
import { makeAutoObservable } from "mobx";

class PerfumeStore {
  perfumes = perfumes;

  constructor() {
    makeAutoObservable(this);
  }
  perfumeDelete = (perfumeId) => {
    const updatedPerfumes = this.perfumes.filter(
      (perfume) => perfume.id !== perfumeId
    );
    this.perfumes = updatedPerfumes;
  };
}

const perfumeStore = new PerfumeStore();

export default perfumeStore;

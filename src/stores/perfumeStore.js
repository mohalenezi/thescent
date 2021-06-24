import perfumes from "../products";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
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

  perfumeCreate = (newPerfume) => {
    newPerfume.id = this.perfumes.length + 1;
    newPerfume.slug = slugify(newPerfume.name);
    this.perfumes.push(newPerfume);
  };
}

const perfumeStore = new PerfumeStore();

export default perfumeStore;

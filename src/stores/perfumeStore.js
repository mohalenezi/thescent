import perfumes from "../products";
import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class PerfumeStore {
  perfumes = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchPerfumes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/perfumes");
      this.perfumes = response.data;
    } catch (error) {
      console.log("fetchPerfumes: ", error);
    }
  };
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

  perfumeUpdate = (updatePerfume) => {
    const perfume = this.perfumes.find(
      (perfume) => perfume.id === updatePerfume.id
    );
    perfume.name = updatePerfume.name;
    perfume.description = updatePerfume.description;
    perfume.price = updatePerfume.price;
    perfume.image = updatePerfume.image;
    perfume.slug = slugify(updatePerfume.name);
  };
}

const perfumeStore = new PerfumeStore();
perfumeStore.fetchPerfumes();

export default perfumeStore;

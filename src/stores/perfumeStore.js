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
  perfumeDelete = async (perfumeId) => {
    try {
      await axios.delete(`http://localhost:8000/perfumes/${perfumeId}`);
      const updatedPerfumes = this.perfumes.filter(
        (perfume) => perfume.id !== perfumeId
      );
      this.perfumes = updatedPerfumes;
    } catch (error) {
      console.error(error);
    }
  };

  perfumeCreate = async (newPerfume) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/perfumes",
        newPerfume
      );
      this.perfumes.push(response.data);
    } catch (error) {
      console.log(error);
    }
    // newPerfume.id = this.perfumes.length + 1;
    // newPerfume.slug = slugify(newPerfume.name);
  };

  perfumeUpdate = async (updatePerfume) => {
    try {
      await axios.put(
        `http://localhost:8000/perfumes/${updatePerfume.id}`,
        updatePerfume
      );
      const perfume = this.perfumes.find(
        (perfume) => perfume.id === updatePerfume.id
      );
      perfume.name = updatePerfume.name;
      perfume.description = updatePerfume.description;
      perfume.price = updatePerfume.price;
      perfume.image = updatePerfume.image;
      perfume.slug = slugify(updatePerfume.name);
    } catch (error) {
      console.log(error);
    }
  };
}

const perfumeStore = new PerfumeStore();
perfumeStore.fetchPerfumes();

export default perfumeStore;

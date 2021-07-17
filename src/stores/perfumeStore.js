import { makeAutoObservable } from "mobx";
import instance from "./instance";

class PerfumeStore {
  perfumes = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchPerfumes = async () => {
    try {
      const response = await instance.get("/perfumes");
      this.perfumes = response.data;
      this.loading = false;
    } catch (error) {
      console.log("fetchPerfumes: ", error);
    }
  };
  perfumeDelete = async (perfumeId) => {
    try {
      await instance.delete(`/perfumes/${perfumeId}`);
      const updatedPerfumes = this.perfumes.filter(
        (perfume) => perfume.id !== perfumeId
      );
      this.perfumes = updatedPerfumes;
    } catch (error) {
      console.error(error);
    }
  };

  perfumeCreate = async (newPerfume, shop) => {
    try {
      const formData = new FormData();
      for (const key in newPerfume) formData.append(key, newPerfume[key]);
      const response = await instance.post(
        `/shops/${shop.id}/perfumes`,
        formData
      );
      this.perfumes.push(response.data);
      shop.perfumes.push({ id: response.data.id });
    } catch (error) {
      console.log(error);
    }
    // newPerfume.id = this.perfumes.length + 1;
    // newPerfume.slug = slugify(newPerfume.name);
  };

  perfumeUpdate = async (updatePerfume) => {
    try {
      const formData = new FormData();
      for (const key in updatePerfume) formData.append(key, updatePerfume[key]);
      const response = await instance.put(
        `/perfumes/${updatePerfume.id}`,
        formData
      );
      const perfume = this.perfumes.find(
        (perfume) => perfume.id === response.data.id
      );
      for (const key in perfume) perfume[key] = response.data[key]; //loop over the keys variable which are the attributes in each object at the array

      // perfume.name = updatePerfume.name;
      // perfume.description = updatePerfume.description;
      // perfume.price = updatePerfume.price;
      // perfume.image = updatePerfume.image;
      // perfume.slug = slugify(updatePerfume.name);
    } catch (error) {
      console.log(error);
    }
  };

  getPerfumeById = (perfumeId) =>
    this.perfumes.find((perfume) => perfume.id === perfumeId);
}

const perfumeStore = new PerfumeStore();
perfumeStore.fetchPerfumes();

export default perfumeStore;

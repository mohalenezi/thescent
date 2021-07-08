import { makeAutoObservable } from "mobx";
import axios from "axios";

class ShopStore {
  shops = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchShops = async () => {
    try {
      const response = await axios.get("http://localhost:8000/shops");
      this.shops = response.data;
    } catch (error) {
      console.log("fetchShops: ", error);
    }
  };

  shopCreate = async (newShop) => {
    try {
      const formData = new FormData();
      for (const key in newShop) formData.append(key, newShop[key]);
      const response = await axios.post(
        "http://localhost:8000/shops",
        formData
      );
      this.shops.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;

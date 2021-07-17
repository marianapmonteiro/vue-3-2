import axios from "axios";
import { reactive, readonly } from "vue";

interface ProductApi {
  id: string;
  category: string;
  description: string;
  price: number;
  title: string;
  image: string;
}
export interface Product {
  id: number;
  category: string;
  description: string;
  price: number;
  title: string;
  image: string;
}
export interface CardState {
  products: Product[];
  myProducts: Product[];
  busy: boolean;
  categories: string[];
}
const state: CardState = reactive({
  products: [],
  myProducts: [],
  categories: [],
  busy: false
});

const mutations = {
  setBusy(value: boolean) {
    state.busy = value;
  },
  processProducts(product: Product) {
    const idx = state.products.findIndex(p => p.id === product.id);
    if (idx > -1) {
      state.products[idx] = product;
    } else {
      state.products.push(product);
    }

    //  console.log("---->", product.category);
    //  let i;
    //  const category = product.category;
    //  for (i = 0; i < product.category.length; i++) {
    //    state.categories.includes(category);
    //    if (!state.categories.includes(category)) {
    //      state.categories.push(category);
    //      console.log("---> array das categorias", state.categories);
    //    }
    //  }

    // Vamos ver se a categoria ja existe dentro do array state.categories
    if (!state.categories.includes(product.category)) {
      // Como sabemos que nao existe, fazemos o push
      state.categories.push(product.category);
    }

    return false;
  },
  buyProduct(product: Product) {
    state.myProducts.push(product);
  },
  sellProduct(product: Product) {
    state.myProducts = state.myProducts.filter(p => p.id !== product.id);
  }
};

const actions = {
  async loadProducts() {
    mutations.setBusy(true);
    const res = await axios.get("https://fakestoreapi.com/products");
    res.data.forEach((product: ProductApi) => {
      console.log(product);
      actions.loadProduct(product.id);
    });
    console.log("res", res.data);
    mutations.setBusy(false);
  },
  async loadProduct(id: string) {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const product: Product = {
      id: res.data.id,
      category: res.data.category,
      description: res.data.description,
      price: res.data.price,
      title: res.data.title,
      image: res.data.image
    };
    mutations.processProducts(product);
  },
  async loadMyproduct(): Promise<boolean> {
    const key = "Store";
    const products = localStorage.getItem(key);
    if (products) {
      // console.log('--->', JSON.stringify(products));
      state.myProducts = JSON.parse(products);
    }
    return true;
  },
  async buyProduct(product: Product): Promise<boolean> {
    mutations.buyProduct(product);
    const key = "Store";
    localStorage.setItem(key, JSON.stringify(state.myProducts));
    return true;
  },
  async sellProduct(product: Product): Promise<boolean> {
    mutations.sellProduct(product);
    const key = "Store";
    localStorage.setItem(key, JSON.stringify(state.myProducts));
    return true;
  }
};
export default function useCards() {
  return readonly({
    state,
    mutations,
    actions
  });
}

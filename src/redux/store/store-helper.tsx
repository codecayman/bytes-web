import { StoreModel } from "../reducers";

export default class StoreHelper {
  static store: any;

  static getStore(): StoreModel {
    return this.store.getState();
  }

  static setStore(store: StoreModel) {
    this.store = store;
  }
}

import { CreateStoreDto } from "stores/dtos/stores.dto";
import storesModel from "../../models/stores.model";

class StoreService {

    async getStores() {
        return storesModel.find();
    }

    async createStore(store: CreateStoreDto) {
        return storesModel.create(store);
    }

    async deleteStore(id: string) {
        return storesModel.findByIdAndDelete(id);
    }

    async updateStore(id: string, store: CreateStoreDto) {
        return storesModel.findByIdAndUpdate(id, store, { new: true });
    }

    async getStoreById(id: string) {
        return storesModel.findById(id);
    }

}

export default new StoreService();
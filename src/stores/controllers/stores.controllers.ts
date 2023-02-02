import express from "express"
import mongoose from "mongoose";
import storesService from "../services/stores.service"

class StoresController {

    async getStores(req: express.Request, res: express.Response) {
        try {
            const stores = await storesService.getStores()
            res.status(200).json([...stores])
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: "Error al recuperar las tiendas" })
        }
    }
    async createStore(req: express.Request, res: express.Response) {
        try {
            const store = await storesService.createStore(req.body)
            res.status(200).json(store)
        } catch (error) {
            if (error instanceof mongoose.Error.ValidationError) {
                res.status(400).json({ message: "Campos obligatorios faltantes" })
            }
            res.status(400).json({ message: "Error al crear la tienda" })
        }
    }
    async deleteStore(req: express.Request, res: express.Response) {
        try {
            const store = await storesService.deleteStore(req.params.id)
            res.status(200).json(store)
        } catch (error) {
            res.status(400).json({ message: "Error al eliminar la tienda" })
        }
    }

    async updateStore(req: express.Request, res: express.Response) {
        try {
            const store = await storesService.updateStore(req.params.id, req.body)
            res.status(200).json(store)
        } catch (error) {
            if (error instanceof mongoose.Error.ValidationError) {
                res.status(400).json({ message: error.message })
            }
            res.status(400).json({ message: "Error al actualizar la tienda" })
        }
    }
    async getStoreById(req: express.Request, res: express.Response) {
        try {
            const store = await storesService.getStoreById(req.params.id)
            res.status(200).json(store)
        } catch (error) {
            res.status(400).json({ message: "Error al recuperar la tienda" })
        }
    }


}
export default new StoresController()
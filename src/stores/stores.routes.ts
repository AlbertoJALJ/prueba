import express from "express"
import { CommonRoutesConfig } from "../common/common.routes.config";
import storesControllers from "./controllers/stores.controllers";
import storesMiddleware from "./middlewares/stores.middleware";

export class StoresRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'StoresRoutes');
    }
    configureRoutes(): express.Application {
        this.app.route(`/stores`)
            .get(
                storesControllers.getStores
            )
        this.app.route("/store/:id")
            .get(
                storesControllers.getStoreById
            )
        this.app.route("/store")
            .post(
                storesControllers.createStore
            )
        this.app.route("/store/:id")
            .delete(
                storesControllers.deleteStore
            )
        this.app.route("/store/:id")
            .patch(
                storesMiddleware.validateBodyFields,
                storesControllers.updateStore
            )

        return this.app;
    }
}
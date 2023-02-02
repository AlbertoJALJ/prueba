import express from "express";

class StoresMiddleware {

    async validateBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const keys_permitidas = ["nombre", "descripcion", "latitud", "longitud", "direccion", "telefono", "horario", "email", "whatsapp", "sitio_web"]
        for (const key in req.body) {
            if (!keys_permitidas.includes(key)) {
                delete req.body[key]
            }
        }
        next()
    }
}

export default new StoresMiddleware();

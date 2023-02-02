import mongoose from "../config/db";

const StoresSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    latitud: {
        type: String,
        required: true
    },
    longitud: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        default: ""
    },
    horario: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    whatsapp: {
        type: String,
        default: ""
    },
    sitio_web: {
        type: String,
        default: ""
    },
});

export default mongoose.model("stores", StoresSchema);

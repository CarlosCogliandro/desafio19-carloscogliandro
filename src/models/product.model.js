import mongoose from "mongoose";

const collection = 'Products';

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        default: 'Alguna descripcion correcta del producto!'
    },
    id: {
        type: Number,
        required: true,
        unique: true
    },
    stock: {
        type: Number,
        required: true
    }
}, { versionKey: false });

const productsModel = mongoose.model(collection, productsSchema);

export default productsModel;
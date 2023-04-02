import { productsService } from "../dao/index.js";

const productosGetAll = async (req, res) => {
    const prod = await productsService.getAll();
    res.render('productos', { prod })
};

const productosSave = async (req, res) => {
    let prod = req.body
    await productsService.save(prod)
    res.redirect('/home')
};

export default {
    productosGetAll,
    productosSave
}
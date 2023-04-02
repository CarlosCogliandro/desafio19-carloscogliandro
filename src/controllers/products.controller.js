import { productsService } from "../dao/index.js";


const productsGetAll = async (req, res) => {
    const prod = await productsService.getAll();
    res.render('productos', { prod })
};

const productsSave = async (req, res) => {
    const file = req.file;
    const { title, price, description, code, stock } = req.body;
    if (!title || !price || !description || !code || !stock) return res.status(400).send({ status: "error", error: "Valores incompletos" });
    const product = {
        title,
        price,
        description,
        code,
        stock,
        image: `${req.protocol}//${req.hostname}:${process.env.PORT}/img/${file.filename}`
    };
    const result = await productsService.create(product);
    res.send({ status: "success", payload: result})
};

export default {
    productsGetAll,
    productsSave
}
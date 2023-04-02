import productsModel from '../../models/product.model.js';

class mongoProducts {
    async getAll() {
        const products = await productsModel.find()
            .then(data => data)
            .catch(e => { Error: e });
        return products;
    };

    async getRandom(id) {
        const products = await productsModel.findOne({ id })
            .then(data => data)
            .catch(e => { Error: e });
        return products;
    };

    async save(product) {
        const createData = await productsModel.create(product)
            .then(data => data)
            .catch(e => { Error: e });
        return createData;
    };

    async deleteById(id) {
        const products = await productsModel.findOneAndDelete({ id })
            .then(data => data)
            .catch(e => { Error: e });
        return products;
    };

    async updateById(id, data) {
        const products = await productsModel.updateOne({ id }, data)
            .then(data => data)
            .catch(e => { Error: e });
        return products;
    };
};

export default mongoProducts;
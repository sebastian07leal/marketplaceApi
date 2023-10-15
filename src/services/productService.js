import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

class ProductService {
    _client;

    constructor() {
        try {
            this._client = new Pool({
                connectionString: process.env.POSTGRES_URL + '?sslmode=require',
            });
        } catch (error) {
            error.message = 'DB connection error';
            throw error;
        }
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ProductService();
        }
        return this.instance;
    }

    async getAllProducts() {
        try {
            const response = await this._client.query('SELECT * FROM product');

            return response.rows;
        } catch (error) {
            error.message = 'Error when bringing all the products';
            throw error;
        }
    }

    async getProductsById(id) {
        try {
            const response = await this._client.query(
                'SELECT * FROM product WHERE id = $1;',
                [id],
            );

            return response.rows;
        } catch (error) {
            error.message = 'Error when bringing the product';
            throw error;
        }
    }

    async createNewProduct(data) {
        try {
            const { sector, name, price, description, discount } = data;

            const response = await this._client.query(
                'INSERT INTO product (id_sector, name_product, price, description, discount) VALUES ($1, $2, $3, $4, $5) RETURNING id;',
                [sector, name, price, description, discount],
            );
            return response.rows[0].id;
        } catch (error) {
            error.message = 'Error when creating a new product';
            throw error;
        }
    }

    async updateProductById(id, data) {
        try {
            const { sector, name, price, description, discount } = data;

            const response = await this._client.query(
                'UPDATE product SET id_sector = $1, name_product = $2, price = $3, description = $4, discount = $5 WHERE id = $6 RETURNING id;',
                [sector, name, price, description, discount, id],
            );
            return response.rows[0].id;
        } catch (error) {
            error.message = 'Error when updating a product';
            throw error;
        }
    }

    async deleteProductById(id) {
        try {
            const response = await this._client.query(
                'DELETE FROM product WHERE id = $1 RETURNING id;',
                [id],
            );
            return response.rows[0].id;
        } catch (error) {
            error.message = 'Error when deleting a product';
            throw error;
        }
    }
}

export default ProductService;

/* eslint-disable no-undef */
require('dotenv').config();

const { Pool } = require('pg');
const { createToken } = require('../utils/jwt');
const { verifyPassword } = require('../utils/hashUtil');


class AuthService {
  _client;

  constructor() {
    try {
      this._client = new Pool({
        connectionString: process.env.POSTGRES_URL + "?sslmode=require",
      });
      
    } catch(error) {
      error.message = 'DB connection error';
      throw error;
    }
  }

  static getInstance() {
    if(!this.instance){
      this.instance = new AuthService;
    }
    return this.instance;
  }


  async login(data) {
    try {
      const { username: userName, password } = data;

    const responseHash = await this._client.query('SELECT password, id, role  FROM users WHERE username = $1;', [
        userName,
      ]);

    await verifyPassword(password, responseHash.rows[0].password);    

    const payload = {
      id: responseHash.rows[0].id,
      role: responseHash.rows[0].role,
    };

    const responseAuthToken =  createToken(payload);

      return responseAuthToken;
    } catch (error) {
      error.message = 'invalid user or password';
      throw error;
    }
  }
}

module.exports = AuthService;
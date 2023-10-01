/* eslint-disable no-undef */
require('dotenv').config();
const { Pool } = require('pg')

class SectorService {
  _client;

  constructor() {
    try {
      this._client = new Pool({
        connectionString: process.env.POSTGRES_URL + "?sslmode=require",
      })
      
    } catch(error) {
      error.message = 'DB connection error';
      throw error;
    }
  }

  static getInstance() {
    if(!this.instance){
      this.instance = new SectorService;
    }
    return this.instance;
  }

  async getAllSectors() {
    try {
      const response = await this._client.query('SELECT * FROM sector');

      return response.rows;
    } catch (error) {
      error.message = 'Error when bringing all the sector';
      throw error;
    }
  }

  async createNewSector(data) {
    try {
      const { id: idSector, name, description } = data;

      const response = await this._client.query('INSERT INTO sector (id, name_sector, description) VALUES ($1, $2, $3);', [
        idSector,
        name,
        description,
      ]);
      return response.rows[0];
    } catch (error) {
      error.message = 'Error when creating a new sector';
      throw error;
    }
  }

  async updateSectorById(id, data) {
    try {
      const { id: idSector, name, description } = data;

      const response = await this._client.query('UPDATE sector SET id = $1, name_sector = $2, description = $3 WHERE id = $4;', [
        idSector,
        name,
        description,
        id,
      ]);
      return response.rows[0];
    } catch (error) {
      error.message = 'Error when updating a sector';
      throw error;
    }
  }

}

module.exports = SectorService;
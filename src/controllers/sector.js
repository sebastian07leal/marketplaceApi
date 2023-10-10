const SectorService = require('../services/sectorService');

const allSectors = async (_req, res) => {
    try {
        const response = await SectorService.getInstance().getAllSectors();

        res.send(response);
    } catch (error) {
        res.status(400).json({ error: `Sector error: ${error.message}` });
    }
};

const createSector = async (req, res) => {
    try {
        const { body } = req;

        const response =
            await SectorService.getInstance().createNewSector(body);

        res.send(response);
    } catch (error) {
        res.status(400).json({ error: `Sector error: ${error.message}` });
    }
};

const putSectorById = async (req, res) => {
    try {
        const {
            body,
            params: { id },
        } = req;

        const response = await SectorService.getInstance().updateSectorById(
            id,
            body,
        );

        res.send(response);
    } catch (error) {
        res.status(400).json({ error: `Sector error: ${error.message}` });
    }
};

module.exports = {
    allSectors,
    createSector,
    putSectorById,
};

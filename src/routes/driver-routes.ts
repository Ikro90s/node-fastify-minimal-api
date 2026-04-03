import { FastifyPluginAsync } from 'fastify';

import { getDriverById, getDrivers } from '../controllers/driver-controller';

export const driverRoutes: FastifyPluginAsync = async (app) => {
  app.get('/drivers', getDrivers);
  app.get('/drivers/:id', getDriverById);
};

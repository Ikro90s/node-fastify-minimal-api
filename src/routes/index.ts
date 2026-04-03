import { FastifyPluginAsync } from 'fastify';

import { driverRoutes } from './driver-routes';
import { teamRoutes } from './team-routes';

export const registerRoutes: FastifyPluginAsync = async (app) => {
  await app.register(teamRoutes);
  await app.register(driverRoutes);
};

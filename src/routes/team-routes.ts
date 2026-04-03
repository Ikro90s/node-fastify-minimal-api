import { FastifyPluginAsync } from 'fastify';

import { getTeams } from '../controllers/team-controller';

export const teamRoutes: FastifyPluginAsync = async (app) => {
  app.get('/teams', getTeams);
};

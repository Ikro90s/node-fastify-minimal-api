import cors from '@fastify/cors';
import { FastifyPluginAsync } from 'fastify';

export const registerCorsPlugin: FastifyPluginAsync = async (app) => {
  await app.register(cors, {
    origin: '*',
    methods: ['GET'],
  });
};

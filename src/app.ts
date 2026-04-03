import fastify from 'fastify';

import { registerCorsPlugin } from './plugins/cors';
import { registerRoutes } from './routes';

export function buildApp() {
  const app = fastify({ logger: true });

  void app.register(registerCorsPlugin);
  void app.register(registerRoutes);

  return app;
}

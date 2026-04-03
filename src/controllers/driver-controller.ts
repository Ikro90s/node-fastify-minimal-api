import { FastifyReply, FastifyRequest } from 'fastify';

import { IdParams } from '../interfaces/http';
import { driverService } from '../services/driver-service';
import { parseId } from '../utils/parse-id';

export async function getDrivers(
  _request: FastifyRequest,
  reply: FastifyReply,
) {
  return reply.code(200).send(driverService.list());
}

export async function getDriverById(
  request: FastifyRequest<{ Params: IdParams }>,
  reply: FastifyReply,
) {
  const id = parseId(request.params.id);

  if (id === null) {
    return reply.code(400).send({ error: 'invalid driver id' });
  }

  const driver = driverService.findById(id);

  if (!driver) {
    return reply.code(404).send({ error: 'driver not found' });
  }

  return reply.code(200).send(driver);
}

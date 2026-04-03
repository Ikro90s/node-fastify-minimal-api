import { FastifyReply, FastifyRequest } from 'fastify';

import { teamService } from '../services/team-service';

export async function getTeams(_request: FastifyRequest, reply: FastifyReply) {
  return reply.code(200).send(teamService.list());
}

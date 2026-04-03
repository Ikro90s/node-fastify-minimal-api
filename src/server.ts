import fastify from 'fastify';

const server = fastify({ logger: true });
const teams = [
  {
    id: 1,
    name: 'ferrari',
    base: 'italy',
    worldChampionships: 16,
    highestRaceFinish: 1,
    polePositions: 230,
    fastestLaps: 253,
  },
  {
    id: 2,
    name: 'mercedes',
    base: 'germany',
    worldChampionships: 8,
    highestRaceFinish: 1,
    polePositions: 150,
    fastestLaps: 200,
  },
];

const drivers = [
  {
    id: 1,
    name: 'lewis hamilton',
    team: 1,
    worldChampionships: 7,
    highestRaceFinish: 1,
    polePositions: 100,
    fastestLaps: 50,
  },
  {
    id: 2,
    name: 'max verstappen',
    team: 2,
    worldChampionships: 1,
    highestRaceFinish: 1,
    polePositions: 20,
    fastestLaps: 10,
  },
];
server.get('/teams', async (req, res) => {
  res.type('application/json').code(200);
  return teams;
});

server.get('/drivers', async (req, res) => {
  res.type('application/json').code(200);
  return drivers;
});

interface DriverParam {
  id: string;
}

server.get<{ Params: DriverParam }>('/drivers/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const driver = drivers.find((d) => d.id === id);
  if (!driver) {
    res.type('application/json').code(404);
    return { error: 'driver not found' };
  } else {
    res.type('application/json').code(200);
    return driver;
  }
});

server.listen({ port: 3333 }, () => {
  console.log('server init: ' + server.server.address);
});

const DEFAULT_PORT = 3333;

function toPort(value: string | undefined): number {
  if (!value) {
    return DEFAULT_PORT;
  }

  const parsed = Number.parseInt(value, 10);

  return Number.isNaN(parsed) ? DEFAULT_PORT : parsed;
}

export const env = {
  PORT: toPort(process.env.PORT),
};

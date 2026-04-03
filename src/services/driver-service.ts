import { drivers } from '../data/drivers';

export const driverService = {
  list() {
    return drivers;
  },

  findById(id: number) {
    return drivers.find((driver) => driver.id === id);
  },
};

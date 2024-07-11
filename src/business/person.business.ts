import * as personDatasource from '../datasources/person.datasource';

export const createPerson = async (name: string, salary: number, isHired: boolean) => {
  if (!name || !salary) {
    throw Error('Name and Salary are required');
  }

  const personData = { name, salary, isHired };

  return await personDatasource.createPerson(personData);
};

export const getPersonById = async (id: string) => {
  try {
    const person = await personDatasource.getPersonById(id);
    if (!person) {
      throw new Error('Not found');
    }
    return person;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPeople = async () => {
  try {
    const people = await personDatasource.getPeople();
    return people;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updatePerson = async (id: string, personData: { name: string; salary: number; isHired: boolean }) => {
  try {
    const updatedPerson = await personDatasource.updatePerson(id, personData);
    return updatedPerson;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePerson = async (id: string) => {
  try {
    const person = await personDatasource.deletePerson(id);
    return person;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
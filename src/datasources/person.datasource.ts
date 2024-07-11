import { Person } from '../database/models/Person';

export const createPerson = async (personData: { name: string; salary: number; isHired: boolean }) => {
  try {
    const personExists = await Person.findOne({ where: { name: personData.name } });

    if (personExists) {
      throw new Error('This person has already been created');
    }

    return await Person.create(personData);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPersonById = async (id: string) => {
  try {
    const person = await Person.findOne({ where: { id } });
    return person;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPeople = async () => {
  try {
    const people = await Person.findAll();
    return people;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updatePerson = async (id: string, personData: { name: string; salary: number; isHired: boolean }) => {
  try {
    const updatedPerson = Person.update(personData, { where: { id } });
    if (!updatedPerson) {
      throw new Error('Person not found');
    }
    return updatedPerson;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deletePerson = async (id: string) => {
  try {
    const person = await Person.findOne({ where: { id } });
    if (!person) {
      throw new Error('Person not found or have already been deleted');
    }
    return Person.destroy({ where: { id } });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

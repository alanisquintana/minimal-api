import { Request, Response } from 'express';
import * as personBusiness from '../business/person.business';

export const createPerson = async (req: Request, res: Response) => {
  const { name, salary, isHired } = req.body;

  try {
    await personBusiness.createPerson(name, salary, isHired);

    res.status(201).json({ message: 'Person successfully registered!' });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getPersonById = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const targetPerson = await personBusiness.getPersonById(id);

    if (!targetPerson) {
      res.status(404).json({ error: 'Person not found' });
    }

    res.status(200).json({ targetPerson });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getPeople = async (_req: Request, res: Response) => {
  try {
    const people = await personBusiness.getPeople();

    if (!people) {
      res.status(404).json({ error: 'People not found' });
    }

    res.status(200).json({ people });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updatePerson = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, salary, isHired } = req.body;

  try {
    const person = { name, salary, isHired };
    const updatedPerson = personBusiness.updatePerson(id, person);
    res.status(200).json({ updatedPerson });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deletePerson = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    await personBusiness.deletePerson(id);
    res.status(201).json({ message: 'Person successfully deleted!' });
  } catch (error) {
    res.status(404).json({ error: 'Person not Found' });
  }
};

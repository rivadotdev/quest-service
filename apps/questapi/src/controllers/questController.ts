// src/controllers/questController.ts
import { FastifyRequest, FastifyReply } from 'fastify';
import QuestService from '../services/questServices';
import { QuestType } from '@prisma/client';

function isValidQuestType(type: any): type is QuestType {
  return Object.values(QuestType).includes(type);
}

class QuestController {
  // Create a new quest
  async create(request: FastifyRequest, reply: FastifyReply) {
    const { name, type, parentId } = request.body as { name: string; type: string; parentId?: number };

    // Validate type
    if (!isValidQuestType(type)) {
      return reply.status(400).send({ error: 'Invalid quest type' });
    }

    try {
      const newQuest = await QuestService.createQuest({ name, type, parentId });
      return reply.status(201).send(newQuest);
    } catch (error) {
      return reply.status(500).send({ error: 'Failed to create quest' });
    }
  }

  // Get all quests
  async getAll(request: FastifyRequest, reply: FastifyReply) {
    try {
      const quests = await QuestService.getAllQuests();
      return reply.status(200).send(quests);
    } catch (error) {
      return reply.status(500).send({ error: 'Failed to fetch quests' });
    }
  }

  // Get a quest by ID
  async getById(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }; // the id is likely a string from URL parameters

    // Parse the string id to an integer
    const questId = parseInt(id);

    if (isNaN(questId)) {
      return reply.status(400).send({ error: 'Invalid id provided, must be a valid number' });
    }

    try {
      const quest = await QuestService.getQuestById(questId);
      if (!quest) {
        return reply.status(404).send({ error: 'Quest not found' });
      }
      return reply.status(200).send(quest);
    } catch (error) {
      return reply.status(500).send({ error: 'Failed to fetch quest' });
    }
  }

  // Update a quest
  async update(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const { name, type, parentId } = request.body as { name?: string; type?: string; parentId?: string };

    // Parse the string id to an integer
    const questId = parseInt(id);

    if (isNaN(questId)) {
      return reply.status(400).send({ error: 'Invalid id provided, must be a valid number' });
    }

    // If type is provided, validate it
    if (type && !isValidQuestType(type)) {
      return reply.status(400).send({ error: 'Invalid quest type' });
    }

    // Prepare update data
    const updateData: { name?: string; type?: QuestType; parentId?: number } = {};

    if (name) {
      updateData.name = name;
    }
    if (type) {
      updateData.type = type as QuestType; // Safely cast the type to QuestType
    }
    if (parentId) {
      const parentIdInt = parseInt(parentId);
      if (isNaN(parentIdInt)) {
        return reply.status(400).send({ error: 'Invalid parent id provided, must be a valid number' });
      }
      updateData.parentId = parentIdInt;
    }

    try {
      // Update the quest via the service
      const updatedQuest = await QuestService.updateQuest(questId, updateData);

      if (!updatedQuest) {
        return reply.status(404).send({ error: 'Quest not found' });
      }

      return reply.status(200).send(updatedQuest);
    } catch (error) {
      return reply.status(500).send({ error: 'Failed to update quest' });
    }
  }

  // Delete a quest
  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string }; // the id is likely a string from URL parameters

    // Parse the string id to an integer
    const questId = parseInt(id);

    if (isNaN(questId)) {
      return reply.status(400).send({ error: 'Invalid id provided, must be a valid number' });
    }

    try {
      const deletedQuest = await QuestService.deleteQuest(questId);
      return reply.status(200).send(deletedQuest);
    } catch (error) {
      console.log(error);
      return reply.status(500).send({ error: 'Failed to delete quest' });
    }
  }
}

export default new QuestController();
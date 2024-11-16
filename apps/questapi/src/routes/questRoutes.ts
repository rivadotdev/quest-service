// src/routes/questRoutes.ts
import { FastifyInstance } from 'fastify';
import QuestController from '../controllers/questController';

async function questRoutes(fastify: FastifyInstance) {
  fastify.post('/quests', QuestController.create); // Create a quest
  fastify.get('/quests', QuestController.getAll); // Get all quests
  fastify.get('/quests/:id', QuestController.getById); // Get a quest by ID
  fastify.put('/quests/:id', QuestController.update); // Update a quest
  fastify.delete('/quests/:id', QuestController.delete); // Delete a quest
}

export default questRoutes;
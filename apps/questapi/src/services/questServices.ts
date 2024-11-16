// src/services/questService.ts
import prisma from '../models/prisma';
import { QuestType } from '@prisma/client';

class QuestService {
  // Create a new quest
  async createQuest(data: {
    name: string;
    type: QuestType;
    parentId?: number;
  }) {
    const quest = await prisma.quest.create({
      data,
    });
    return quest;
  }

  // Get a quest by its ID with children
  async getQuestById(id: number) {
    const quest = await prisma.quest.findUnique({
      where: { id },
      include: { children: true },
    });
    return quest;
  }

  // Get all quests
  async getAllQuests() {
    const quests = await prisma.quest.findMany();
    return quests;
  }

  // Update a quest
  async updateQuest(id: number, data: {
    name?: string;
    type?: QuestType;
    parentId?: number;
  }) {
    const updatedQuest = await prisma.quest.update({
      where: { id },
      data,
    });
    return updatedQuest;
  }

  // Delete a quest
  async deleteQuest(id: number) {
    const deletedQuest = await prisma.quest.delete({
      where: { id },
    });
    return deletedQuest;
  }
}

export default new QuestService();
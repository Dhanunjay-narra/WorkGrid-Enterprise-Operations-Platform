import { AiPromptsScheduleModel, AiPromptsScheduleValidator } from "@nexora/types/domains/ai/prompts/AiPromptsSchedule";

export class AiPromptsScheduleService {
  private repository = new Map<string, AiPromptsScheduleModel>();

  public create(data: Omit<AiPromptsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsScheduleModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsScheduleModel>): AiPromptsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsScheduleModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}

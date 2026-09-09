import { AiToolsScheduleModel, AiToolsScheduleValidator } from "@nexora/types/domains/ai/tools/AiToolsSchedule";

export class AiToolsScheduleService {
  private repository = new Map<string, AiToolsScheduleModel>();

  public create(data: Omit<AiToolsScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsScheduleModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsScheduleModel>): AiToolsScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsScheduleModel = {
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

import { AiRagScheduleModel, AiRagScheduleValidator } from "@nexora/types/domains/ai/rag/AiRagSchedule";

export class AiRagScheduleService {
  private repository = new Map<string, AiRagScheduleModel>();

  public create(data: Omit<AiRagScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagScheduleModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagScheduleModel>): AiRagScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagScheduleModel = {
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

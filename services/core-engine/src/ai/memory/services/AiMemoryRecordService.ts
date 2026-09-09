import { AiMemoryRecordModel, AiMemoryRecordValidator } from "@nexora/types/domains/ai/memory/AiMemoryRecord";

export class AiMemoryRecordService {
  private repository = new Map<string, AiMemoryRecordModel>();

  public create(data: Omit<AiMemoryRecordModel, "id" | "version" | "createdAt" | "updatedAt">): AiMemoryRecordModel {
    const id = "ai_m_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiMemoryRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiMemoryRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiMemoryRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiMemoryRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiMemoryRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiMemoryRecordModel>): AiMemoryRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiMemoryRecordModel = {
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

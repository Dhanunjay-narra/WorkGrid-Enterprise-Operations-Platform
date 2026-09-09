import { AiToolsRecordModel, AiToolsRecordValidator } from "@nexora/types/domains/ai/tools/AiToolsRecord";

export class AiToolsRecordService {
  private repository = new Map<string, AiToolsRecordModel>();

  public create(data: Omit<AiToolsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsRecordModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsRecordModel>): AiToolsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsRecordModel = {
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

import { AiToolCallRecordData, AiToolCallRecordValidator } from "../../../../packages/types/src/domains/ai/AiToolCallRecord";

export class AiToolCallRecordService {
  private repository = new Map<string, AiToolCallRecordData>();

  public create(data: Omit<AiToolCallRecordData, "id" | "createdAt" | "updatedAt">): AiToolCallRecordData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiToolCallRecordData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolCallRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolCallRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolCallRecordData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiToolCallRecordData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiToolCallRecordData>): AiToolCallRecordData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolCallRecordData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}

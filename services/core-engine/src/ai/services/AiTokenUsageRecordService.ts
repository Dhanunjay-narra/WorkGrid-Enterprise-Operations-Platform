import { AiTokenUsageRecordData, AiTokenUsageRecordValidator } from "../../../../packages/types/src/domains/ai/AiTokenUsageRecord";

export class AiTokenUsageRecordService {
  private repository = new Map<string, AiTokenUsageRecordData>();

  public create(data: Omit<AiTokenUsageRecordData, "id" | "createdAt" | "updatedAt">): AiTokenUsageRecordData {
    const id = "ai_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: AiTokenUsageRecordData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiTokenUsageRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiTokenUsageRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiTokenUsageRecordData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): AiTokenUsageRecordData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<AiTokenUsageRecordData>): AiTokenUsageRecordData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiTokenUsageRecordData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}

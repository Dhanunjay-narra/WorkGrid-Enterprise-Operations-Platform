import { CommMentionRecordData, CommMentionRecordValidator } from "../../../../packages/types/src/domains/communication/CommMentionRecord";

export class CommMentionRecordService {
  private repository = new Map<string, CommMentionRecordData>();

  public create(data: Omit<CommMentionRecordData, "id" | "createdAt" | "updatedAt">): CommMentionRecordData {
    const id = "com_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CommMentionRecordData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMentionRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMentionRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMentionRecordData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CommMentionRecordData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CommMentionRecordData>): CommMentionRecordData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMentionRecordData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}

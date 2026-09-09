import { CommCallsRecordModel, CommCallsRecordValidator } from "@nexora/types/domains/comm/calls/CommCallsRecord";

export class CommCallsRecordService {
  private repository = new Map<string, CommCallsRecordModel>();

  public create(data: Omit<CommCallsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsRecordModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsRecordModel>): CommCallsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsRecordModel = {
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

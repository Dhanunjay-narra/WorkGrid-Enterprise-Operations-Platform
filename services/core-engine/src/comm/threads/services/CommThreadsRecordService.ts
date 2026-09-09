import { CommThreadsRecordModel, CommThreadsRecordValidator } from "@nexora/types/domains/comm/threads/CommThreadsRecord";

export class CommThreadsRecordService {
  private repository = new Map<string, CommThreadsRecordModel>();

  public create(data: Omit<CommThreadsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsRecordModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsRecordModel>): CommThreadsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsRecordModel = {
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

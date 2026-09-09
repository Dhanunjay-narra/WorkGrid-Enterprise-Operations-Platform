import { CommPresenceRecordModel, CommPresenceRecordValidator } from "@nexora/types/domains/comm/presence/CommPresenceRecord";

export class CommPresenceRecordService {
  private repository = new Map<string, CommPresenceRecordModel>();

  public create(data: Omit<CommPresenceRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceRecordModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceRecordModel>): CommPresenceRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceRecordModel = {
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

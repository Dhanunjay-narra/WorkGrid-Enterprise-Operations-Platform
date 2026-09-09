import { CommDigestRecordModel, CommDigestRecordValidator } from "@nexora/types/domains/comm/digest/CommDigestRecord";

export class CommDigestRecordService {
  private repository = new Map<string, CommDigestRecordModel>();

  public create(data: Omit<CommDigestRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestRecordModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestRecordModel>): CommDigestRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestRecordModel = {
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

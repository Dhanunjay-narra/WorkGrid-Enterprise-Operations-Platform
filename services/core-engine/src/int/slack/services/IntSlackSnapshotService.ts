import { IntSlackSnapshotModel, IntSlackSnapshotValidator } from "@nexora/types/domains/int/slack/IntSlackSnapshot";

export class IntSlackSnapshotService {
  private repository = new Map<string, IntSlackSnapshotModel>();

  public create(data: Omit<IntSlackSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackSnapshotModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackSnapshotModel>): IntSlackSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackSnapshotModel = {
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

import { IntOauthSnapshotModel, IntOauthSnapshotValidator } from "@nexora/types/domains/int/oauth/IntOauthSnapshot";

export class IntOauthSnapshotService {
  private repository = new Map<string, IntOauthSnapshotModel>();

  public create(data: Omit<IntOauthSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthSnapshotModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthSnapshotModel>): IntOauthSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthSnapshotModel = {
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

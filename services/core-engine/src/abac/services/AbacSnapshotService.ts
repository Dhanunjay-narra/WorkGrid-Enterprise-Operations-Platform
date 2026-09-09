import { AbacSnapshotModel, AbacSnapshotValidator } from "@nexora/types/domains/abac/AbacSnapshot";

export class AbacSnapshotService {
  private repository = new Map<string, AbacSnapshotModel>();

  public create(data: Omit<AbacSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): AbacSnapshotModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacSnapshotModel>): AbacSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacSnapshotModel = {
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

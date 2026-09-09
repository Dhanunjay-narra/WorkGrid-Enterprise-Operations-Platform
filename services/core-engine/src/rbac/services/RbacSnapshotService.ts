import { RbacSnapshotModel, RbacSnapshotValidator } from "@nexora/types/domains/rbac/RbacSnapshot";

export class RbacSnapshotService {
  private repository = new Map<string, RbacSnapshotModel>();

  public create(data: Omit<RbacSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): RbacSnapshotModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacSnapshotModel>): RbacSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacSnapshotModel = {
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

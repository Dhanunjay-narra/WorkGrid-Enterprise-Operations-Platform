import { IdentitySnapshotModel, IdentitySnapshotValidator } from "@nexora/types/domains/identity/IdentitySnapshot";

export class IdentitySnapshotService {
  private repository = new Map<string, IdentitySnapshotModel>();

  public create(data: Omit<IdentitySnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): IdentitySnapshotModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentitySnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentitySnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentitySnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentitySnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentitySnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentitySnapshotModel>): IdentitySnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentitySnapshotModel = {
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

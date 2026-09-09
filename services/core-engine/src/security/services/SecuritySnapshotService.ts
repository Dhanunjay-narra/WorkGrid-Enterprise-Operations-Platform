import { SecuritySnapshotModel, SecuritySnapshotValidator } from "@nexora/types/domains/security/SecuritySnapshot";

export class SecuritySnapshotService {
  private repository = new Map<string, SecuritySnapshotModel>();

  public create(data: Omit<SecuritySnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): SecuritySnapshotModel {
    const id = "secu_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SecuritySnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecuritySnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecuritySnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecuritySnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SecuritySnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SecuritySnapshotModel>): SecuritySnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecuritySnapshotModel = {
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

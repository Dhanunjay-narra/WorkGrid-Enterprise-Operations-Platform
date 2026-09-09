import { AuthSnapshotModel, AuthSnapshotValidator } from "@nexora/types/domains/auth/AuthSnapshot";

export class AuthSnapshotService {
  private repository = new Map<string, AuthSnapshotModel>();

  public create(data: Omit<AuthSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): AuthSnapshotModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthSnapshotModel>): AuthSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthSnapshotModel = {
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

import { CrmAccountsSnapshotModel, CrmAccountsSnapshotValidator } from "@nexora/types/domains/crm/accounts/CrmAccountsSnapshot";

export class CrmAccountsSnapshotService {
  private repository = new Map<string, CrmAccountsSnapshotModel>();

  public create(data: Omit<CrmAccountsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): CrmAccountsSnapshotModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmAccountsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmAccountsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmAccountsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmAccountsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmAccountsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmAccountsSnapshotModel>): CrmAccountsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmAccountsSnapshotModel = {
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

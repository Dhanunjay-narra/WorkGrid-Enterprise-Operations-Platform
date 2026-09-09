import { CrmContactsSnapshotModel, CrmContactsSnapshotValidator } from "@nexora/types/domains/crm/contacts/CrmContactsSnapshot";

export class CrmContactsSnapshotService {
  private repository = new Map<string, CrmContactsSnapshotModel>();

  public create(data: Omit<CrmContactsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsSnapshotModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsSnapshotModel>): CrmContactsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsSnapshotModel = {
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

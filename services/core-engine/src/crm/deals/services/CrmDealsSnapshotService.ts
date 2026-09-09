import { CrmDealsSnapshotModel, CrmDealsSnapshotValidator } from "@nexora/types/domains/crm/deals/CrmDealsSnapshot";

export class CrmDealsSnapshotService {
  private repository = new Map<string, CrmDealsSnapshotModel>();

  public create(data: Omit<CrmDealsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): CrmDealsSnapshotModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmDealsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmDealsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmDealsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmDealsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmDealsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmDealsSnapshotModel>): CrmDealsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmDealsSnapshotModel = {
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

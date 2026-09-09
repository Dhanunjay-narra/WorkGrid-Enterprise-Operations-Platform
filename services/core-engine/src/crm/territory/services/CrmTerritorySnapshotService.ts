import { CrmTerritorySnapshotModel, CrmTerritorySnapshotValidator } from "@nexora/types/domains/crm/territory/CrmTerritorySnapshot";

export class CrmTerritorySnapshotService {
  private repository = new Map<string, CrmTerritorySnapshotModel>();

  public create(data: Omit<CrmTerritorySnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritorySnapshotModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritorySnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritorySnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritorySnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritorySnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritorySnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritorySnapshotModel>): CrmTerritorySnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritorySnapshotModel = {
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

import { BiDashboardsSnapshotModel, BiDashboardsSnapshotValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsSnapshot";

export class BiDashboardsSnapshotService {
  private repository = new Map<string, BiDashboardsSnapshotModel>();

  public create(data: Omit<BiDashboardsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsSnapshotModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsSnapshotModel>): BiDashboardsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsSnapshotModel = {
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

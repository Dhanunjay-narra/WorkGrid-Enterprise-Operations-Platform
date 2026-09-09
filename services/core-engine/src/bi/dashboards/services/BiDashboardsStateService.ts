import { BiDashboardsStateModel, BiDashboardsStateValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsState";

export class BiDashboardsStateService {
  private repository = new Map<string, BiDashboardsStateModel>();

  public create(data: Omit<BiDashboardsStateModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsStateModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsStateModel>): BiDashboardsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsStateModel = {
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

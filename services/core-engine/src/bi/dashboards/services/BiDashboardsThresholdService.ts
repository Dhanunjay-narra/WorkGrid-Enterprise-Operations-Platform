import { BiDashboardsThresholdModel, BiDashboardsThresholdValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsThreshold";

export class BiDashboardsThresholdService {
  private repository = new Map<string, BiDashboardsThresholdModel>();

  public create(data: Omit<BiDashboardsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsThresholdModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsThresholdModel>): BiDashboardsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsThresholdModel = {
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

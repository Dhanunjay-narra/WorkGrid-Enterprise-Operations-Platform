import { BiDashboardsEventModel, BiDashboardsEventValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsEvent";

export class BiDashboardsEventService {
  private repository = new Map<string, BiDashboardsEventModel>();

  public create(data: Omit<BiDashboardsEventModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsEventModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsEventModel>): BiDashboardsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsEventModel = {
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

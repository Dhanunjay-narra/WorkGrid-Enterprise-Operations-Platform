import { BiDashboardsItemModel, BiDashboardsItemValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsItem";

export class BiDashboardsItemService {
  private repository = new Map<string, BiDashboardsItemModel>();

  public create(data: Omit<BiDashboardsItemModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsItemModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsItemModel>): BiDashboardsItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsItemModel = {
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

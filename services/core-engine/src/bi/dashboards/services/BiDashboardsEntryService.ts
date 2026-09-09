import { BiDashboardsEntryModel, BiDashboardsEntryValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsEntry";

export class BiDashboardsEntryService {
  private repository = new Map<string, BiDashboardsEntryModel>();

  public create(data: Omit<BiDashboardsEntryModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsEntryModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsEntryModel>): BiDashboardsEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsEntryModel = {
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

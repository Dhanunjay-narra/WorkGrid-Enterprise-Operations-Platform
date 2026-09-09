import { BiDashboardsTaskModel, BiDashboardsTaskValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsTask";

export class BiDashboardsTaskService {
  private repository = new Map<string, BiDashboardsTaskModel>();

  public create(data: Omit<BiDashboardsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsTaskModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsTaskModel>): BiDashboardsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsTaskModel = {
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

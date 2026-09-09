import { BiDashboardsSessionModel, BiDashboardsSessionValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsSession";

export class BiDashboardsSessionService {
  private repository = new Map<string, BiDashboardsSessionModel>();

  public create(data: Omit<BiDashboardsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsSessionModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsSessionModel>): BiDashboardsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsSessionModel = {
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

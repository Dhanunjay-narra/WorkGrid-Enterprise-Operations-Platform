import { BiDashboardsNodeModel, BiDashboardsNodeValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsNode";

export class BiDashboardsNodeService {
  private repository = new Map<string, BiDashboardsNodeModel>();

  public create(data: Omit<BiDashboardsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsNodeModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsNodeModel>): BiDashboardsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsNodeModel = {
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

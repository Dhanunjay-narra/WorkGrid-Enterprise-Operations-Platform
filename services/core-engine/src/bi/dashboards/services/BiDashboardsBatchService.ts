import { BiDashboardsBatchModel, BiDashboardsBatchValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsBatch";

export class BiDashboardsBatchService {
  private repository = new Map<string, BiDashboardsBatchModel>();

  public create(data: Omit<BiDashboardsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsBatchModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsBatchModel>): BiDashboardsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsBatchModel = {
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

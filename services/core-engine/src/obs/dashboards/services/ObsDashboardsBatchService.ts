import { ObsDashboardsBatchModel, ObsDashboardsBatchValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsBatch";

export class ObsDashboardsBatchService {
  private repository = new Map<string, ObsDashboardsBatchModel>();

  public create(data: Omit<ObsDashboardsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsBatchModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsBatchModel>): ObsDashboardsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsBatchModel = {
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

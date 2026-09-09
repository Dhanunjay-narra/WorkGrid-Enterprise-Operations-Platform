import { BiDashboardsQueueModel, BiDashboardsQueueValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsQueue";

export class BiDashboardsQueueService {
  private repository = new Map<string, BiDashboardsQueueModel>();

  public create(data: Omit<BiDashboardsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsQueueModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsQueueModel>): BiDashboardsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsQueueModel = {
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

import { CommCallsMetricModel, CommCallsMetricValidator } from "@nexora/types/domains/comm/calls/CommCallsMetric";

export class CommCallsMetricService {
  private repository = new Map<string, CommCallsMetricModel>();

  public create(data: Omit<CommCallsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): CommCallsMetricModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommCallsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommCallsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommCallsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommCallsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommCallsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommCallsMetricModel>): CommCallsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommCallsMetricModel = {
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

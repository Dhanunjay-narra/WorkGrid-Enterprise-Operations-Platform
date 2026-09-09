import { CommThreadsMetricModel, CommThreadsMetricValidator } from "@nexora/types/domains/comm/threads/CommThreadsMetric";

export class CommThreadsMetricService {
  private repository = new Map<string, CommThreadsMetricModel>();

  public create(data: Omit<CommThreadsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): CommThreadsMetricModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommThreadsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommThreadsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommThreadsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommThreadsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommThreadsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommThreadsMetricModel>): CommThreadsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommThreadsMetricModel = {
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

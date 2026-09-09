import { CommDigestMetricModel, CommDigestMetricValidator } from "@nexora/types/domains/comm/digest/CommDigestMetric";

export class CommDigestMetricService {
  private repository = new Map<string, CommDigestMetricModel>();

  public create(data: Omit<CommDigestMetricModel, "id" | "version" | "createdAt" | "updatedAt">): CommDigestMetricModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommDigestMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommDigestMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommDigestMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommDigestMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommDigestMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommDigestMetricModel>): CommDigestMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommDigestMetricModel = {
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

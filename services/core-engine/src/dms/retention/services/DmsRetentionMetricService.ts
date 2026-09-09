import { DmsRetentionMetricModel, DmsRetentionMetricValidator } from "@nexora/types/domains/dms/retention/DmsRetentionMetric";

export class DmsRetentionMetricService {
  private repository = new Map<string, DmsRetentionMetricModel>();

  public create(data: Omit<DmsRetentionMetricModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionMetricModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionMetricModel>): DmsRetentionMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionMetricModel = {
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

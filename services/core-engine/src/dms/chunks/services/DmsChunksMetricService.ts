import { DmsChunksMetricModel, DmsChunksMetricValidator } from "@nexora/types/domains/dms/chunks/DmsChunksMetric";

export class DmsChunksMetricService {
  private repository = new Map<string, DmsChunksMetricModel>();

  public create(data: Omit<DmsChunksMetricModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksMetricModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksMetricModel>): DmsChunksMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksMetricModel = {
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

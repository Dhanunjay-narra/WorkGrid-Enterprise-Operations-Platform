import { DmsSignaturesMetricModel, DmsSignaturesMetricValidator } from "@nexora/types/domains/dms/signatures/DmsSignaturesMetric";

export class DmsSignaturesMetricService {
  private repository = new Map<string, DmsSignaturesMetricModel>();

  public create(data: Omit<DmsSignaturesMetricModel, "id" | "version" | "createdAt" | "updatedAt">): DmsSignaturesMetricModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsSignaturesMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsSignaturesMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsSignaturesMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsSignaturesMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsSignaturesMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsSignaturesMetricModel>): DmsSignaturesMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsSignaturesMetricModel = {
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

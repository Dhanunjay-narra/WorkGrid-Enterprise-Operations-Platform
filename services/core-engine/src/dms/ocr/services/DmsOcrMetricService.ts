import { DmsOcrMetricModel, DmsOcrMetricValidator } from "@nexora/types/domains/dms/ocr/DmsOcrMetric";

export class DmsOcrMetricService {
  private repository = new Map<string, DmsOcrMetricModel>();

  public create(data: Omit<DmsOcrMetricModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrMetricModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrMetricModel>): DmsOcrMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrMetricModel = {
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

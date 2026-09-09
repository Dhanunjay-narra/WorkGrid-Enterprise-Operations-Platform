import { DmsExportMetricModel, DmsExportMetricValidator } from "@nexora/types/domains/dms/export/DmsExportMetric";

export class DmsExportMetricService {
  private repository = new Map<string, DmsExportMetricModel>();

  public create(data: Omit<DmsExportMetricModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportMetricModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportMetricModel>): DmsExportMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportMetricModel = {
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

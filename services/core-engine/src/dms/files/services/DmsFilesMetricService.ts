import { DmsFilesMetricModel, DmsFilesMetricValidator } from "@nexora/types/domains/dms/files/DmsFilesMetric";

export class DmsFilesMetricService {
  private repository = new Map<string, DmsFilesMetricModel>();

  public create(data: Omit<DmsFilesMetricModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesMetricModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesMetricModel>): DmsFilesMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesMetricModel = {
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

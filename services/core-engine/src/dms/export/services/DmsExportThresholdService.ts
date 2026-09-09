import { DmsExportThresholdModel, DmsExportThresholdValidator } from "@nexora/types/domains/dms/export/DmsExportThreshold";

export class DmsExportThresholdService {
  private repository = new Map<string, DmsExportThresholdModel>();

  public create(data: Omit<DmsExportThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): DmsExportThresholdModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsExportThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsExportThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsExportThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsExportThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsExportThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsExportThresholdModel>): DmsExportThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsExportThresholdModel = {
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

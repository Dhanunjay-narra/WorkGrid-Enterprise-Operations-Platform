import { DmsOcrThresholdModel, DmsOcrThresholdValidator } from "@nexora/types/domains/dms/ocr/DmsOcrThreshold";

export class DmsOcrThresholdService {
  private repository = new Map<string, DmsOcrThresholdModel>();

  public create(data: Omit<DmsOcrThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrThresholdModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrThresholdModel>): DmsOcrThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrThresholdModel = {
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

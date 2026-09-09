import { DmsVersionsThresholdModel, DmsVersionsThresholdValidator } from "@nexora/types/domains/dms/versions/DmsVersionsThreshold";

export class DmsVersionsThresholdService {
  private repository = new Map<string, DmsVersionsThresholdModel>();

  public create(data: Omit<DmsVersionsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsThresholdModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsThresholdModel>): DmsVersionsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsThresholdModel = {
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

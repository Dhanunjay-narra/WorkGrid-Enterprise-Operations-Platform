import { DmsChunksThresholdModel, DmsChunksThresholdValidator } from "@nexora/types/domains/dms/chunks/DmsChunksThreshold";

export class DmsChunksThresholdService {
  private repository = new Map<string, DmsChunksThresholdModel>();

  public create(data: Omit<DmsChunksThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksThresholdModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksThresholdModel>): DmsChunksThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksThresholdModel = {
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

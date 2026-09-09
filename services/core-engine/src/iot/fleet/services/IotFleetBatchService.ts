import { IotFleetBatchModel, IotFleetBatchValidator } from "@nexora/types/domains/iot/fleet/IotFleetBatch";

export class IotFleetBatchService {
  private repository = new Map<string, IotFleetBatchModel>();

  public create(data: Omit<IotFleetBatchModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetBatchModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetBatchModel>): IotFleetBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetBatchModel = {
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

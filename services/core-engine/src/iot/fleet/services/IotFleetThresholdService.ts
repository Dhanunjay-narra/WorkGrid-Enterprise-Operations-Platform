import { IotFleetThresholdModel, IotFleetThresholdValidator } from "@nexora/types/domains/iot/fleet/IotFleetThreshold";

export class IotFleetThresholdService {
  private repository = new Map<string, IotFleetThresholdModel>();

  public create(data: Omit<IotFleetThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetThresholdModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetThresholdModel>): IotFleetThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetThresholdModel = {
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

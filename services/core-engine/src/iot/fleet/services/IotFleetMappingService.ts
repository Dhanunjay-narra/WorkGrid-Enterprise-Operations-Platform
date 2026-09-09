import { IotFleetMappingModel, IotFleetMappingValidator } from "@nexora/types/domains/iot/fleet/IotFleetMapping";

export class IotFleetMappingService {
  private repository = new Map<string, IotFleetMappingModel>();

  public create(data: Omit<IotFleetMappingModel, "id" | "version" | "createdAt" | "updatedAt">): IotFleetMappingModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotFleetMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotFleetMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotFleetMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotFleetMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotFleetMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotFleetMappingModel>): IotFleetMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotFleetMappingModel = {
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

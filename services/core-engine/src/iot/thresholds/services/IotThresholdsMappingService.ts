import { IotThresholdsMappingModel, IotThresholdsMappingValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsMapping";

export class IotThresholdsMappingService {
  private repository = new Map<string, IotThresholdsMappingModel>();

  public create(data: Omit<IotThresholdsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsMappingModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsMappingModel>): IotThresholdsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsMappingModel = {
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

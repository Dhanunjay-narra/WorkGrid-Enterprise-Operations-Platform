import { IotAnomaliesMappingModel, IotAnomaliesMappingValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesMapping";

export class IotAnomaliesMappingService {
  private repository = new Map<string, IotAnomaliesMappingModel>();

  public create(data: Omit<IotAnomaliesMappingModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesMappingModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesMappingModel>): IotAnomaliesMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesMappingModel = {
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

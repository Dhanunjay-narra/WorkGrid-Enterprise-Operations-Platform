import { IotAnomaliesConfigModel, IotAnomaliesConfigValidator } from "@nexora/types/domains/iot/anomalies/IotAnomaliesConfig";

export class IotAnomaliesConfigService {
  private repository = new Map<string, IotAnomaliesConfigModel>();

  public create(data: Omit<IotAnomaliesConfigModel, "id" | "version" | "createdAt" | "updatedAt">): IotAnomaliesConfigModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotAnomaliesConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotAnomaliesConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotAnomaliesConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotAnomaliesConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotAnomaliesConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotAnomaliesConfigModel>): IotAnomaliesConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotAnomaliesConfigModel = {
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
